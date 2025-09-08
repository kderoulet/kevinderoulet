const showAnswerButton = document.querySelector('#show-answer')
let showAnswer = false
const vocabButtonSuccess = document.querySelector('#vocab-button-success')
const vocabButtonFail = document.querySelector('#vocab-button-fail')
const vocabWord = document.querySelector('#vocab-word')
const vocabDefinition = document.querySelector('#vocab-definition')
const vocabSelectionWrapper = document.querySelector('.vocab-selection-wrapper')

// āēīōū
let wordsCh1 = {
    "mē": {
        word: "mē",
        definition: "me, myself"
    },
    "quid": {
        word: "quid",
        definition: "what (quid pro quo, quiditty)"
    },
    "nihil": {
        word: "nihil",
        definition: "nothing (nil, nihilism, annihilate)"
    },
    "nōn": {
        word: "nōn",
        definition: "not"
    },
    "saepe": {
        word: "saepe",
        definition: "often"
    },
    "sī": {
        word: "sī",
        definition: "if"
    },
    "amō": {
        word: "amō, amāre, amāvī, amātum",
        definition: "to love, to like (amorous, amatory, Amanda)"
    },
    "amābō tē": {
        word: "amābō tē",
        definition: "please (lit., I will love you)"
    },
    "cōgitō": {
        word: "cōgitō, cōgitāre, cōgitāvī, cōgitātum",
        definition: "to think, ponder, consider, plan (cogitate, cogitation, cogitative)"
    },
    "dēbeō": {
        word: "dēbeō, dēbēre, dēbuī, dēbitum",
        definition: "to owe; ought, must, should (debt, debit, due, duty)"
    },
    "dō": {
        word: "dō, dare, dedī, datum",
        definition: "to give, offer (date, data, dative)"
    },
    "errō": {
        word: "errō, errāre, errāvī, errātum",
        definition: "to wander; err, go astray, make a mistake, be mistaken (erratic, errant, erroneous, error, aberration)"
    },
    "laudō": {
        word: "laudō, laudāre, laudāvī, laudātum",
        definition: "to praise (laud, laudable, laudatory)"
    },
    "moneō": {
        word: "moneō, monere, monuī, monitum",
        definition: "to remind, advise, warn (admonish, admonition, monitor, monument, monster, premonition)"
    },
    "salveō": {
        word: "salveō, salvēre",
        definition: "to be well, be in good health"
    },
    "salvē": {
        word: "salvē, salvēte",
        definition: "hello, greetings! (salvation, salver, salvage)"
    },
    "servō": {
        word: "servō, servāre, servāvī, servātum",
        definition: "to preserve, save, keep, guard (observe, preserve, reserve, reservoir)"
    },
    "cōnservō": {
        word: "cōnservō, cōnservāre, cōnservāvī, cōnservātum (conservō)",
        definition: "a stronger form of servo, to preserve, conserve, maintain (conservative, conservation, conservator)"
    },
    "terreō": {
        word: "terreō, terrēre, terruī, territum",
        definition: "to frighten, terrify (terrible, terrific, terrify, terror, terrorist, deter)"
    },
    "valeō": {
        word: "valeō, valēre, valuī, valitūrum",
        definition: "to be strong, have power; be well"
    },
    "valē": {
        word: "valē (valēte)",
        definition: "good-bye, farewell! (valedictorian, valid, invalidate, prevail, prevelant)"
    },
    "videō": {
        word: "videō, vidēre, vīdī, vīsum",
        definition: "to see; observe, understand (video, provide, evident, view, review, revise, revision, television)"
    },
    "vocō": {
        word: "vocō, vocāre, vocāvī, vocātum",
        definition: "to call, summon (vocation, advocate, vocabulary, convoke, evoke, invoke, provoke, revoke"
    },
}
// āēīōū
let wordsCh2 = {
    "fāma": {
        word: "fāma, fāmae",
        definition: "f., rumor, report; fame, reputation (famous, defame, infamy)"
    },
    "fōrma": {
        word: "fōrma, fōrmae",
        definition: "f., form, shape; beauty (formal, format, formula, formless)"
    },
    "fortūna": {
        word: "fortūna, fortūnae",
        definition: "f., fortunate, luck (forunate, misfortune, unfortunate)"
    },
    "īra": {
        word: "īra, īrae",
        definition: "f., ire, anger (irate, irascible; but not irritate)"
    },
    "nauta": {
        word: "nauta, nautae",
        definition: "m., sailor (nautical, nautilus, argonaut)"
    },
    "pecūnia": {
        word: "pecūnia, pecūniae",
        definition: "f., moeny (pecuniary, impecunious; cf. peculation)"
    },
    "philophia": {
        word: "philosophia, phiosophiae",
        definition: "f., (Greek philosophia, love of wisdom) philosophy"
    },
    "poena": {
        word: "poena, poenae",
        definition: "f., penalty, punishment (penal, penalize, penalty, pain, subpoena)"
    },
    "poenās dare": {
        word: "poenās dare",
        definition: "to pay the penalty"
    },
    "poēta": {
        word: "poēta, poētae",
        definition: "m., poet (poetry, poetic)"
    },
    "porta": {
        word: "porta, portae",
        definition: "f., gate, entrance (portal, portico, porch, porthole)"
    },
    "puella": {
        word: "puella, puellae",
        definition: "f., girl"
    },
    "rosa": {
        word: "rosa, rosae",
        definition: "f., rose (rosary, roseate, rosette)"
    },
    "sententia": {
        word: "sententia, sententiae",
        definition: "f., feeling, thought, opinion, vote, sentence (sententious, sentencing)"
    },
    "vīta": {
        word: "vīta, vītae",
        definition: "f., life; mode of life (vital, vitality, vitamin, vitalize)"
    },
    "antīquus": {
        word: "antīquus, antīqua, antīquum",
        definition: "adj., ancient, old-time (antique, antiquities, antiquated, antiquarian)"
    },
    "magnus": {
        word: "magnus, magna, magnum",
        definition: "adj., large, great; important (magnify, magnificient, magnate, magnitude, magnanimous)"
    },
    "meus": {
        word: "meus, mea, meum",
        definition: "adj., my"
    },
    "multus": {
        word: "multus, multa, multum",
        definition: "adj., much, many (multitude, multiply, multiple; multi-)"
    },
    "tuus": {
        word: "tuus, tua, tuum",
        definition: "adj., your (singular)"
    },
    "et": {
        word: "et",
        definition: "and, even"
    },
    "et... et": {
        word: "et... et",
        definition: "both... and"
    },
    "sed": {
        word: "sed",
        definition: "but"
    },
    "Ō": {
        word: "Ō",
        definition: "O! Oh!, commonly preceding a vocative"
    },
    "sine": {
        word: "sine",
        definition: "without (sinecure, sans)"
    },
    "est": {
        word: "est",
        definition: "is"
    },

}

