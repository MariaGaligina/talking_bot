import Telegraf from 'telegraf'
import Markup from 'markup'
import Extra from 'extra'

import {greetings, perfect, joy, laughter, like, sadness, anger} from './words.js'
import {
	perfectStickers,
	joyStickers,
	laughterStickers,
	likeStickers,
	sadnessStickers,
	angerStickers,
} from './stickers.js'

import {
	includesSubstringInArray,
	getRandomInt,
	selectElement,
	selectRandomStickerfromAllGroups,
	callMenuInMessage,
	wordMatchingCheck,
	whatICan,
} from './functions.js'

//import Telegraf from 'telegraf'
//import Extra from 'telegraf'
//import Markup from 'telegraf'

const bot = new Telegraf('6344467212:AAEbIpqY7I0nJd4HVJlJk37gzwWNe632FTw')

//массивы слов - массивы стикеров
const dictionary = new Map([
	[perfect, perfectStickers],
	[joy, joyStickers],
	[laughter, laughterStickers],
	[like, likeStickers],
	[sadness, sadnessStickers],
	[anger, angerStickers],
])

//все команды

bot.command('menu', (ctx) => {
	callMenuInMessage(ctx)
})

//кнопочки
bot.start(async (ctx) => {
	await ctx.replyWithSticker(
		'CAACAgIAAxkBAAEJsxFksrjdDc8s-wAB-xgk4BUaHJ7-Y8gAAu8UAAI7IkhIDtGHPT9DmfwvBA'
	)
	await ctx.reply(
		`Привет)\nЯ создан, чтобы стать для тебя самым лучшим собеседником`,
		Extra.markup(Markup.inlineKeyboard([[Markup.callbackButton('Что я могу', 'whatICan')]]))
	)
})

bot.action('whatICan', (ctx) => whatICan(ctx))

bot.action('talk', async (ctx) => {
	await ctx.reply('Слушаю тебя)')
})

bot.action('hug', async (ctx) => {
	await ctx.reply('Иди сюда...')
	await ctx.replyWithSticker(selectElement(joyStickers))
})

bot.action('goodLuck', async (ctx) => {
	await ctx.reply('Удачи!!!')
	await ctx.replyWithSticker(
		'CAACAgIAAxkBAAEJsxNksrlHNIcZ20Dt0wkTp-aP-20IMgACWhIAAu4_4Us2E8GNf5X65C8E'
	)
})

bot.action('sad', async (ctx) => {
	await ctx.reply('Отставить слёзы!')
	await ctx.replyWithSticker(selectElement(joyStickers))
	await ctx.reply('Что испортило твоё настроение?')
	await ctx.reply('Если не хочешь об этом говорить, то ')
	await ctx.replyWithSticker(selectElement(likeStickers))
})

bot.action('managed', async (ctx) => {
	await ctx.replyWithSticker(selectElement(perfectStickers))
})

bot.action('stickers', (ctx) => {
	const stickerForSendingId = selectRandomStickerfromAllGroups(
		perfectStickers,
		joyStickers,
		sadnessStickers,
		laughterStickers,
		likeStickers
	)
	ctx.replyWithSticker(stickerForSendingId)
})

bot.on('sticker', async (ctx) => {
	const stickerForSendingId = selectRandomStickerfromAllGroups(
		perfectStickers,
		joyStickers,
		sadnessStickers,
		laughterStickers,
		likeStickers
	)
	ctx.replyWithSticker(stickerForSendingId)
})

//блок, предназначенный для анализа полученных сообщений
bot.on('text', async (ctx) => {
	const msg = ctx.message.text
	const includesWord = includesSubstringInArray(msg)
	let understandingCounter = 0

	if (msg.toLowerCase() === 'меню' || msg === 'menu') {
		return callMenuInMessage(ctx)
	}

	if (includesWord(greetings)) {
		await ctx.reply('Привет!\nКак ты?\nРад тебя слышать)')
		understandingCounter += 1
	}

	understandingCounter += wordMatchingCheck(ctx, dictionary, includesWord)

	//console.log(understandingCounter)
	if (understandingCounter === 0) {
		await ctx.reply(
			'К сожалению, я не смог тебя понять, так как мог отвечать только определённые слова/стикеры/emoji'
		)
		await ctx.replyWithSticker(selectElement(sadnessStickers))
	}
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
