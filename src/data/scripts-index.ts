import type { ScenarioScript, ScenarioId } from "@/lib/types";

import coffeeChat from "./scripts/coffee-chat";
import joinGroup from "./scripts/join-group";
import receiveCompliment from "./scripts/receive-compliment";
import speakUpMeeting from "./scripts/speak-up-meeting";
import declineRequest from "./scripts/decline-request";
import expressDisagreement from "./scripts/express-disagreement";

export const SCRIPTS: Record<ScenarioId, ScenarioScript> = {
  "coffee-chat": coffeeChat,
  "join-group": joinGroup,
  "receive-compliment": receiveCompliment,
  "speak-up-meeting": speakUpMeeting,
  "decline-request": declineRequest,
  "express-disagreement": expressDisagreement,
};

export function getScript(id: ScenarioId): ScenarioScript {
  return SCRIPTS[id];
}
