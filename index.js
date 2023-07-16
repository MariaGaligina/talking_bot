const {Telegraf, Markup, Extra} = require('telegraf')

const bot = new Telegraf('6344467212:AAEbIpqY7I0nJd4HVJlJk37gzwWNe632FTw')

//несколько наборов слов для выбора ответов бота
const greetings = [
	'привет',
	'здравствуй',
	'добрый день',
	'доброе утро',
	'добрый вечер',
	'бонжур',
	'поболтаем',
]
const perfect = [
	'отличн',
	'здорово',
	'восхи',
	'замечательн',
	'превосходн',
	'молодец',
	'чётко',
	'чётенько',
	'прекрасн',
	'идеальн',
	'бомбезн',
	'харош',
	'бомб',
	'супер',
	'огонь',
	'ура',
	'😎',
	'💥',
	'🔥',
	'👍',
]
const joy = [
	'приятн',
	'хорош',
	'мил',
	'здорово',
	'красиво',
	'красота',
	'нравится',
	'нравил',
	'приветлив',
	'ласк',
	'уют',
	'🥰',
	'😊',
]
const laughter = ['хаха', 'ахах', 'ха-ха', 'ору', '😀', '😃', '😄', '😁', '😆', '😂']
const like = [
	'люб',
	'чмок',
	'обними',
	'обнимашки',
	'обнять',
	'обнимаю',
	'❤️',
	'🧡',
	'💛',
	'💚',
	'💙',
	'💜',
	'🖤',
	'🤍',
	'🤎',
	'💕',
	'💖',
	'💗',
	'😍',
	'😘',
	'😚',
	'😙',
]
const sadness = [
	'эх',
	'груст',
	'плач',
	'уныл',
	'тоскливо',
	'мрак',
	'мрачно',
	'так плохо',
	'мне плохо',
	'плохо',
	'боль',
	'тлен',
	'апатия',
	'обид',
	'скуч',
	'😢',
	'😭',
	'😩',
	'🥺',
]
const anger = ['раздража', ' зол', 'злит', 'злят', 'бесит', '🤬', '😡', '😠', '😤']

