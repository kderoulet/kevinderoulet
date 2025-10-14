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
        word: "nēmō, nūllīus, nėminī, nēminem, nūllō or nūlla",
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

let vocabUnit1 = [wordsCh1, wordsCh2, wordsCh3, wordsCh4]
let vocabUnit2 = [wordsCh5, wordsCh6, wordsCh7, wordsCh8, wordsCh9, wordsCh10, wordsCh11]
let vocabLists = [wordsCh1, wordsCh2, wordsCh3, wordsCh4, wordsCh5, wordsCh6, wordsCh7, wordsCh8, wordsCh9, wordsCh10, wordsCh11]

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

let vocabList = Object.assign({}, ...vocabLists)

makeVocabButton(vocabUnit1List, 'Unit 1 Vocab')
makeVocabButton(vocabUnit2List, 'Unit 2 Vocab')

makeVocabButton(vocabList, 'All Vocab')