let vocabLists = [wordsCh1, wordsCh2]

function toggleDisplay() {
    if (!showAnswer) {
        showAnswer = true
        showAnswerButton.classList.remove('visible')
        vocabButtonSuccess.classList.add('visible')
        vocabButtonFail.classList.add('visible')
        vocabDefinition.classList.add('visible')
    } else {
        showAnswer = false
        showAnswerButton.classList.add('visible')
        vocabButtonSuccess.classList.remove('visible')
        vocabButtonFail.classList.remove('visible')
        vocabDefinition.classList.remove('visible')
    }
}

function shuffle(wordList) {
    for (let i = wordList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordList[i];
        wordList[i] = wordList[j];
        wordList[j] = temp;
    }
    return wordList;
}

showAnswerButton.addEventListener('click', toggleDisplay)

function initialize(words) {
    showAnswerButton.classList.add('visible')
    vocabSelectionWrapper.classList.add('invisible')
    let wordArray = Object.keys(words)
    wordArray = shuffle(wordArray)
    let i = 0
    setWord(wordArray[i])

    vocabButtonSuccess.addEventListener('click', () => nextWord("success"))
    vocabButtonFail.addEventListener('click', () => nextWord("fail"))

    function nextWord(message) {
        if (message !== "success") {
            wordArray.push(wordArray[i])
        }
        i++
        if (i === wordArray.length) {
            // vocabButtonSuccess.classList.remove('visible')
            // vocabButtonFail.classList.remove('visible')
            // vocabDefinition.classList.remove('visible')
            // vocabWord.textContent = "Success!"
            // vocabSelectionWrapper.classList.remove('invisible')
            // showAnswerButton.classList.remove('visible')
            location.reload();
            
        } else {
            setWord(wordArray[i])            
            toggleDisplay()
        }
    }

    function setWord(word) {
        vocabWord.textContent = words[word]["word"]
        vocabDefinition.textContent = words[word]["definition"]
    }
}

showAnswerButton.classList.add('invisible')
vocabWord.textContent = "Select a Vocab List"
vocabLists.forEach((list, i) => {
    let newButton = document.createElement('button')
    newButton.setAttribute('vocabIndex', i)
    newButton.classList.add('vocab-button')
    newButton.classList.add('visible')    
    newButton.textContent = `Chapter ${i+1} Vocab`
    vocabSelectionWrapper.appendChild(newButton)
    let vocabList = vocabLists[i]
    newButton.addEventListener('click', () => initialize(vocabList))
})
let newestButton = document.createElement('button')
newestButton.setAttribute('vocabIndex', 'all')
newestButton.textContent = `All Vocab`
newestButton.classList.add('vocab-button')
newestButton.classList.add('visible')    
vocabSelectionWrapper.appendChild(newestButton)
let vocabList = Object.assign({}, ...vocabLists)
newestButton.addEventListener('click', () => initialize(vocabList))
// initialize(wordsCh1)