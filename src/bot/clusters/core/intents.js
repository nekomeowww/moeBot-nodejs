import logger from 'logger';

export const KEY = 'witIntents';
export const SKILL_NAME = 'intents';

export default function* (session) {
    const { bot } = session;

    logger.debug(SKILL_NAME.toUpperCase());

    const intent = yield bot.wit.send(bot.message.text);
    yield bot.memcached.set(KEY, intent);

    logger.debug(intent);

    return Promise.resolve(session);
}