//массивы с подборками стикеров по эмоциям
const perfectStickers = [
	'CAACAgIAAxkBAAEJsB9ksSMYMp1Emny0Ewe_buJ8OEkkPwACexgAAqKNEUlFWrcoDeS17C8E',
	'CAACAgIAAxkBAAEJsCFksSM6knKoEptfBZw7l2u-E1PxzQACTgADrWW8FCFszl8rK9s8LwQ',
	'CAACAgIAAxkBAAEJsChksSNOV7MvW9tXxMxJYVVynvfKlwACZAAD5KDOBxCJHt_6mvpoLwQ',
	'CAACAgIAAxkBAAEJsCpksSNb3t6bhuB9p8lhULeRm_BVtQACXgUAAj-VzAqq1ncTLO-MOS8E',
	'CAACAgIAAxkBAAEJsC5ksSN2BsD1UrTmWGqUQpIWtedKNQACSwEAAjDUnREBhYZ3NsTI6S8E',
	'CAACAgIAAxkBAAEJsDlksSQgb_X0cmEoVwm87GIZINIW3AACTAEAAjDUnRH33m9fN4M5HC8E',
	'CAACAgIAAxkBAAEJsDtksSQype-4VRfkfRk_0HbD0QndowACWAAD5KDOB6zQ7H5i9f3_LwQ',
]
const joyStickers = [
	'CAACAgIAAxkBAAEJsEVksSYouRT6NQ0C7Tk8eriVaEv0DwACWhIAAu4_4Us2E8GNf5X65C8E',
	'CAACAgIAAxkBAAEJsENksSX4uQxkta8FKd5qNbDTl0iQPAACXAUAAj-VzApdMiyGI-YRhi8E',
	'CAACAgIAAxkBAAEJsEFksSXqQEqOAtDrC5poyx7AMLbTMgACbxcAApuNSUggQ6VeD0Xh7y8E',
	'CAACAgIAAxkBAAEJsGFksShc0D_dmi7ecJy5hecge88ZFQACYAUAAj-VzApGyHYEZMxRFS8E',
]
const laughterStickers = [
	'CAACAgIAAxkBAAEJsNZksU15D1LJMlm8Jz1XlJpqIX_nGQACIQADwZxgDKk0EkqSiHn8LwQ',
	'CAACAgIAAxkBAAEJsNRksU0GL4dj3Ejx6nQHiFgWOM068wACdgUAAj-VzApFV7w2VozN3S8E',
	'CAACAgIAAxkBAAEJsNhksU2LYqqGawEjykEJe-F20vKp-QACOwADJHFiGrVW4rs5mEP-LwQ',
	'CAACAgIAAxkBAAEJsNpksU2RaeKiwqxF9nOEze9lUo_zLgACUhIAAiB-4UuMMhMZPwqytC8E',
	'CAACAgIAAxkBAAEJsNxksU2nNQ0T1aLLpFbFzVIAAf-xLOYAAiwBAAIiN44EgbFfWRTJ52IvBA',
	'CAACAgIAAxkBAAEJsN5ksU22OgoLjIs5zvCR9llVIoE4ngAChgEAAiteUwvsveiyLrmANi8E',
]
const likeStickers = [
	'CAACAgIAAxkBAAEJsGFksShc0D_dmi7ecJy5hecge88ZFQACYAUAAj-VzApGyHYEZMxRFS8E',
	'CAACAgIAAxkBAAEJsGVksSlFMrFQHcj5stJLTvacIV_MdgACPQADJHFiGmptpaX1U366LwQ',
	'CAACAgIAAxkBAAEJsGhksSlLv1g_vou0mYXeONA3XZGEXgACWgUAAj-VzAobFrmFvSDDnS8E',
	'CAACAgIAAxkBAAEJsG9ksSmi0J4_k8tmnikXBVrs-toQOQACcAUAAj-VzArvDuYB7z8ley8E',
	'CAACAgIAAxkBAAEJsHFksSmmluRFdQ2GeaPLEY_kRdDmLgAChBwAApom4UtpTBJ3IoaoLi8E',
	'CAACAgIAAxkBAAEJsHNksSnIJVWQdzJYLDlE2LJuksWBxQACqxEAAsrwUEhJu-d0MQd_Di8E',
	'CAACAgIAAxkBAAEJsHVksSoLHeZwcH3moMtZfl4itjCrOgACWhIAAu4_4Us2E8GNf5X65C8E',
	'CAACAgIAAxkBAAEJsHdksSolf2iyzeMY-spUpPc02cuC7AACXwAD5KDOB8EFQldaO3BILwQ',
]
const sadnessStickers = [
	'CAACAgIAAxkBAAEJsJNksTRpdp6rTuTOnbhstJWkXEEvHwACPQEAAjDUnREQ98oHcZKP7i8E',
	'CAACAgIAAxkBAAEJsJVksTSZ1ZVmexFxEp5NsJ0CGb6jlAACPwEAAjDUnRH7bEz1RowY1C8E',
	'CAACAgIAAxkBAAEJsJdksTTi8wczj7fhnQgtEqNtkxSi0QACeAUAAj-VzAqq_QjcS2pGOi8E',
	'CAACAgIAAxkBAAEJsJlksTUKMUIP4ND-AAHUAAFb_JtxfOyDAAJiBQACP5XMCkCIeReG4EyMLwQ',
	'CAACAgIAAxkBAAEJsJtksTUUBCukTSB5r39Ah1jvmaE3vQACLBcAAh10SUgSG1rRyFFIuS8E',
	'CAACAgIAAxkBAAEJsJ9ksTUzPtHrcdJJze9fdC-TnhUj9gACJQADwZxgDLGbFNkrHorWLwQ',
	'CAACAgIAAxkBAAEJsKFksTVDazQZE2ObIY-pop0RTuD0DwACQQEAAiI3jgQ6ZYRAXOp8SS8E',
	'CAACAgIAAxkBAAEJsKNksTVcyk97kRFGhWZblCCQx858HQACLBcAAh10SUgSG1rRyFFIuS8E',
]
const angerStickers = [
	'CAACAgIAAxkBAAEJsKVksTcz5JhMnB3pN5LL5MANYYkSqgAChhcAAgwxEUmmqvqisa9ZGy8E',
	'CAACAgIAAxkBAAEJsKdksTc9qO6Ck9x_b7OVAVyxHxoyFwACWwUAAj-VzApBOR5dFEl0zi8E',
	'CAACAgIAAxkBAAEJsKtksTd-zIMDwN1PUD820DaGn6Ed4wACXQUAAj-VzAqkBNzb9zv7Ki8E',
	'CAACAgIAAxkBAAEJsK1ksTeZR5Fudpzz6vjsmSiho3hpfgACZwUAAj-VzAoofuUG7r451C8E',
]

