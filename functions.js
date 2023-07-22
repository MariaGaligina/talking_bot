const {Markup, Extra} = require('telegraf')

const includesSubstringInArray = (message) => {
	return function includesSubstring(array) {
		return array.some((substring) => message.toLowerCase().includes(substring))
	}
}

const getRandomInt = (length) => {
	return Math.floor(Math.random() * length)
}

const selectElement = (array) => {
	return array[getRandomInt(array.length)]
}

const selectRandomStickerfromAllGroups = (...stickers) => {
	const selectedArray = selectElement(stickers)
	return selectElement(selectedArray)
}

const callMenuInMessage = async (ctx) => {
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

const wordMatchingCheck = (ctx, dictionaries, includesWord) => {
	let matchcounter = 0
	for (let [key, value] of dictionaries.entries()) {
		if (includesWord(key)) {
			ctx.replyWithSticker(selectElement(value))
			matchcounter += 1
		}
	}
	return matchcounter
}

const whatICan = async (ctx) => {
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

module.exports = {
	includesSubstringInArray,
	getRandomInt,
	selectElement,
	selectRandomStickerfromAllGroups,
	callMenuInMessage,
	wordMatchingCheck,
	whatICan,
}
