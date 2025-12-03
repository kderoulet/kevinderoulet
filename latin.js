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
        definition: "n. indeclineable, nothing (nil, nihilism, annihilate)"
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
    "patria": {
        word: "patria, patriae",
        definition: "f., fatherland, native land, one's country (patriotic, expatriate, repatriate)"
    },
    "pecūnia": {
        word: "pecūnia, pecūniae",
        definition: "f., money (pecuniary, impecunious; cf. peculation)"
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
// āēīōū
let wordsCh3 = {
    "ager": {
        word: "ager, agrī",
        definition: "m., field, farm (agrarian, agriculture, agronomy)"
    },
    "agricola": {
        word: "agricola, agricolae",
        definition: "m., farmer"
    },
    "amīcus": {
        word: "amīcus, amīcī (amīca, amīcae)",
        definition: "m., (f.), friend (amicable, amiable, amity)"
    },
    "fēmina": {
        word: "fēmina, fēminae",
        definition: "f., woman (female, feminine, femininity)"
    },
    "fīliābus": {
        word: "fīliābus, fīlia, fīliae",
        definition: "f., daughter (filiation, affiliation, affiliate, filial)"
    },
    "fīlius": {
        word: "fīlius, fīliī",
        definition: "m., son (filiation, affiliation, affiliate, filial)"
    },
    "numerous": {
        word: "numerous, numerī",
        definition: "m., number (numeral, innumerable, enumerate)"
    },
    "populus": {
        word: "populus, populī",
        definition: "m., the people, a people, a nation (populace, population, popularity)"
    },
    "puer": {
        word: "puer, puerī",
        definition: "m., boy; plural boys, children (puerile, puerility, perperous)"
    },
    "sapientia": {
        word: "sapientia, sapientiae",
        definition: "f., wisdom (sapience, sapient, sage, savant)"
    },
    "vir": {
        word: "vir, virī",
        definition: "m., man, hero (virtue, virile, triumvirate)"
    },
    "avārus": {
        word: "avārus, avāra, avārum",
        definition: "greedy, avaricious (avarice, avariciousness, avid)"
    },
    "paucī": {
        word: "paucī, paucae, pauca",
        definition: "few, a few (paucity, pauciloquent, poco)"
    },
    "Rōmanus": {
        word: "Rōmanus, Rōmana, Rōmanum",
        definition: "Roman (romance, romantic, romanticism, Romania)"
    },
    "dē": {
        word: "dē",
        definition: "down from, from, concerning, about"
    },
    "in": {
        word: "in",
        definition: "prep., + abl. in, on; prep., + acc. into, twoard; against"
    },
    "hodiē": {
        word: "hodiē",
        definition: "adv., today (hodiernal)"
    },
    "semper": {
        word: "semper",
        definition: "adv., always (sempiternal)"
    },
    "habeō": {
        word: "habeō, habēre, habuī, habitum",
        definition: "to have, hold, possess; consider, regard (in-habit, exhibit, habit, habitat)"
    },
    "satiō": {
        word: "satiō, satiāre, satiāvī, satiātum",
        definition: "to satisfy, sate (satiate, insatiable, satiety, satisfaction)"
    }
}
// āēīōū
let wordsCh4 = {
    "bāsium": {
        word: "bāsium, bāsaiī",
        definition: "n., kiss (basiate)"
    },
    "bellum": {
        word: "bellum, bellī",
        definition: "n., war (bellicose, belligerent, rebel, rebellion, revel)"
    },
    "cōnsilium": {
        word: "cōnsilium, cōnsiliī",
        definition: "n., plan, purpose, counsel, advice, judgment, wisdom (counsel, counselor, consiliate, reconcile)"
    },
    "cūra": {
        word: "cūra, cūrae",
        definition: "f., care, attention, caution, anxiety (cure, curator, curious, curiosity, curio, curettage, sinecure)"
    },
    "dōnum": {
        word: "dōnum, dōnī",
        definition: "n., gift, present (donate, donation, condone)"
    },
    "exitium": {
        word: "exitium, exitiī",
        definition: "n., destruction, ruin (exit)"
    },
    "magister": {
        word: "magister, magistrī (magistra, magistrae)",
        definition: "m., (f.), schoolmaster or schoolmistress, teacher, master or mistress (magistrate, magistracy, magisterial, maestro, mastery, mister, miss)"
    },
    "mora": {
        word: "mora, morae",
        definition: "f., delay (moratorium, demur)"
    },
    "oculus": {
        word: "oculus, oculī",
        definition: "m., eye (ocular, oculist, binoculars, monocle)"
    },
    "officium": {
        word: "officium, officiī",
        definition: "n., duty, service (office, officer, official, officious)"
    },
    "ōtium": {
        word: "ōtium, ōtiī",
        definition: "n., leisure, peace (otiose, negotiate)"
    },
    "perīculum": {
        word: "perīculum, perīculī",
        definition: "n., danger, risk (peril, perilous, imperil, parlous)"
    },
    "remedium": {
        word: "remedium, remediī",
        definition: "n., cure, remedy (remedial, irremediable, remediation)"
    },
    "bellus": {
        word: "bellus, bella, bellum",
        definition: "pretty, handsome, charming (belle, beau, beauty, embellish, belladonna, belleslettres)"
    },
    "bonus": {
        word: "bonus, bona, bonum",
        definition: "good, kind (bonus, bonanza, bonny, bounty, bona fide)"
    },
    "hūmanus": {
        word: "hūmanus, hūmāna, hūmānum",
        definition: "pertaining to man, human, humane, kind; refined, cultivated (humanity, humanitarian, humanism)"
    },
    "malus": {
        word: "malus, mala, malum",
        definition: "bad, wicked, evil (malice, malicious, malign, malignant, malaria)"
    },
    "parvus": {
        word: "parvus, parva, parvum",
        definition: "small, little (parvovirus, parvule, parvicelluar)"
    },
    "stultus, stulta": {
        word: "stultus, stulta, stultum",
        definition: "foolish (stultify, stultification)"
    },
    "stultus, stultī": {
        word: "stultus, stultī",
        definition: "m., a fool (stultify, stultification)"
    },
    "vērus": {
        word: "vērus, vēra, vērum",
        definition: "true, real, proper (verify, verisimilitude, very, veracity)"
    },
    "iuvō": {
        word: "iuvō (or adiuvō), iuvāre, iūvī, iūtum",
        definition: "to help, aid, assist; please (adjutant, coadjustant, aid, aid-de-camp)"
    },
    "sum": {
        word: "sum, esse, fuī, futūrum",
        definition: "to be, exist (essence, essential, future, futurity)"
    }
}
// āēīōū
let wordsCh5 = {
    "adulēscentia": {
        word: "adulēscentia, adulēscentiae",
        definition: "f., youth, young manhood; youthfulness (adolescence, adolescent)"
    },
    "animus": {
        word: "animus, animī",
        definition: "m., soul, spirit, mind (animus, animosity, magnanimous, unanimous, pusillanimous)"
    },
    "animī": {
        word: "animī, animōrum",
        definition: "high spirits, pride, courage"
    },
    "caelum": {
        word: "caelum, caelī",
        definition: "n., sky, heaven (ceiling, celestial, Celete, cerulean)"
    },
    "culpa": {
        word: "culpa, culpae",
        definition: "f., fault, blame (culpable, culprit, exculpate, inculpate)"
    },
    "glōria": {
        word: "glōria, glōriae",
        definition: "f., glory, fame (glorify, glorification, glorious)"
    },
    "verbum": {
        word: "verbum, verbī",
        definition: "n., word (verb, adverb, verbal, verbiage, verbose, proverb)"
    },
    "tē": {
        word: "tē",
        definition: "abl and acc sg., you, yourself"
    },
    "līber": {
        word: "līber, lībera, līberum",
        definition: "free (liberal, liberality, libertine)"
    },
    "noster": {
        word: "noster, nostra, nostrum",
        definition: "our, ours (nostrum, paternoster)"
    },
    "pulcher": {
        word: "pulcher, pulchra, pulchrum",
        definition: "beautiful, handsome; fine (pulchritude, pulchritudinous)"
    },
    "sānus": {
        word: "sānus, sāna, sānum",
        definition: "sound, healthy, sane (sanity, sanitary, sanitation, sanitarium, insane)"
    },
    "igitur": {
        word: "igitur",
        definition: "conj. postpositive, therefore, consequently"
    },
    "-ne": {
        word: "-ne",
        definition: "interrogative suffix attached to the first word of a sentence, typically the verb or another word on which the question hinges, to introduce a question whose answer is uncertain"
    },
    "propter": {
        word: "propter",
        definition: "prep. + acc., on account of, because of (post hoc ergo proper hoc - after this therefore on account of this)"
    },
    "crās": {
        word: "crās",
        definition: "adv, tomorrow (procrastinate, procrastination)"
    },
    "heri": {
        word: "heri",
        definition: "adv., yesterday"
    },
    "quandō": {
        word: "quandō",
        definition: "interrogative and rel adv and con., when"
    },
    "si quandō": {
        word: "si quandō",
        definition: "if ever"
    },
    "satis": {
        word: "satis",
        definition: "indeclinable noun, adj., and adv., enough, sufficient / sufficiently (satisfy, satiate, sate)"
    },
    "tum": {
        word: "tum",
        definition: "adv., then, at that time; thereupon, in the next place"
    },
    "cēno": {
        word: "cēno, cēnāre, cēnāvī, cēnātum",
        definition: "to dine (cenacle)"
    },
    "culpō": {
        word: "culpō, culpāre, culpāvī, culpātum",
        definition: "to blame, censure"
    },
    "maneō": {
        word: "maneō, manēre, mānsī, mānsum",
        definition: "to remain, stay, stay behind, abide, continue (mansion, manor)"
    },
    "remaneō": {
        word: "remaneō, remanēre, remānsī, remānsum",
        definition: "to remain, stay, stay behind, abide, continue (remnant, immanent)"
    },
    "superō": {
        word: "superō, superāre, superāvī, superātum",
        definition: "to be above, have the upper hand, surpass; overcome, conquer (superable, insuperable)"
    }
}
// āēīōū
let wordsCh6 = {
    "deus": {
        word: "deus, -i",
        definition: "m., God, god, goddess"
    },
    "discipulus": {
        word: "discipulus, disciplī, (discipula, discipulae)",
        definition: "m. (f.), learner, pupil, student (disciple, discipline, disciplinary)"
    },
    "īnsidiae": {
        word: "īnsidiae, īnsidiārum",
        definition: "f. pl., ambush, plot, treachery (insidious)"
    },
    "liber": {
        word: "liber, librī",
        definition: "m., book (library, librarian, libretto)s"
    },
    "tyrannus": {
        word: "tyrannus, tyrannī",
        definition: "m. absolute ruler, tyrant (tyrannical, tyrannous, tyrannicide)"
    },
    "vitium": {
        word: "vitium, vitiī",
        definition: "n., fault, crime, vice (vitiate, vicious, vituperate)"
    },
    "Graecus": {
        word: "Graecus, Graeca, Graecum",
        definition: "Greek"
    },
    "Graecus, Graecī": {
        word: "Graecus, Graecī",
        definition: "m., a Greek"
    },
    "perpetuus": {
        word: "perpetuus, perpetua, perpetuum",
        definition: "perpetual, lasting, uninterrupted, continuous (perpetuate, perpetuity)"
    },
    "plēnus": {
        word: "plēna, plēnus, plēnum",
        definition: "full, abundant, generous (plenary, plenteous, plentiful, plenty)"
    },
    "salvus": {
        word: "salvus, salva, salvum",
        definition: "safe, sound"
    },
    "secundus": {
        word: "secundus, secunda, secundum",
        definition: "second, favorable (secondary)"
    },
    "vester": {
        word: "vester, vestra, vestrum",
        definition: "your (pl.)"
    },
    "-que": {
        word: "-que, ENCLITIC",
        definition: "conj., and; appended to the second of two words to be joined (ex: fāma glōriaque)"
    },
    "ubi": {
        word: "ubi",
        definition: "(1) rel. adv. and conj., where, when (2) interog. adv. and conj., where? (ubiquitous, ubiquity)"
    },
    "ibi": {
        word: "ibi",
        definition: "adv., there (ib. or ibid)"
    },
    "nunc": {
        word: "nunc",
        definition: "adv., now, at present (quidnunc)"
    },
    "quārē": {
        word: "quārē",
        definition: "adv., lit because of which thing, (but more commonly) therefore, wherefore, why"
    },
    "possum": {
        word: "possum, posse, potuī",
        definition: "to be able, can could, have power (posse, possible, potent, potentate, potential, omnipotent)"
    },
    "tolerō": {
        word: "tolerō, tolerāre, tolerāvī, tolerātum",
        definition: "to bear, endure (tolerate, toleration, tolerable, intolerable, intolerance)"
    },
}
let wordsCh7 = {
    "amor": {
        word: "amor, amōris",
        definition: "m., love (amorous, enamoured)"
    },
    "carmen": {
        word: "carmen, carmenis",
        definition: "n., song, poem (charm)"
    },
    "cīvitās": {
        word: "cīvitās, cīvitātis",
        definition: "f., state, citizenship (city)"
    },
    "corpus": {
        word: "corpus, corporis",
        definition: "n., body (corps, corpse, corpuscle, corporate, corset)"
    },
    "homō": {
        word: "homō, hominis",
        definition: "m., human being, man (homicide, homage, homo sapiens)"
    },
    "labor": {
        word: "labor, labōris",
        definition: "m., labor, work, toil; a work, production (laboratory, belabor, collaborate)"
    },
    "littera": {
        word: "littera, litterae",
        definition: "f., a letter of the alphabet (letters, alliteration)"
    },
    "litterae": {
        word: "litterae, litterārum",
        definition: "f. pl., a letter or epistle, literature (literal, illiterate)"
    },
    "mōs": {
        word: "mōs, mōris",
        definition: "m., habit, custom, manner (moral, immorality)" 
    },
    "mōrēs": {
        word: "mōrēs, mōrum",
        definition: "m. pl., habits, morals, character (mores, morale, morose)"
    },
    "nōmen": {
        word: "nōmen, nōminis",
        definition: "n., name (nomenclature, noun, nominate, misnomer)"
    },
    "pāx": {
        word: "pāx, pācis",
        definition: "f., peace (pacify, pacific, pacifist, appease, pay)"
    },
    "rēgīna": {
        word: "rēgīna, regīnae",
        definition: "f., queen (Regina, reginal)"
    },
    "rēx": {
        word: "rēx, rēgis",
        definition: "m., king (regal, regalia, regicide, royal)"
    },
    "tempus": {
        word: "tempus, temporis",
        definition: "n., time, occasion, opportunity (tempo, temporary, contemporary, temporal, temporize, extempore, tense)"
    },
    "terra": {
        word: "terra, terrae",
        definition: "f., earth, ground, land, country (terrestrial, terrace, terrier, territory, subterranean)"
    },
    "uxor": {
        word: "uxor, uxōris",
        definition: "f., wife (uxorial, uxorious, uxoricide)"
    },
    "virgō": {
        word: "virgō, virginis",
        definition: "f., maiden, virgin (virgin, virginal, virginity, Virginia)"
    },
    "virtūs": {
        word: "virtūs, virtūtis",
        definition: "f., manliness, courage; excellence, character, worth, virtue (virtuouso, virtuosity, virtual)"
    },
    "novus": {
        word: "novus, nova, novum",
        definition: "new, strange (novel, novelty, novice, innovate)"
    },
    "post": {
        word: "post",
        definition: "prep. + acc., after, behind (posthumous, posterity, postwar)"
    },
    "sub": {
        word: "sub",
        definition: "prep. + abl. with verbs of rest, prep. + acc. with verbs of motion, under, up under, close to, down to, to/into (suffix, subterranean, suburb, sustain)"
    },
    "audeō": {
        word: "audeō, audēre, ausus sum",
        definition: "to dare (audacious, audacity)"
    },
    "nēco": {
        word: "nēco, necāre, necāvī, necātum",
        definition: "to murder, to kill (internecine)"
    },
}

let wordsCh8 = {
    "Cicerō": {
        word: "Cicerō, Cicerōnis",
        definition: "m., (Marcus Tullius) Cicero"
    },
    "cōpia": {
        word: "cōpia, cōpiae",
        definition: "f., abundance, supply (copious)"
    },
    "cōpiae": {
        word: "cōpiae, cōpiārum",
        definition: "pl., supplies, troops, forces (copious, copy, cornucopia)"
    },
    "frāter": {
        word: "frāter, frātris",
        definition: "m., brother (fraternal, fraternity, fraternize)"
    },
    "laus": {
        word: "laus, laudis",
        definition: "f., praise, glory, fame (laud, laudable, laudation, laudatory, magna cum laude)"
    },
    "lībertās": {
        word: "lībertās, lībertātis",
        definition: "f., liberty"
    },
    "ratiō": {
        word: "ratiō, ratiōnis",
        definition: "f., reckoning, account; reason, judgment, consideration; system; manner, method (ratio, ration, rational, irrational, ratiocination)"
    },
    "scrīptor": {
        word: "scrīptor, scrīptōris",
        definition: "m., writer, author (scriptorium)"
    },
    "sorōris": {
        word: "sorōris",
        definition: "f., sister (sororal, sorority)"
    },
    "victōria": {
        word: "victōria, victōriae",
        definition: "f., victory (victorious, Victoria)"
    },
    "dum": {
        word: "dum",
        definition: "conj., while, as long as, at the same time that; + subjunct., until"
    },
    "ad": {
        word: "ad",
        definition: "prep. + acc., to, up to, near to"
    },
    "ex": {
        word: "ex, ē",
        definition: "prep. + abl., out of, from, from within; by reason of, on account of"
    },
    "numquam": {
        word: "numquam",
        definition: "adv., never"
    },
    "tamen": {
        word: "tamen",
        definition: "adv., nevertheless, still"
    },
    "agō": {
        word: "agō, agere, ēgī, āctum",
        definition: "to drive, lead, do, act; pass, spend (life or time); (agent, agenda, active, action)"
    },
    "grātiās agere": {
        word: "grātiās agere",
        definition: "+ dat., for the person being thanked, to thank (someone); lit to give thanks to"
    },
    "dēmōnstrō": {
        word: "dēmōnstrō, dēmōnstrāre, dēmōnstrāvī, dēmōnstrātum",
        definition: "to point out, to show, demonstrate (demonstrable, demonstration, demonstrative)"
    },
    "discō": {
        word: "discō, discere, didicī",
        definition: "to learn (disciple, disciplinary)"
    },
    "doceō": {
        word: "doceō, docēre, docuī, doctum",
        definition: "to teach (docent, docile, document, doctor, doctrine, indoctrinate)"
    },
    "dūcō": {
        word: "dūcō, dūcere, dūxī, dūctum",
        definition: "to lead; consider, regard; prolong (ductile, abduct, adduce, produce, reduce)"
    },
    "gerō": {
        word: "gerō, gerere, gessī, gestum",
        definition: "to carry; carry on, manage, conduct, wage, accomplish, perform (gerund, gesture, jest, belligerent, digest, exaggerate, register)"
    },
    "scrībō": {
        word: "scrībō, scrībere, scrīpsī, scrīptum",
        definition: "to write, compose (ascribe, conscript, scripture, scriblle, scrivener, shrive)"
    },
    "trahō": {
        word: "trahō, trahere, trāxī, tractum",
        definition: "to draw, drag; derive, acquire (attract, contract, tractor)"
    },
    "vincō": {
        word: "vincō, vincere, vīcī, victum",
        definition: "to conquer, overcome (convince, convict, evince, evict, invincible, Vincent, vanquish)"
    },
}

let wordsCh9 = {
    "locus": {
        word: "locus, locī",
        definition: "m., place; passage in literature"
    },
    "luca": {
        word: "loca, locōrum",
        definition: "n., places, region"
    },
    "morbus": {
        word: "morbus, morbī",
        definition: "m., disease, sickness (morbid, morbidity, morbidness, morbose)"
    },
    "studium": {
        word: "studium, studiī",
        definition: "n., eagerness, zeal, pursuit, study (studio, studious)"
    },
    "hic": {
        word: "hic, haec, hoc",
        definition: "this; the latter; sometimes he/she/they (ad hoc)"
    },
    "ille": {
        word: "ille, illa, illud",
        definition: "that; the former; the famous; he, she, it, they"
    },
    "iste": {
        word: "iste, ista, istud",
        definition: "that of yours, that; such; sometimes used contemptuously"
    },
    "alius": {
        word: "alius, alia, aliud",
        definition: "other, another (alias, alibi, alien)"
    },
    "aliī": {
        word: "aliī... aliī",
        definition: "some... others"
    },
    "alter": {
        word: "alter, altera, alterum",
        definition: "the other (of two), second (alter, alteration, alternate, altercation, altruism, adultery)"
    },
    "neuter": {
        word: "neuter, neutra, neutrum",
        definition: "not either, neither (neutrality, neutralize, neutron)"
    },
    "nūllus": {
        word: "nūllus, nūlla, nūllum",
        definition: "not any, no, none (null, nullify, nullification, annul"
    },
    "sōlus": {
        word: "sōlus, sōla, sōlum",
        definition: "alone, only, the only (sole, solitary, soliloquy, solo, sullen)"
    },
    "nōn sōlum": {
        word: "nōn sōlum... set etiam",
        definition: "not only... but also"
    },
    "tōtus": {
        word: "tōtus, tōta, tōtum",
        definition: "whole, entire (total, totality, factotum, in toto)"
    },
    "ūllus": {
        word: "ūllus, ūlla, ūllum",
        definition: "any"
    },
    "ūnus": {
        word: "ūnus, ūna, ūnum",
        definition: "one, single, alone (unit, union, onion, unicorn)"
    },
    "uter": {
        word: "uter, utra, utrum",
        definition: "either, which (of two)"
    },
    "enim": {
        word: "enim",
        definition: "postpositive conj., for, in fact, truly"
    },
    "nimis": {
        word: "nimis or nimium",
        definition: "adv., too, too much, excessively; exceedingly, very (nimiety)"
    },
}
let wordsCh10 = {
    "amīcitia": {
        word: "amīcitia, amīcitiae",
        definition: "f., friendship (amicable, amity)"
    },
    "cupiditās": {
        word: "cupiditās, cupīditātis",
        definition: "f., desire, longing, passion; cupidity, avarice (Cupid)"
    },
    "hōra": {
        word: "hōra, hōrae",
        definition: "f., hour, time (horoscope)"
    },
    "nātūra": {
        word: "nātūra, nātūrae",
        definition: "f., nature (natural, perternatural, supernatural)"
    },
    "senectūs": {
        word: "senectūs, senectūtis",
        definition: "f., old age (secescent, senility)"
    },
    "timor": {
        word: "timor, timōris",
        definition: "m., fear (timorous, timid)"
    },
    "vēritās": {
        word: "vēritās, vēritātis",
        definition: "f., truth (verify, veritable, verity)"
    },
    "via": {
        word: "via, viae",
        definition: "f., way, road, street (via, viaduct, deviate, obvious, impervious, previous, trivial, voyage, envoy)"
    },
    "voluptās": {
        word: "voluptās, voluptātis",
        definition: "f., pleasure (voluptuary, voluptuous, voluptuousity)"
    },
    "beātus": {
        word: "beātus, beāta, beātum",
        definition: "happy, fortunate, blessed (beatific, beatify, beatitude, Beatrice)"
    },
    "quoniam": {
        word: "quoniam",
        definition: "conj., since, inasmuch as"
    },
    "cum": {
        word: "cum",
        definition: "prep. + abl. with"
    },
    "audiō": {
        word: "audiō, audīre, audīvī, audītum",
        definition: "to hear, listen to (audible, audience, audit, audition, auditory"
    },
    "capiō": {
        word: "capiō, capere, cēpī, captum",
        definition: "to take, capture, seize, get"
    },
    "dīcō": {
        word: "dīcō, dīcere, dīxī, dīctum",
        definition: "to say, tell, speak; name, call (dictat, dictum, diction, ditto, contradict)"
    },
    "faciō": {
        word: "faciō, facere, fēcī, factum",
        definition: "to make, do, accomplish (facile, fact, faction, faculty, fashion, feat)"
    },
    "fugiō": {
        word: "fugiō, fugere, fūgī, fugitūrum",
        definition: "to flee, hurry away; escape; go into exile; avoid, shun (fugitive, fugue, centrifugal, refuge)"
    },
    "veniō": {
        word: "veniō, venīre, vēnī, ventum",
        definition: "to come (advent, adventure, avenue, convene, covenant, event, venue)"
    },
    "inveniō": {
        word: "inveniō, invenīre, invēnī, inventum",
        definition: "to come upon, find (invent, inventor, inventive, inventory)"
    },
    "vīvō": {
        word: "vīvō, vīvere, vīxī, vīctum",
        definition: "to live (convivial, revive, survive, vivacity, vivid, victual)"
    },
}

let wordsCh11 = {
    "caput": {
        word: "caput, capitis",
        definition: "n., head; leader; beginning; life; heading; chapter (capital, capitulate, captain, chief, cattle, cadet, precipice)"
    },
    "cōnsul": {
        word: "cōnsul, cōnsulis",
        definition: "m., consul (consular, consulate, consulship)"
    },
    "nēmō": {
        word: "nēmō, nūllīus, neminī, nēminem, nūllō or nūllā",
        definition: "m. or f., no one, nobody (Nemo)"
    },
    "ego": {
        word: "ego, meī",
        definition: "I (ego, egoism, egotism, egotistical)"
    },
    "tū": {
        word: "tū, tuī",
        definition: "you"
    },
    "is": {
        word: "is, ea, id",
        definition: "this, that; he, she, it"
    },
    "īdem": {
        word: "īdem, eadem, idem",
        definition: "the same (identical, identity, id.)"
    },
    "amīcus": {
        word: "amīcus, amīca, amīcum",
        definition: "friendly (amicable, amiable)"
    },
    "cārus": {
        word: "cārus, cāra, cārum",
        definition: "dear (caress, charity, charitable, cherish)"
    },
    "quod": {
        word: "quod",
        definition: "because"
    },
    "neque": {
        word: "neque, nec",
        definition: "conj. and not, nor;"
    },
    "neque... neque": {
        word: "neque... neque",
        definition: "neither... nor"
    },
    "autem": {
        word: "autem",
        definition: "postpositive conj., however; moreover"
    },
    "bene": {
        word: "bene",
        definition: "adv., well, satisfactorily, quite (benediction, benefit, benefit, benefactor, beneficent, benevolent)"
    },
    "etiam": {
        word: "etiam",
        definition: "adv., even, also"
    },
    "intellegō": {
        word: "intellegō, intellegere, intellēxī, intellēctum",
        definition: "to understand (intelligent, intellegentsia, intelligible)"
    },
    "mittō": {
        word: "mittō, mittere, mīsī, missum",
        definition: "to send, let go (admit, commit, emit, omit, permit, promise, compromise)"
    },
    "sentiō": {
        word: "sentiō, sentīre, sēnsī, sēnsum",
        definition: "to feel, perceive, think, experience (assent, consent, dissent, presentiment, resent, sentimental, scent)"
    },
}

let wordsCh12 = {
    "adulēscēns": {
        word: "adulēscēns, adulēscentis",
        definition: "m. and f., young man or woman (adolescent, adolescence, adult)"
    },
    "annus": {
        word: "annus, annī",
        definition: "m., year (annals, anniversary, annual, perennial, millennium, superannuated)"
    },
    "Asia": {
        word: "Asia, Asiae",
        definition: "f., Asia, commonly referring to Asia Minor"
    },
    "Caesar": {
        word: "Caesar, Caesaris",
        definition: "m., Caesar (caesarian, Casariusm, kaiser, czar, tsar)"
    },
    "māter": {
        word: "māter, mātris",
        definition: "f., mother (maternal, matriarchy, matrimony, matriculate, matrix, matron)"
    },
    "medicus": {
        word: "medicus, medicī",
        definition: "m. (medica, medicae f.), doctor, physician (medic, medical, medicate, medicine)"
    },
    "pater": {
        word: "pater, patris",
        definition: "m., father (paternal, paternity, patrician, patrimony, patron, patronage, patronize, patter, padre, pere)"
    },
    "patientia": {
        word: "patientia, patientiae",
        definition: "f., suffering; patience, endurance (patient, impatient)"
    },
    "prīncipium": {
        word: "prīncipium, prīncipiī",
        definition: "n., beginning (principal, principle)"
    },
    "acerbus": {
        word: "acerbus, acerba, acerbum",
        definition: "harsh, bitter, grievous (acerbic, acerbity, exacerbate)"
    },
    "prō": {
        word: "prō",
        definition: "prep. + abl. in front of, before, on behalf of, for the sake of, in return for, instead of, for, as"
    },
    "diū": {
        word: "diū",
        definition: "adv., long, for a long time"
    },
    "nūper": {
        word: "nūper",
        definition: "adv., recently"
    },
    "āmittō": {
        word: "āmittō, āmittere, āmīsī, āmissum",
        definition: "to send away; lose, let go (amissible)"
    },
    "cadō": {
        word: "cadō, cadere, cecidī, cāsūrum",
        definition: "to fall (cadence, case, casual, cascade, chance, accident, incident, decadence, decay, deciduous)"
    },
    "creō": {
        word: "creō, creāre, creāvī, creātum",
        definition: "to create (creation, creativity, creature, procreate)"
    }
}

let wordsCh13 = {
    "dīvitae": {
        word: "dīvitae, dīvitiārum",
        definition: "f. pl., riches, wealth"
    },
    "factum": {
        word: "factum, factī",
        definition: "n., deed, act, achievement (fact, factual, faction, feat)"
    },
    "signum": {
        word: "signum, signī",
        definition: "n., sign, signal, indication; seal (assign, consign, countersign, design, ensign, insignia, resign, seal, signet)"
    },
    "ipse": {
        word: "ipse, ipsa, ipsum",
        definition: "intensive pron., myself, yourself, himself/herself/itself; the very, the actual (ipso facto, solipsistic)"
    },
    "quisque": {
        word: "quisque, quidque (gen. cuiusque; dat. cuique)",
        definition: "indefinite pronoun., each one, each person, each thing"
    },
    "suī": {
        word: "suī",
        definition: "reflexive 3rd person pron., himself, herself, itself, themselves (suicide, per se)"
    },
    "doctus": {
        word: "doctus, docta, doctum",
        definition: "taught, learned, skilled (doctor, doctorate, doctrine, indoctrinate)"
    },
    "fortūnātus": {
        word: "fortūnātus, fortūnāta",
        definition: "lucky, fortunate, happy"
    },
    "suus": {
        word: "suus, sua, suum",
        definition: "reflexive 3rd person possessive adj., his own, her own, its own, their own (sui generis)"
    },
    "nam": {
        word: "nam",
        definition: "conj., for"
    },
    "ante": {
        word: "ante",
        definition: "prep. + acc., before, in front of; adv., before, previously (advance, advantage, ante meridiem)"
    },
    "per": {
        word: "per",
        definition: "prep + acc., through; + reflexive pron., by (perchance, perforce, perhaps, preceive, perfect)"
    },
    "ōlim": {
        word: "ōlim",
        definition: "adv., once, long ago, formerly; some day, in the future"
    },
    "alō": {
        word: "alō, alere, aluī, altum",
        definition: "to nourish, support, sustain, increase; cherish (ailment, alimentary, alimony, coalesce)"
    },
    "dīligō": {
        word: "dīligō, dīligere, dīlēxī, dīlēctum",
        definition: "to esteem, love (diligent, diligence)"
    },
    "iungō": {
        word: "iungō, iungere, iūnxī, iūnctum",
        definition: "to join (join, joint, junction, adjunct, conjunction, enjoin, subjunctive)"
    },
    "stō": {
        word: "stō, stāre, stetī, statum",
        definition: "to stand, stand still or firm (stable, state, station, statue, stature, statute, establish, instant, stay)"
    },
}

let wordsCh14 = {
    "animal": {
        word: "animal, animālis",
        definition: "n., a living creature, animal (animate, animation)"
    },
    "aqua": {
        word: "aqua, aquae",
        definition: "f., water (aquatic, Aquarius, aqueduct, sewer)"
    },
    "ars": {
        word: "ars, artis",
        definition: "f., art, skill (artifact, artifice, artificial, artisan, artist, inert)"
    },
    "auris": {
        word: "auris, auris",
        definition: "f., ear (aural, auricle, auricular)"
    },
    "cīvis": {
        word: "cīvis, cīvis",
        definition: "m. and f., citizen (civic, civil, civilian)"
    },
    "iūs": {
        word: "iūs, iūris",
        definition: "n., right, justice, law (jurisdiciton, jurist, juror, just, justice)"
    },
    "mare": {
        word: "mare, maris",
        definition: "n., sea (marine, mariner, marinate, maritime, submarine, rosemary)"
    },
    "mors": {
        word: "mors, mortis",
        definition: "f., death (mortal, immortal, mortify, mortgage)"
    },
    "nūbēs": {
        word: "nūbēs, nūbis",
        definition: "f., cloud (nubilous, nubilose, nuance)"
    },
    "ōs": {
        word: "ōs, ōris",
        definition: "n., mouth, face (oral, orifice, orator)"
    },
    "pars": {
        word: "pars, partis",
        definition: "f., part, share, direction (party, partial, partake, particle, partisan, apart)"
    },
    "Rōma": {
        word: "Rōma, Rōmae",
        definition: "f., Rome (romance, romantic, romanticism)"
    },
    "turba": {
        word: "turba, turbae",
        definition: "f., uproar, disturbance; mob, crowd, multitude (turbid, turbulent, turbine, turbo, disturb, trouble)"
    },
    "urbs": {
        word: "urbs, urbis",
        definition: "f., city (urban, urbane, suburb, suburban)"
    },
    "vīs": {
        word: "vīs, vīs",
        definition: "f., force, power, violence (vim, violate, violent)"
    },
    "vīrēs": {
        word: "vīrēs, vīrium",
        definition: "f. pl., strength"
    },
    "ā": {
        word: "ā, ab",
        definition: "prep. + abl., away from, from; by"
    },
    "trāns": {
        word: "trāns",
        definition: "prep. + acc., across (transport, transmit, transfer)"
    },
    "appellō": {
        word: "appellō, appellāre, appellāvī, appellātum",
        definition: "to speak to, address, call, name (appellation, appellative, appeal, appellant)"
    },
    "currō": {
        word: "currō, currere, cucurrī, cursum",
        definition: "to run, rush, move quickly (current, cursive, cursory, course, coarse, discursive, incur, occur, recur)"
    },
    "mūtō": {
        word: "mūtō, mūtāre, mūtāvī, mūtātum",
        definition: "to change, alter; exchange (mutable, immutable, mutual, commute, permutation, transmutation, molt)"
    },
    "teneō": {
        word: "teneō, tenēre, tenuī, tentum",
        definition: "to hold, keep, possess; restrain (tenable, tenacious, tenant, tenet, tentacle, continue, pertinent, lieutenant, sustain)"
    },
    "vītō": {
        word: "vītō, vītāre, vītārī, vītātum",
        definition: "to avoid, shun (inevitable)"
    },
}

wordsCh15 = {
    "Italia": {
        word: "Italia, Italiae",
        definition: "f., Italy (italics, italicize)"
    },
    "memoria": {
        word: "memoria, memoriae",
        definition: "f., memory, recollection (memoir, memorial, memorize, memorandum, commemorate)"
    },
    "tempestās": {
        word: "tempestās, tempestātis",
        definition: "f. period of time, season; weather, storm"
    },
    "miser": {
        word: "miser, misera, miserum",
        definition: "wretched, miserable, unfortunate (misery, commiserate)"
    },
    "inter": {
        word: "inter",
        definition: "prep. + acc., between, among (intern, internal, interact)"
    },
    "itaque": {
        word: "itaque",
        definition: "adv., and so, therefore"
    },
    "committō": {
        word: "committō, committere, commīsī, commissum",
        definition: "to entrust, commit (committee, commission, commissary, commitment)"
    },
    "exspectō": {
        word: "exspectō, exspectāre, exspectāvī, exspectātum",
        definition: "to look for, expect, await (expectant, expectation)"
    },
    "iaciō": {
        word: "iaciō, iacere, iēcī, iactum",
        definition: "to throw, hurl (abject, adjective, conjecture, dejected, eject, inject, reject, subject, trajectory)"
    },
    "timeō": {
        word: "timeō, timēre, timuī",
        definition: "to fear, be afraid (timid, timoris, intimidate)"
    },
}

wordsCh16 = {
    "aetās": {
        word: "aetās, aetātis",
        definition: "f., period of life, life, age, an age, time (eternal, eternity, sempiternal)"
    },
    "audītor": {
        word: "audītor, audītōris",
        definition: "m., hearer, listener, member of an audience (auditor, auditory, auditorium)"
    },
    "clēmentia": {
        word: "clēmentia, clēmentiae",
        definition: "f., mildness, gentleness, mercy (clement, clemency, inclement, Clementine)"
    },
    "mēns": {
        word: "mēns, mentis",
        definition: "f., mind, thought, intention (mental, mentality, mention, demented)"
    },
    "satura": {
        word: "satura, saturae",
        definition: "f., satire (satirist, satirical, satirize)"
    },
    "ācer": {
        word: "ācer, ācris, ācre",
        definition: "sharp, keen, eager; severe, fiece (acrid, acrimony, acrimonious, eager, vinegar)"
    },
    "brevis": {
        word: "brevis, breve",
        definition: "short, small, brief (brevity, breviary, abbreviate, abridge)"
    },
    "celer": {
        word: "celer, celeris, celere",
        definition: "swift, quick, rapid (celerity, accelerate, acceleration, decelerate)"
    },
    "difficilis": {
        word: "difficilis, difficile",
        definition: "hard, difficult, troublesome (difficulty)"
    },
    "dulcis": {
        word: "dulcis, dulce",
        definition: "sweet; pleasant, agreeable (dulcify, dulcet, dulcimer)"
    },
    "facilis": {
        word: "facilis, facile",
        definition: "easy, agreeable (facile, facility, facilitate)"
    },
    "foris": {
        word: "foris, forte",
        definition: "strong, brave (fort, forte, fortify, fortitude, force, comfort)"
    },
    "ingēns": {
        word: "ingēns, gen. ingentis",
        definition: "huge"
    },
    "iūcundus": {
        word: "iūcundus, iūcunda, iūcundum",
        definition: "pleasant, delightful, agreeable, pleasing (jocund)"
    },
    "longus": {
        word: "longus, longa, longum",
        definition: "long (longitude, longevity, elongate, oblong, prolong)"
    },
    "omnis": {
        word: "omnis, omne",
        definition: "every, all (omnibus, omnipresent, omnipotent, omniscient, omnivorous)"
    },
    "potēns": {
        word: "potēns, gen. potentis",
        definition: "pres. partic. of possum as an adj., able, powerful, mighty, strong (potent, impotent, omnipotent, potential)"
    },
    "senex": {
        word: "senex, gen. senis",
        definition: "adj. and noun, old, aged; old man (senate, senator, senescent, senile, senior, seniority, sir, sire)"
    },
    "quam": {
        word: "quam",
        definition: "adv., how"
    },
    "regō": {
        word: "regō, regere, rēxī, rēctum",
        definition: "to rule, guide, direct (regent, regime, regiment, regular, regulate, correct, direction, rectitude)"
    },
}

wordsCh17 = {
    "libellus": {
        word: "libellus, libellī",
        definition: "m., little book (libel, libelous)"
    },
    "quī": {
        word: "quī, quae, quod",
        definition: "rel. pron., who, which, what, that (qui vive, quorum)"
    },
    "caecus": {
        word: "caecus, caeca, caecum",
        definition: "blind (caecum, caecal, caecilian)"
    },
    "levis": {
        word: "levis, leve",
        definition: "light; easy; slight, trivial (levity, lever, levy, levee, Levant, leaven, legerdemain), alleviate, elecate, relevant, relieve)"
    },
    "aut": {
        word: "aut",
        definition: "conj., or"
    },
    "aut... aut": {
        word: "aut... aut",
        definition: "either... or"
    },
    "cito": {
        word: "cito",
        definition: "adv., quickly (excite, incite, recite)"
    },
    "quoque": {
        word: "quoque",
        definition: "adv., also, too"
    },
    "admittō": {
        word: "admittō, admittere, admīsī, admissum",
        definition: "to admit, receive, let in (admission, admissible, admittedly)"
    },
    "coepī": {
        word: "coepī, coepisse, coeptum",
        definition: "began; defective verb used only in the perfect system"
    },
    "cupiō": {
        word: "cupiō, cupere, cupivī, cupītum",
        definition: "to desire, wish, long for (Cupid, cupidity, concupiscence, covet, covetous, Kewpie doll)"
    },
    "dēleo": {
        word: "dēleō, dēlēre, dēlēvī, dēlēctum",
        definition: "to destroy, wipe out, erase (delete, indelible)"
    },
    "dēsīderō": {
        word: "dēsīderō, dēsīderāre, dēsīderāvī, dēsīderātum",
        definition: "to desire, long for, miss (desiderate, desideratum, desiderative, desire, desirous)"
    },
    "incipiō": {
        word: "incipiō, incipere, incēpī, inceptum",
        definition: "to begin (incipient, inception)"
    },
    "nāvigō": {
        word: "nāvigō, nāvigāre, nāvigāvī, nāvigātum",
        definition: "to sail, navigate (navigation, navigable)"
    },
    "néglegō": {
        word: "néglegō, neglégere, neglēxī, neglēctum",
        definition: "to neglect, disregard (negligent, negligee, negligible)"
    },
    "recitō": {
        word: "recitō, recitāre, recitāvī, recitātum",
        definition: "to read aloud, recite (recital, recitation, recitative)"
    },
}

wordsCh18 = {
    "flūmen": {
        word: "flūmen, flūminis",
        definition: "n., river (flume, fluminous)"
    },
    "genus": {
        word: "genus, generis",
        definition: "n., origin; kind, type, sort, class (genus, generic, genitive, gender, general, generous, genuine, degenerate, genre, congenial)"
    },
    "hostis": {
        word: "hostis, hostis",
        definition: "m., an enemy (of the state); (hostile, hostility, host)"
    },
    "hostēs": {
        word: "hostēs, -ium",
        definition: "the enemy"
    },
    "lūdus": {
        word: "lūdus, lūdī",
        definition: "m., game, sport; school (ludicrous, delude, elude, elusive, allude, allusion, illusion, collusion, interlude, prelude, postlude)"
    },
    "probitās": {
        word: "probitās, probitātis",
        definition: "f., uprightness, honesty (probity, probation)"
    },
    "scientia": {
        word: "scientia, scientiae",
        definition: "f., knowledge (science, scientific, scientist)"
    },
    "clārus": {
        word: "clārus, clāra, clārum",
        definition: "clear, bright; renowned, famous, illustrious (clarify, clarity, claret, clarinet, clarion, declare, Clara, Clarissa, Claribel)"
    },
    "mortālis": {
        word: "mortālis, mortāle",
        definition: "mortal (mortality, immortal, immortality)"
    },
    "cūr": {
        word: "cūr",
        definition: "adv., why"
    },
    "deinde": {
        word: "deinde",
        definition: "adv., thereupon, next, then"
    },
    "fluō": {
        word: "fluō, fluere, flūxī, flūxum",
        definition: "to flow (fluid, fluent, flux, influx, affluence, influence, confluence, influenza, flu, mellifluous, superfluous)"
    },
    "legō": {
        word: "legō, legere, lēgī, lēctum",
        definition: "to pick out, choose; read (elect, elegant, eligible, lecture, legend, legible, intellect)"
    },
    "misceō": {
        word: "misceō, miscēre, miscuī, mixtum",
        definition: "to mix, stir up, disturb (miscellaneous, miscible, meddle, medley, melee, promiscuous)"
    },
    "moveō": {
        word: "moveō, movēre, mōvī, mōtum",
        definition: "to move; arouse, affect (mobile, motion, motive, motor, commotion, emotion, remote, locomotive, mutiny)"
    },
    "videor": {
        word: "videor, vidērī, vīsus sum",
        definition: "pass. of videō, to be seen, seem, appear"
    },
}

wordsCh19 = {
    "argūmentum": {
        word: "argūmentum, argūmentī",
        definition: "n., proof, evidence, argument (argumentation, argumentative)"
    },
    "auctor": {
        word: "auctor, auctōris",
        definition: "m., increaser; author, originator (authority, authorize)"
    },
    "beneficium": {
        word: "beneficium, beneficiī",
        definition: "n., benefit, kindness; favor (beneficence, beneficial, beneficiary)"
    },
    "familia": {
        word: "familia, familiae",
        definition: "f., household, family (familial, familiar, familiarity)"
    },
    "Graecia": {
        word: "Graecia, Graeciae",
        definition: "f., Greece"
    },
    "iūdex": {
        word: "iūdex, iūdicis",
        definition: "m., judge, juror (judge, judgment)"
    },
    "iūdicium": {
        word: "iūdicium, iūdiciī",
        definition: "n., judgment, decision, opinion; trial (adjudge, adjudicate, judicial, judicious, injudicious, misjudge, prejudge, prejudice)"
    },
    "scelus": {
        word: "scelus, sceleris",
        definition: "n., evil deed, crime, sin, wickedness"
    },
    "quis": {
        word: "quis, quid",
        definition: "interrog. pron. who? whose? whom? what? which?"
    },
    "quī": {
        word: "quī, quae, quod",
        definition: "interrog. adj., what? which? what kind of?; sometimes with exclamatory force (quo jure)"
    },
    "certus": {
        word: "certus, certa, certum",
        definition: "definite, sure, certain, reliable (ascertain, certify, certificate)"
    },
    "gravis": {
        word: "gravis, grave",
        definition: "heavy, weighty; serious, important; severe, grievous (aggravate, grief, grievance, greive, grave, gravity)"
    },
    "immortālis": {
        word: "immortālis, immortāle",
        definition: "not subject to death, immortal"
    },
    "at": {
        word: "at",
        definition: "conj., but; but, mind you; but, you say; typically a stronger adversative than sed nisi"
    },
    "sed nisi": {
        word: "sed nisi",
        definition: "conj., if... not, unless; except (nisi prius)"
    },
    "contrā": {
        word: "contrā",
        definition: "prep. + acc., against (contradict, contrast, contravene, contrapuntal)"
    },
    "iam": {
        word: "iam",
        definition: "adv., now, already, soon"
    },
    "dēlectō": {
        word: "dēlectō, dēlectāre, dēlectāvī, dēlectātum",
        definition: "to delight, charm, please (delectable, delectation)"
    },
    "līberō": {
        word: "līberō, līberāre, līberāvī, līberātum",
        definition: "to free, liberate (liberate, liberation, liberal, deliver)"
    },
    "parō": {
        word: "parō, parāre, parāvī, parātum",
        definition: "to prepare, provide; get, obtain (apparatus, compare, parachute, parapet, parasol, pare, parry, repair, reparation, separate, several)"
    },
}

wordsCh20 = {
    "libellus": {
        word: "libellus, libellī",
        definition: "m., little book (libel, libelous)"
    },
}

let cardinalNumbers = {
    "ūnus": {
        word: "ūnus, ūna, ūnum",
        definition: "one"
    },
    "duo": {
        word: "duo, duae, duo",
        definition: "two"
    },
    "trēs": {
        word: "trēs, tria",
        definition: "three"
    },
    "quattuor": {
        word: "quattuor",
        definition: "four"
    },
    "quīnque": {
        word: "quīnque",
        definition: "five"
    },
    "sex": {
        word: "sex",
        definition: "six"
    },
    "septem": {
        word: "septem",
        definition: "seven"
    },
    "octō": {
        word: "octō",
        definition: "eight"
    },
    "novem": {
        word: "novem",
        definition: "nine"
    },
    "decem": {
        word: "decem",
        definition: "ten"
    },
    "ūndecim": {
        word: "ūndecim",
        definition: "eleven"
    },
    "duodecim": {
        word: "duodecim",
        definition: "twelve"
    },
    "tredecim": {
        word: "tredecim",
        definition: "thirteen"
    },
    "quattuordecim": {
        word: "quattuordecim",
        definition: "fourteen"
    },
    "quīndecim": {
        word: "quīndecim",
        definition: "fifteen"
    },
    "sēdecim": {
        word: "sēdecim",
        definition: "sixteen"
    },
    "septendecim": {
        word: "septendecim",
        definition: "seventeen"
    },
    "duodēvigintī": {
        word: "duodēvigintī",
        definition: "eighteen"
    },
    "ūndēvīgintī": {
        word: "ūndēvīgintī",
        definition: "nineteen"
    },
    "vīgintī": {
        word: "vīgintī",
        definition: "twenty"
    },
    "vīgintī ūnus": {
        word: "vīgintī ūnus, ūnus et vīgintī",
        definition: "twenty-one"
    },
    "trīgintā": {
        word: "trīgintā",
        definition: "thirty"
    },
    "quadrāgintā": {
        word: "quadrāgintā",
        definition: "forty"
    },
    "quīnquāgintā": {
        word: "quīnquāgintā",
        definition: "fifty"
    },
    "sexāgintā": {
        word: "sexāgintā",
        definition: "sixty"
    },
    "septuāgintā": {
        word: "septuāgintā",
        definition: "seventy"
    },
    "octōgintā": {
        word: "octōgintā",
        definition: "eighty"
    },
    "nōnāgintā": {
        word: "nōnāgintā",
        definition: "ninety"
    },
    "centum": {
        word: "centum",
        definition: "one hundred"
    },
    "centum ūnus": {
        word: "centum ūnus",
        definition: "one hundred one"
    },
    "ducentī": {
        word: "ducentī",
        definition: "two hundred"
    },
    "trecentī": {
        word: "trecentī",
        definition: "three hundred"
    },
    "quadringentī": {
        word: "quadringentī",
        definition: "four hundred"
    },
    "quīngentī": {
        word: "quīngentī",
        definition: "five hundred"
    },
    "sescentī": {
        word: "sescentī",
        definition: "six hundred"
    },
    "septingentī": {
        word: "septingentī",
        definition: "seven hundred"
    },
    "octingentī": {
        word: "octingentī",
        definition: "eight hundred"
    },
    "nōngentī": {
        word: "nōngentī",
        definition: "nine hundred"
    },
    "mīlle": {
        word: "mīlle",
        definition: "one thousand"
    },
    "duo mīlia": {
        word: "duo mīlia",
        definition: "two thousand"
    },
}

let ordinalNumbers = {
    "prīmus": {
        word: "prīmus, prīma, prīmum",
        definition: "first"
    },
    "secundus": {
        word: "secundus, alter",
        definition: "second"
    },
    "terius": {
        word: "terius",
        definition: "third"
    },
    "quārtus": {
        word: "quārtus",
        definition: "fourth"
    },
    "quīntus": {
        word: "quīntus",
        definition: "fifth"
    },
    "sextus": {
        word: "sextus",
        definition: "sixth"
    },
    "septimus": {
        word: "septimus",
        definition: "seventh"
    },
    "octāvus": {
        word: "octāvus",
        definition: "eighth"
    },
    "nōnus": {
        word: "nōnus",
        definition: "nineth"
    },
    "decimus": {
        word: "decimus",
        definition: "tenth"
    },
    "ūndecimus": {
        word: "ūndecimus",
        definition: "eleventh"
    },
    "duodecimus": {
        word: "duodecimus",
        definition: "twelfth"
    },
    "tretius decimus": {
        word: "tretius decimus",
        definition: "thirteenth"
    },
    "quārtus decimus": {
        word: "quārtus decimus",
        definition: "fourteenth"
    },
    "quīntus decimus": {
        word: "quīntus decimus",
        definition: "fifteen"
    },
    "sextus decimus": {
        word: "sextus decimus",
        definition: "sixteenth"
    },
    "septimus decimus": {
        word: "septimus decimus",
        definition: "seventeenth"
    },
    "duodēvīcēsimus": {
        word: "duodēvīcēsimus",
        definition: "eighteenth"
    },
    "ūndēvīcēsimus": {
        word: "ūndēvīcēsimus",
        definition: "nineteenth"
    },
    "vīcēsimus": {
        word: "vīcēsimus",
        definition: "twentieth"
    },
    "vīcēsimus prīmus": {
        word: "vīcēsimus prīmus",
        definition: "twenty-first"
    },
    "trīcēsimus": {
        word: "trīcēsimus",
        definition: "thirtieth"
    },
    "quadrāgēsimus": {
        word: "quadrāgēsimus",
        definition: "fortieth"
    },
    "quīnquāgēsimus": {
        word: "quīnquāgēsimus",
        definition: "fiftieth"
    },
    "sexāgēsimus": {
        word: "sexāgēsimus",
        definition: "sixtieth"
    },
    "septuāgēsimus": {
        word: "septuāgēsimus",
        definition: "seventieth"
    },
    "octōgēsimus": {
        word: "octōgēsimus",
        definition: "eightieth"
    },
    "nōnāgēsimus": {
        word: "nōnāgēsimus",
        definition: "ninetieth"
    },
    "centēsimus": {
        word: "centēsimus",
        definition: "one hundredth"
    },
    "centēsimus prīmus": {
        word: "centēsimus prīmus",
        definition: "one hundred first"
    },
    "duocentēsimus": {
        word: "duocentēsimus",
        definition: "two hundredth"
    },
    "trecentēsimus": {
        word: "trecentēsimus",
        definition: "three hundredth"
    },
    "quadringentēsimus": {
        word: "quadringentēsimus",
        definition: "four hundredth"
    },
    "quīngentēsimus": {
        word: "quīngentēsimus",
        definition: "five hundredth"
    },
    "sescentēsimus": {
        word: "sescentēsimus",
        definition: "six hundredth"
    },
    "septingentēsimus": {
        word: "septingentēsimus",
        definition: "seven hundredth"
    },
    "octingentēsimus": {
        word: "octingentēsimus",
        definition: "eight hundredth"
    },
    "nōngentēsimus": {
        word: "nōngentēsimus",
        definition: "nine hundredth"
    },
    "mīllēsimus": {
        word: "mīllēsimus",
        definition: "one thousandth"
    },
    "bis mīllēsimus": {
        word: "bis mīllēsimus",
        definition: "two thousandth"
    },
}

let vocabUnit1 = [wordsCh1, wordsCh2, wordsCh3, wordsCh4]
let vocabUnit2 = [wordsCh5, wordsCh6, wordsCh7, wordsCh8, wordsCh9, wordsCh10, wordsCh11, wordsCh12]
let vocabUnit3 = [wordsCh13, wordsCh14, wordsCh15, wordsCh16, wordsCh17, wordsCh18, wordsCh19, wordsCh20]
let vocabLists = [wordsCh1, wordsCh2, wordsCh3, wordsCh4, wordsCh5, wordsCh6, wordsCh7, wordsCh8, wordsCh9, wordsCh10, wordsCh11, wordsCh12, wordsCh13, wordsCh14, wordsCh15, wordsCh16, wordsCh17, wordsCh18, wordsCh19, wordsCh20]

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

function makeVocabButton(vocabList, label) {
    let newButton = document.createElement('button')
    newButton.classList.add('vocab-button')
    newButton.classList.add('visible')    
    newButton.textContent = label
    vocabSelectionWrapper.appendChild(newButton)
    newButton.addEventListener('click', () => initialize(vocabList))
}

showAnswerButton.classList.add('invisible')
vocabWord.textContent = "Select a Vocab List"
vocabLists.forEach((list, i) => {
    makeVocabButton(list, `Chapter ${i+1} Vocab`);
})
let vocabUnit1List = Object.assign({}, ...vocabUnit1)
let vocabUnit2List = Object.assign({}, ...vocabUnit2)
let vocabUnit3List = Object.assign({}, ...vocabUnit3)


let vocabList = Object.assign({}, ...vocabLists)

makeVocabButton(vocabUnit1List, 'Unit 1 Vocab')
makeVocabButton(vocabUnit2List, 'Unit 2 Vocab')
makeVocabButton(vocabUnit3List, 'Unit 3 Vocab')
makeVocabButton(cardinalNumbers, 'Cardinal Numbers')
makeVocabButton(ordinalNumbers, 'Ordinal Numbers')

makeVocabButton(vocabList, 'All Vocab')