function includesSubstringInArray(message) {
	return function includesSubstring(array) {
		return array.some((substring) => message.toLowerCase().includes(substring))
	}
}

function getRandomInt(length) {
	return Math.floor(Math.random() * length)
}

function selectElement(array) {
	return array[getRandomInt(array.length)]
}

function selectRandomStickerfromAllGroups(...stickers) {
	const selectedArray = selectElement(stickers)
	return selectElement(selectedArray)
}

async function callMenuInMessage(ctx) {
	return await ctx.reply(
		'Менюшка',
		Extra.markup(
			Markup.inlineKeyboard([
				[
					Markup.callbackButton('Обнять', 'hug'),
					Markup.callbackButton('Пожелать удачи', 'goodLuck'),
				],
				[
					Markup.callbackButton('Мне грустно', 'sad'),
					Markup.callbackButton('Получилось', 'managed'),
				],
				[Markup.callbackButton('Обмен стикерами', 'stickers')],
				[Markup.callbackButton('Поговорим?', 'talk')],
			])
		)
	)
}

async function whatICan(ctx) {
	await ctx.reply(`Я буду отвечать на твои сообщения разными стикерами,
	в зависимости от содержания.\n
	Также у меня есть парочка команд.\n
	Обратиться к меню можно в самом низу 
	(или командой '/menu')`)
	await ctx.replyWithPhoto({
		source: './pictures/пример переписки.png',
	})
	await ctx.reply(
		'Конопка вызова меню находится в самом низу',
		Extra.markup(Markup.keyboard([[Markup.callbackButton('Меню', 'menu')]]))
	)
	await ctx.reply(
		'Рад знакомству',
		Extra.markup(Markup.inlineKeyboard([[Markup.callbackButton('Поговорим?', 'talk')]]))
	)
}

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
	console.log(ctx.message.text.toLowerCase())
	const msg = ctx.message.text
	const includesWord = includesSubstringInArray(msg)
	let understandingCounter = 0

	if (ctx.message.text.toLowerCase() === 'меню' || ctx.message.text === 'menu') {
		return callMenuInMessage(ctx)
	}

	if (includesWord(greetings)) {
		await ctx.reply('Привет!\nКак ты?\nРад тебя слышать)')
		understandingCounter += 1
	}
	if (includesWord(perfect)) {
		await ctx.replyWithSticker(selectElement(perfectStickers))
		understandingCounter += 1
	}
	if (includesWord(joy)) {
		await ctx.replyWithSticker(selectElement(joyStickers))
		understandingCounter += 1
	}
	if (includesWord(laughter)) {
		await ctx.replyWithSticker(selectElement(laughterStickers))
		understandingCounter += 1
	}
	if (includesWord(like)) {
		await ctx.replyWithSticker(selectElement(likeStickers))
		understandingCounter += 1
	}
	if (includesWord(sadness)) {
		await ctx.replyWithSticker(selectElement(sadnessStickers))
		understandingCounter += 1
	}
	if (includesWord(anger)) {
		await ctx.replyWithSticker(selectElement(angerStickers))
		understandingCounter += 1
	}
	console.log(understandingCounter)
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
