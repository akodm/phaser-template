export const CONTAINER_ID = 'game-container';

export const DEBUG = true;

export const SCENE_KEYS = {
  BOOT: 'boot',
} as const;

export type SceneKey = keyof typeof SCENE_KEYS;
