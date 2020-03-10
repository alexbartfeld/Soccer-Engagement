export enum event_types {
  GOAL = 1,
  YELLOW_CARD,
  RED_CARD
}

export const event_images = {
  [event_types.GOAL]: 'goal.svg',
  [event_types.YELLOW_CARD]: 'yellow_card.svg',
  [event_types.RED_CARD]: 'red_card.svg'
};
