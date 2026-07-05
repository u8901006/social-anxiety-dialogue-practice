import type { DialogueChoice, EngineState, ScenarioScript, ChoiceType } from "./types";

export function createEngineState(scenario: ScenarioScript): EngineState {
  const startNode = scenario.nodes["start"];
  const firstId = startNode.next ?? "r1";
  return {
    scenarioId: scenario.scenarioId,
    currentNodeId: firstId,
    history: [],
    round: 0,
    ended: false,
  };
}

export function getCurrentNode(state: EngineState, scenario: ScenarioScript) {
  return scenario.nodes[state.currentNodeId];
}

export function applyChoice(
  state: EngineState,
  scenario: ScenarioScript,
  choice: DialogueChoice
): EngineState {
  const node = scenario.nodes[state.currentNodeId];
  const entry = {
    nodeId: state.currentNodeId,
    nodeText: node.text,
    choiceText: choice.text,
    choiceType: choice.choiceType,
    effectiveness: choice.effectiveness,
    innerVoice: node.innerVoice,
  };
  const nextNode = scenario.nodes[choice.nextNode];
  const ended = Boolean(nextNode?.end);
  return {
    ...state,
    currentNodeId: choice.nextNode,
    history: [...state.history, entry],
    round: state.round + 1,
    ended,
    ending: ended ? nextNode.end : undefined,
  };
}

export function advanceFromNarrator(state: EngineState, scenario: ScenarioScript): EngineState {
  const node = scenario.nodes[state.currentNodeId];
  if (!node.next) return state;
  const nextNode = scenario.nodes[node.next];
  const ended = Boolean(nextNode?.end);
  return {
    ...state,
    currentNodeId: node.next,
    round: state.round,
    ended,
    ending: ended ? nextNode.end : undefined,
  };
}

// Fisher–Yates 洗牌（避免位置學習效應）
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type ChoiceDistribution = Record<ChoiceType, number>;

export function choiceDistribution(state: EngineState): ChoiceDistribution {
  const dist: ChoiceDistribution = {
    "approach-express": 0,
    "approach-partial": 0,
    "safety-behavior": 0,
    "avoid-escape": 0,
    overcompensate: 0,
  };
  for (const h of state.history) dist[h.choiceType] += 1;
  return dist;
}
