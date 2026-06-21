import type { Lesson } from "../../types";

export const unit1: Lesson[] = [
  {
    "id": "u1l1",
    "unit": 1,
    "level": 1,
    "title_gujarati": "નમસ્તે! (Greetings)",
    "intro_gujarati": "અંગ્રેજીમાં લોકોનું અભિવાદન કરતા શીખો.",
    "topics_covered": [
      "greetings",
      "hello",
      "good morning"
    ],
    "questions": [
      {
        "id": "u1l1q1",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Hello",
            "gujarati": "નમસ્તે"
          },
          {
            "english": "Good",
            "gujarati": "શુભ/સારું"
          },
          {
            "english": "Morning",
            "gujarati": "સવાર"
          },
          {
            "english": "Night",
            "gujarati": "રાત"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Hello' એટલે 'નમસ્તે', 'Good' એટલે 'શુભ/સારું', 'Morning' એટલે 'સવાર', અને 'Night' એટલે 'રાત'."
      },
      {
        "id": "u1l1q2",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Hello",
        "options": [
          "નમસ્તે",
          "આવજો",
          "આભાર",
          "માફ કરજો"
        ],
        "correct_index": 0,
        "explanation_gujarati": "માર્ગદર્શન: 'Hello' નો સાચો અર્થ 'નમસ્તે' થાય છે. આપણે કોઈને મળીએ ત્યારે આ શબ્દ વપરાય છે. દા.ત. 'Hello, how are you?' (નમસ્તે, તમે કેમ છો?)"
      },
      {
        "id": "u1l1q3",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Good",
        "options": [
          "ખરાબ",
          "શુભ/સારું",
          "રાત",
          "માફી"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Good' નો અર્થ 'શુભ' અથવા 'સારું' થાય છે. દા.ત. 'Good boy' (સારો છોકરો)."
      },
      {
        "id": "u1l1q4",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Morning",
        "options": [
          "સાંજ",
          "બપોર",
          "સવાર",
          "રાત"
        ],
        "correct_index": 2,
        "explanation_gujarati": "માર્ગદર્શન: 'Morning' એટલે 'સવાર'. સવારના સમયે કોઈને મળીએ ત્યારે આપણે 'Good morning' (શુભ સવાર) કહીએ છીએ."
      },
      {
        "id": "u1l1q5",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "નમસ્તે",
        "correct_answer": "Hello",
        "acceptable_answers": [
          "Hello",
          "Hi"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'નમસ્તે' ને અંગ્રેજીમાં 'Hello' કહેવાય છે. લખતી વખતે H કેપિટલ (મોટો) રાખવો."
      },
      {
        "id": "u1l1q6",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "Hello",
        "correct_answer": "Hello",
        "acceptable_answers": [
          "Hello",
          "Hi"
        ],
        "phonetic_gujarati": "હેલો",
        "explanation_gujarati": "માર્ગદર્શન: અહીં તમારે 'Hello' (નમસ્તે) સાંભળીને સાચો સ્પેલિંગ લખવાનો છે: H-e-l-l-o."
      },
      {
        "id": "u1l1q7",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "Hello",
        "phonetic_gujarati": "હેલો",
        "explanation_gujarati": "માર્ગદર્શન: માઈક્રોફોન ચાલુ કરીને સ્પષ્ટ ઉચ્ચાર સાથે 'હેલો' બોલો."
      },
      {
        "id": "u1l1q8",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Night",
        "options": [
          "સવાર",
          "સાંજ",
          "રાત",
          "દિવસ"
        ],
        "correct_index": 2,
        "explanation_gujarati": "માર્ગદર્શન: 'Night' એટલે 'રાત'. સૂતી વખતે આપણે 'Good night' કહીએ છીએ."
      },
      {
        "id": "u1l1q9",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "શુભ સવાર",
        "correct_sentence": "Good morning",
        "shuffled_words": [
          "Good",
          "morning",
          "night",
          "hello"
        ],
        "explanation_gujarati": "માર્ગદર્શન: અંગ્રેજીમાં 'શુભ સવાર' કહેવા માટે પહેલા 'Good' અને પછી 'morning' વપરાય છે. સાચું વાક્ય: 'Good morning'."
      },
      {
        "id": "u1l1q10",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Good morning",
            "gujarati": "શુભ સવાર"
          },
          {
            "english": "Good night",
            "gujarati": "શુભ રાત્રિ"
          },
          {
            "english": "Hello",
            "gujarati": "નમસ્તે"
          },
          {
            "english": "Bye",
            "gujarati": "આવજો"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Good morning' (શુભ સવાર), 'Good night' (શુભ રાત્રિ), 'Hello' (નમસ્તે), અને 'Bye' (આવજો)."
      },
      {
        "id": "u1l1q11",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "___ morning",
        "correct_answer": "Good",
        "options": [
          "Good",
          "Bad",
          "Hello",
          "Bye"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Good' શબ્દ મૂકવાથી 'Good morning' (શુભ સવાર) બને છે."
      },
      {
        "id": "u1l1q12",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "Good ___",
        "correct_answer": "morning",
        "options": [
          "morning",
          "hello",
          "night",
          "bye"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'morning' શબ્દ મૂકવાથી 'Good morning' બને છે, જેનો અર્થ શુભ સવાર થાય છે."
      },
      {
        "id": "u1l1q13",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "શુભ સવાર",
        "correct_answer": "Good morning",
        "acceptable_answers": [
          "Good morning",
          "Morning"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'શુભ સવાર' ને અંગ્રેજીમાં 'Good morning' કહેવાય છે."
      },
      {
        "id": "u1l1q14",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "Good morning",
        "phonetic_gujarati": "ગુડ મોર્નિંગ",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'ગુડ મોર્નિંગ' બોલો."
      },
      {
        "id": "u1l1q15",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "શુભ રાત્રિ",
        "correct_sentence": "Good night",
        "shuffled_words": [
          "night",
          "Good",
          "morning",
          "hello"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'શુભ રાત્રિ' માટે પહેલા 'Good' અને પછી 'night' આવે છે. સાચું વાક્ય: 'Good night'."
      },
      {
        "id": "u1l1q16",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "શુભ રાત્રિ",
        "correct_answer": "Good night",
        "acceptable_answers": [
          "Good night",
          "Night"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'શુભ રાત્રિ' ને અંગ્રેજીમાં 'Good night' કહેવાય છે."
      },
      {
        "id": "u1l1q17",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "Good night",
        "correct_answer": "Good night",
        "acceptable_answers": [
          "Good night",
          "Goodnight"
        ],
        "phonetic_gujarati": "ગુડ નાઈટ",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને સ્પેલિંગ લખો: G-o-o-d n-i-g-h-t."
      },
      {
        "id": "u1l1q18",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "Good night",
        "phonetic_gujarati": "ગુડ નાઈટ",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'ગુડ નાઈટ' બોલો."
      },
      {
        "id": "u1l1q19",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Bye",
        "options": [
          "આવજો",
          "નમસ્તે",
          "હા",
          "ના"
        ],
        "correct_index": 0,
        "explanation_gujarati": "માર્ગદર્શન: 'Bye' નો અર્થ 'આવજો' થાય છે. જ્યારે આપણે કોઈની પાસેથી વિદાય લઈએ ત્યારે આ શબ્દ વપરાય છે."
      },
      {
        "id": "u1l1q20",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "નમસ્તે, શુભ સવાર.",
        "correct_answer": "Hello, good morning.",
        "acceptable_answers": [
          "Hello good morning",
          "Hi good morning"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'નમસ્તે' માટે 'Hello' અને 'શુભ સવાર' માટે 'good morning' વપરાય છે."
      }
    ]
  },
  {
    "id": "u1l2",
    "unit": 1,
    "level": 2,
    "title_gujarati": "તમે કેમ છો? (How are you?)",
    "intro_gujarati": "ખબર અંતર પૂછતા શીખો.",
    "topics_covered": [
      "how are you",
      "fine",
      "thank you"
    ],
    "questions": [
      {
        "id": "u1l2q1",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "How",
            "gujarati": "કેમ/કેવી રીતે"
          },
          {
            "english": "You",
            "gujarati": "તમે/તું"
          },
          {
            "english": "I",
            "gujarati": "હું"
          },
          {
            "english": "Fine",
            "gujarati": "મજામાં/સારું"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'How' એટલે 'કેમ', 'You' એટલે 'તમે', 'I' એટલે 'હું' અને 'Fine' એટલે 'મજામાં/સારું'."
      },
      {
        "id": "u1l2q2",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "You",
        "options": [
          "તમે",
          "હું",
          "આપણે",
          "તે"
        ],
        "correct_index": 0,
        "explanation_gujarati": "માર્ગદર્શન: 'You' એટલે 'તમે' અથવા 'તું'. દા.ત. 'You are good' (તમે સારા છો)."
      },
      {
        "id": "u1l2q3",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "I",
        "options": [
          "તમે",
          "હું",
          "તે",
          "કોણ"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'I' એટલે 'હું'. દા.ત. 'I am happy' (હું ખુશ છું)."
      },
      {
        "id": "u1l2q4",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Fine",
        "options": [
          "ખરાબ",
          "દુઃખી",
          "મજામાં",
          "ગુસ્સે"
        ],
        "correct_index": 2,
        "explanation_gujarati": "માર્ગદર્શન: 'Fine' એટલે 'મજામાં' અથવા 'સારું'. દા.ત. 'I am fine' (હું મજામાં છું)."
      },
      {
        "id": "u1l2q5",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "How",
        "options": [
          "શું",
          "કેમ",
          "ક્યાં",
          "ક્યારે"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'How' નો અર્થ 'કેમ' અથવા 'કેવી રીતે' થાય છે. કોઈના ખબર પૂછવા માટે વપરાય છે."
      },
      {
        "id": "u1l2q6",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Am",
            "gujarati": "છું"
          },
          {
            "english": "Are",
            "gujarati": "છો"
          },
          {
            "english": "Thank",
            "gujarati": "આભાર"
          },
          {
            "english": "How",
            "gujarati": "કેમ"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Am' (છું - I સાથે વપરાય), 'Are' (છો - You સાથે વપરાય), 'Thank' (આભાર), 'How' (કેમ)."
      },
      {
        "id": "u1l2q7",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "તમે કેમ છો?",
        "correct_sentence": "How are you",
        "shuffled_words": [
          "are",
          "you",
          "How",
          "am",
          "I"
        ],
        "explanation_gujarati": "માર્ગદર્શન: પ્રશ્ન પૂછતી વખતે 'How' પહેલા આવે છે. સાચું વાક્ય: 'How are you' (તમે કેમ છો)."
      },
      {
        "id": "u1l2q8",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "___ are you?",
        "correct_answer": "How",
        "options": [
          "How",
          "What",
          "Are",
          "You"
        ],
        "explanation_gujarati": "માર્ગદર્શન: વાક્યની શરૂઆતમાં પ્રશ્નસૂચક શબ્દ 'How' આવે છે."
      },
      {
        "id": "u1l2q9",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "તમે કેમ છો?",
        "correct_answer": "How are you?",
        "acceptable_answers": [
          "How are you",
          "How r u"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'તમે કેમ છો?' નું અંગ્રેજી 'How are you?' થાય છે."
      },
      {
        "id": "u1l2q10",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "How are you?",
        "correct_answer": "How are you?",
        "acceptable_answers": [
          "How are you"
        ],
        "phonetic_gujarati": "હાઉ આર યુ?",
        "explanation_gujarati": "માર્ગદર્શન: ધ્યાનથી સાંભળીને 'How are you?' લખો."
      },
      {
        "id": "u1l2q11",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "How are you?",
        "phonetic_gujarati": "હાઉ આર યુ?",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'હાઉ આર યુ?' બોલો."
      },
      {
        "id": "u1l2q12",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "હું મજામાં છું.",
        "correct_sentence": "I am fine",
        "shuffled_words": [
          "am",
          "fine",
          "I",
          "you",
          "are"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'હું' માટે 'I', 'છું' માટે 'am' અને 'મજામાં' માટે 'fine'. સાચું વાક્ય: 'I am fine'."
      },
      {
        "id": "u1l2q13",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "I ___ fine.",
        "correct_answer": "am",
        "options": [
          "am",
          "are",
          "is",
          "be"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'I' સાથે હંમેશા 'am' વપરાય છે. (I am = હું છું)."
      },
      {
        "id": "u1l2q14",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "હું મજામાં છું.",
        "correct_answer": "I am fine.",
        "acceptable_answers": [
          "I am fine",
          "I'm fine",
          "I am good"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'હું મજામાં છું' એટલે 'I am fine'."
      },
      {
        "id": "u1l2q15",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Thank you",
        "options": [
          "માફ કરજો",
          "તમારો આભાર",
          "નમસ્તે",
          "આવજો"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Thank you' નો અર્થ 'તમારો આભાર' થાય છે. કોઈ મદદ કરે ત્યારે આપણે આભાર માનીએ છીએ."
      },
      {
        "id": "u1l2q16",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "હું મજામાં છું, આભાર.",
        "correct_sentence": "I am fine, thank you",
        "shuffled_words": [
          "I",
          "am",
          "fine",
          "thank",
          "you",
          "are"
        ],
        "explanation_gujarati": "માર્ગદર્શન: સાચો ક્રમ: 'I am fine, thank you' (હું મજામાં છું, તમારો આભાર)."
      },
      {
        "id": "u1l2q17",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "આભાર.",
        "correct_answer": "Thank you.",
        "acceptable_answers": [
          "Thank you",
          "Thanks"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'આભાર' ને અંગ્રેજીમાં 'Thank you' કહેવાય છે."
      },
      {
        "id": "u1l2q18",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "I am fine, thank you.",
        "correct_answer": "I am fine, thank you.",
        "acceptable_answers": [
          "I am fine thank you",
          "I'm fine thank you"
        ],
        "phonetic_gujarati": "આઈ ઍમ ફાઈન, થેન્ક યુ.",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને સાચો સ્પેલિંગ લખો: 'I am fine, thank you.'"
      },
      {
        "id": "u1l2q19",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "I am fine.",
        "phonetic_gujarati": "આઈ ઍમ ફાઈન.",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'આઈ ઍમ ફાઈન' બોલો."
      },
      {
        "id": "u1l2q20",
        "type": "CONVERSATION_SIM",
        "instruction_gujarati": "જવાબ ટાઈપ કરો:",
        "scenario_gujarati": "તમારો મિત્ર તમને મળે છે.",
        "ai_role": "Friend",
        "user_role": "You",
        "ai_says": "Hello! How are you?",
        "expected_hint_gujarati": "હું મજામાં છું, આભાર (I am fine, thank you).",
        "acceptable_responses": [
          "I am fine, thank you.",
          "I am fine.",
          "I am good, thanks."
        ],
        "keywords": [
          "fine",
          "thank",
          "good",
          "thanks",
          "am",
          "I"
        ],
        "difficulty": 1,
        "explanation_gujarati": "ભાષાંતર: મિત્ર કહે છે - 'Hello! How are you?' (નમસ્તે! તમે કેમ છો?)\nમાર્ગદર્શન: તમારે કહેવું જોઈએ 'I am fine, thank you' (હું મજામાં છું, આભાર)."
      }
    ]
  },
  {
    "id": "u1l3",
    "unit": 1,
    "level": 3,
    "title_gujarati": "પોતાનો પરિચય (Introducing Yourself)",
    "intro_gujarati": "પોતાના વિશે વાત કરો (Listening & Typing).",
    "topics_covered": [
      "introductions",
      "my name is",
      "nice to meet you"
    ],
    "questions": [
      {
        "id": "u1l3q1",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Name",
            "gujarati": "નામ"
          },
          {
            "english": "My",
            "gujarati": "મારું"
          },
          {
            "english": "Meet",
            "gujarati": "મળવું"
          },
          {
            "english": "Nice",
            "gujarati": "આનંદ/સારું"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Name' એટલે 'નામ', 'My' એટલે 'મારું', 'Meet' એટલે 'મળવું' અને 'Nice' એટલે 'આનંદ'."
      },
      {
        "id": "u1l3q2",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "My",
        "options": [
          "તમારું",
          "મારું",
          "તેનું",
          "આપણું"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'My' નો અર્થ 'મારું' થાય છે. દા.ત. 'My book' (મારું પુસ્તક)."
      },
      {
        "id": "u1l3q3",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Name",
        "options": [
          "ગામ",
          "નામ",
          "કામ",
          "ઠામ"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Name' એટલે 'નામ'. દા.ત. 'My name' (મારું નામ)."
      },
      {
        "id": "u1l3q4",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "___ name",
        "correct_answer": "My",
        "options": [
          "My",
          "I",
          "Me",
          "You"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'મારું નામ' કહેવા માટે 'My name' વપરાય છે."
      },
      {
        "id": "u1l3q5",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "મારું નામ રાહુલ છે.",
        "correct_sentence": "My name is Rahul",
        "shuffled_words": [
          "name",
          "is",
          "My",
          "Rahul",
          "am"
        ],
        "explanation_gujarati": "માર્ગદર્શન: પહેલા 'My name' (મારું નામ), પછી 'is' (છે), અને પછી 'Rahul'. સાચું વાક્ય: 'My name is Rahul'."
      },
      {
        "id": "u1l3q6",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "મારું નામ રાહુલ છે.",
        "correct_answer": "My name is Rahul.",
        "acceptable_answers": [
          "My name is Rahul",
          "I am Rahul"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'મારું નામ' એટલે 'My name'. વાક્ય: 'My name is Rahul.'"
      },
      {
        "id": "u1l3q7",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "My name is Rahul.",
        "correct_answer": "My name is Rahul.",
        "acceptable_answers": [
          "My name is Rahul"
        ],
        "phonetic_gujarati": "માઈ નેમ ઇઝ રાહુલ.",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને 'My name is Rahul.' લખો."
      },
      {
        "id": "u1l3q8",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "My name is Rahul.",
        "phonetic_gujarati": "માઈ નેમ ઇઝ રાહુલ.",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'માઈ નેમ ઇઝ રાહુલ.' બોલો."
      },
      {
        "id": "u1l3q9",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Meet",
        "options": [
          "મળવું",
          "જવું",
          "આવવું",
          "ખાવું"
        ],
        "correct_index": 0,
        "explanation_gujarati": "માર્ગદર્શન: 'Meet' એટલે 'મળવું'."
      },
      {
        "id": "u1l3q10",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Nice",
        "options": [
          "ખરાબ",
          "આનંદ/સારું",
          "મોટું",
          "નાનું"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Nice' નો અર્થ 'સારું' અથવા 'આનંદ' થાય છે."
      },
      {
        "id": "u1l3q11",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "તમને મળીને આનંદ થયો.",
        "correct_sentence": "Nice to meet you",
        "shuffled_words": [
          "meet",
          "to",
          "Nice",
          "you",
          "I"
        ],
        "explanation_gujarati": "માર્ગદર્શન: અંગ્રેજીમાં 'તમને મળીને આનંદ થયો' ને 'Nice to meet you' કહેવાય છે."
      },
      {
        "id": "u1l3q12",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "Nice to ___ you.",
        "correct_answer": "meet",
        "options": [
          "meet",
          "see",
          "look",
          "go"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'મળવા' માટે 'meet' શબ્દ વપરાય છે."
      },
      {
        "id": "u1l3q13",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "તમને મળીને આનંદ થયો.",
        "correct_answer": "Nice to meet you.",
        "acceptable_answers": [
          "Nice to meet you",
          "Glad to meet you"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'તમને મળીને આનંદ થયો' નું અંગ્રેજી 'Nice to meet you' થાય છે."
      },
      {
        "id": "u1l3q14",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "Nice to meet you.",
        "correct_answer": "Nice to meet you.",
        "acceptable_answers": [
          "Nice to meet you"
        ],
        "phonetic_gujarati": "નાઈસ ટુ મીટ યુ.",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને 'Nice to meet you.' લખો."
      },
      {
        "id": "u1l3q15",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "Nice to meet you.",
        "phonetic_gujarati": "નાઈસ ટુ મીટ યુ.",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'નાઈસ ટુ મીટ યુ.' બોલો."
      },
      {
        "id": "u1l3q16",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "હું એક વિદ્યાર્થી છું.",
        "correct_sentence": "I am a student",
        "shuffled_words": [
          "student",
          "I",
          "a",
          "am",
          "is"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'હું' એટલે 'I', 'છું' એટલે 'am', 'એક વિદ્યાર્થી' એટલે 'a student'. સાચું વાક્ય: 'I am a student'."
      },
      {
        "id": "u1l3q17",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "હું એક વિદ્યાર્થી છું.",
        "correct_answer": "I am a student.",
        "acceptable_answers": [
          "I am a student",
          "I'm a student"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'હું એક વિદ્યાર્થી છું' નું અંગ્રેજી 'I am a student' થાય છે."
      },
      {
        "id": "u1l3q18",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "I am a student.",
        "correct_answer": "I am a student.",
        "acceptable_answers": [
          "I am a student"
        ],
        "phonetic_gujarati": "આઈ ઍમ અ સ્ટુડન્ટ.",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને 'I am a student.' લખો."
      },
      {
        "id": "u1l3q19",
        "type": "CONVERSATION_SIM",
        "instruction_gujarati": "જવાબ ટાઈપ કરો:",
        "scenario_gujarati": "કોઈ તમારું નામ પૂછે છે.",
        "ai_role": "Stranger",
        "user_role": "You",
        "ai_says": "Hello! What is your name?",
        "expected_hint_gujarati": "મારું નામ રાજ છે (My name is Raj).",
        "acceptable_responses": [
          "My name is Raj.",
          "I am Raj.",
          "My name is Raj"
        ],
        "keywords": [
          "name",
          "is",
          "Raj",
          "am"
        ],
        "difficulty": 1,
        "explanation_gujarati": "ભાષાંતર: અજાણી વ્યક્તિ કહે છે - 'Hello! What is your name?' (નમસ્તે! તમારું નામ શું છે?)\nમાર્ગદર્શન: તમારે તમારું નામ કહેવાનું છે: 'My name is Raj' (મારું નામ રાજ છે)."
      },
      {
        "id": "u1l3q20",
        "type": "CONVERSATION_SIM",
        "instruction_gujarati": "યોગ્ય જવાબ આપો:",
        "scenario_gujarati": "નવી વ્યક્તિને મળીને આનંદ થયો.",
        "ai_role": "New Friend",
        "user_role": "You",
        "ai_says": "Nice to meet you!",
        "expected_hint_gujarati": "તમને મળીને પણ આનંદ થયો (Nice to meet you too).",
        "acceptable_responses": [
          "Nice to meet you too.",
          "Nice to meet you.",
          "Glad to meet you too."
        ],
        "keywords": [
          "nice",
          "meet",
          "you",
          "too"
        ],
        "difficulty": 2,
        "explanation_gujarati": "ભાષાંતર: નવો મિત્ર કહે છે - 'Nice to meet you!' (તમને મળીને આનંદ થયો!)\nમાર્ગદર્શન: તમારે કહેવું જોઈએ 'Nice to meet you too' (મને પણ તમને મળીને આનંદ થયો)."
      }
    ]
  },
  {
    "id": "u1l4",
    "unit": 1,
    "level": 4,
    "title_gujarati": "રોજબરોજના સંવાદો (Daily Greetings)",
    "intro_gujarati": "વાસ્તવિક પરિસ્થિતિમાં બોલવાની પ્રેક્ટિસ.",
    "topics_covered": [
      "everyday greetings",
      "excuse me",
      "sorry"
    ],
    "questions": [
      {
        "id": "u1l4q1",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Excuse me",
            "gujarati": "માફ કરજો"
          },
          {
            "english": "Sorry",
            "gujarati": "માફી માંગુ છું"
          },
          {
            "english": "Problem",
            "gujarati": "સમસ્યા/વાંધો"
          },
          {
            "english": "No",
            "gujarati": "ના/નહીં"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Excuse me' એટલે 'માફ કરજો' (કોઈનું ધ્યાન દોરવા વપરાય). 'Sorry' એટલે 'માફી માંગુ છું' (ભૂલ થાય ત્યારે). 'Problem' એટલે 'સમસ્યા'."
      },
      {
        "id": "u1l4q2",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Sorry",
        "options": [
          "આભાર",
          "માફી માંગુ છું",
          "નમસ્તે",
          "હા"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Sorry' નો અર્થ 'માફી માંગુ છું' થાય છે. જ્યારે આપણાથી ભૂલ થાય ત્યારે આપણે 'Sorry' કહીએ છીએ."
      },
      {
        "id": "u1l4q3",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Excuse me",
        "options": [
          "આભાર",
          "આવજો",
          "માફ કરજો",
          "કેમ છો"
        ],
        "correct_index": 2,
        "explanation_gujarati": "માર્ગદર્શન: 'Excuse me' નો અર્થ 'માફ કરજો' થાય છે. રસ્તો માંગવા કે કોઈને બોલાવવા માટે વપરાય છે."
      },
      {
        "id": "u1l4q4",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "Excuse ___",
        "correct_answer": "me",
        "options": [
          "me",
          "I",
          "you",
          "my"
        ],
        "explanation_gujarati": "માર્ગદર્શન: સાચો શબ્દસમૂહ 'Excuse me' છે."
      },
      {
        "id": "u1l4q5",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "માફ કરજો, શું તમે મને મદદ કરી શકો છો?",
        "correct_sentence": "Excuse me, can you help me",
        "shuffled_words": [
          "you",
          "me,",
          "help",
          "can",
          "Excuse",
          "me"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'માફ કરજો' માટે 'Excuse me', પછી 'શું તમે મારી મદદ કરી શકો છો' માટે 'can you help me'."
      },
      {
        "id": "u1l4q6",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "માફ કરજો, શું તમે મને મદદ કરી શકો છો?",
        "correct_answer": "Excuse me, can you help me?",
        "acceptable_answers": [
          "Excuse me can you help me",
          "Excuse me could you help me"
        ],
        "explanation_gujarati": "માર્ગદર્શન: વાક્ય 'Excuse me, can you help me?' થશે."
      },
      {
        "id": "u1l4q7",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "Excuse me.",
        "phonetic_gujarati": "એક્સક્યુઝ મી.",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'એક્સક્યુઝ મી.' બોલો."
      },
      {
        "id": "u1l4q8",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "I am sorry.",
        "correct_answer": "I am sorry.",
        "acceptable_answers": [
          "I am sorry",
          "I'm sorry"
        ],
        "phonetic_gujarati": "આઈ ઍમ સૉરી.",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને 'I am sorry.' લખો."
      },
      {
        "id": "u1l4q9",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "No problem",
        "options": [
          "મોટી સમસ્યા",
          "કોઈ વાંધો નહીં",
          "હા, સમસ્યા છે",
          "આભાર"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'No problem' નો અર્થ 'કોઈ વાંધો નહીં' થાય છે. કોઈ માફી માંગે ત્યારે આ શબ્દ વપરાય છે."
      },
      {
        "id": "u1l4q10",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "કોઈ વાંધો નહીં.",
        "correct_sentence": "No problem",
        "shuffled_words": [
          "No",
          "problem",
          "Yes",
          "Sorry"
        ],
        "explanation_gujarati": "માર્ગદર્શન: સાચો ક્રમ: 'No problem' (કોઈ વાંધો નહીં)."
      },
      {
        "id": "u1l4q11",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "કોઈ વાંધો નહીં.",
        "correct_answer": "No problem.",
        "acceptable_answers": [
          "No problem",
          "It's okay",
          "No worries"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'કોઈ વાંધો નહીં' નું અંગ્રેજી 'No problem' થાય છે."
      },
      {
        "id": "u1l4q12",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "No problem.",
        "phonetic_gujarati": "નો પ્રોબ્લેમ.",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'નો પ્રોબ્લેમ.' બોલો."
      },
      {
        "id": "u1l4q13",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Evening",
            "gujarati": "સાંજ"
          },
          {
            "english": "Day",
            "gujarati": "દિવસ"
          },
          {
            "english": "Later",
            "gujarati": "પછી"
          },
          {
            "english": "See",
            "gujarati": "મળીએ/જોવું"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Evening' એટલે 'સાંજ', 'Day' એટલે 'દિવસ', 'Later' એટલે 'પછી', અને 'See' એટલે 'જોવું' અથવા 'મળીએ'."
      },
      {
        "id": "u1l4q14",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "શુભ સાંજ.",
        "correct_sentence": "Good evening",
        "shuffled_words": [
          "Good",
          "evening",
          "night",
          "morning"
        ],
        "explanation_gujarati": "માર્ગદર્શન: સાચો ક્રમ: 'Good evening' (શુભ સાંજ)."
      },
      {
        "id": "u1l4q15",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "Good ___",
        "correct_answer": "evening",
        "options": [
          "evening",
          "night",
          "hello",
          "bye"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'evening' મૂકવાથી 'Good evening' (શુભ સાંજ) બને છે."
      },
      {
        "id": "u1l4q16",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "શુભ સાંજ.",
        "correct_answer": "Good evening.",
        "acceptable_answers": [
          "Good evening",
          "Evening"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'શુભ સાંજ' નું અંગ્રેજી 'Good evening' થાય છે."
      },
      {
        "id": "u1l4q17",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "પછી મળીએ.",
        "correct_sentence": "See you later",
        "shuffled_words": [
          "you",
          "See",
          "later",
          "morning"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'પછી મળીએ' માટે અંગ્રેજીમાં 'See you later' કહેવાય છે."
      },
      {
        "id": "u1l4q18",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "પછી મળીએ.",
        "correct_answer": "See you later.",
        "acceptable_answers": [
          "See you later",
          "See you soon"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'પછી મળીએ' એટલે 'See you later'."
      },
      {
        "id": "u1l4q19",
        "type": "CONVERSATION_SIM",
        "instruction_gujarati": "યોગ્ય જવાબ આપો:",
        "scenario_gujarati": "તમારા મિત્રથી ભૂલ થઈ છે.",
        "ai_role": "Friend",
        "user_role": "You",
        "ai_says": "I am so sorry!",
        "expected_hint_gujarati": "કોઈ વાંધો નહીં (No problem).",
        "acceptable_responses": [
          "No problem.",
          "It is okay.",
          "No problem"
        ],
        "keywords": [
          "no",
          "problem",
          "okay"
        ],
        "difficulty": 1,
        "explanation_gujarati": "ભાષાંતર: મિત્ર કહે છે - 'I am so sorry!' (હું ખૂબ દિલગીર છું!)\nમાર્ગદર્શન: કોઈ માફી માંગે તો આપણે કહેવું જોઈએ 'No problem' (કોઈ વાંધો નહીં)."
      },
      {
        "id": "u1l4q20",
        "type": "CONVERSATION_SIM",
        "instruction_gujarati": "વિદાય લો:",
        "scenario_gujarati": "તમે તમારા મિત્રથી છૂટા પડો છો.",
        "ai_role": "Friend",
        "user_role": "You",
        "ai_says": "I have to go now. See you later!",
        "expected_hint_gujarati": "આવજો, પછી મળીએ (Bye, see you later).",
        "acceptable_responses": [
          "Bye, see you later.",
          "See you later.",
          "Bye."
        ],
        "keywords": [
          "bye",
          "see",
          "you",
          "later"
        ],
        "difficulty": 2,
        "explanation_gujarati": "ભાષાંતર: મિત્ર કહે છે - 'I have to go now. See you later!' (મારે હવે જવું પડશે. પછી મળીએ!)\nમાર્ગદર્શન: વિદાય લેતી વખતે આપણે 'Bye, see you later' કહી શકીએ."
      }
    ]
  },
  {
    "id": "u1l5",
    "unit": 1,
    "level": 5,
    "title_gujarati": "પહેલી મુલાકાત (First Meeting)",
    "intro_gujarati": "નવા લોકો સાથે વાતચીત (Advanced Output).",
    "topics_covered": [
      "where do you live",
      "occupations"
    ],
    "questions": [
      {
        "id": "u1l5q1",
        "type": "MATCH_PAIRS",
        "instruction_gujarati": "જોડકાં જોડો:",
        "pairs": [
          {
            "english": "Where",
            "gujarati": "ક્યાં"
          },
          {
            "english": "What",
            "gujarati": "શું"
          },
          {
            "english": "Work",
            "gujarati": "કામ"
          },
          {
            "english": "Live",
            "gujarati": "રહેવું"
          }
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'Where' એટલે 'ક્યાં', 'What' એટલે 'શું', 'Work' એટલે 'કામ' અને 'Live' એટલે 'રહેવું'."
      },
      {
        "id": "u1l5q2",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Where",
        "options": [
          "ક્યારે",
          "ક્યાં",
          "શું",
          "કેમ"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Where' નો અર્થ 'ક્યાં' થાય છે. સ્થળ પૂછવા માટે વપરાય છે. દા.ત. 'Where is he?' (તે ક્યાં છે?)."
      },
      {
        "id": "u1l5q3",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "What",
        "options": [
          "શું",
          "ક્યાં",
          "કોણ",
          "કેમ"
        ],
        "correct_index": 0,
        "explanation_gujarati": "માર્ગદર્શન: 'What' નો અર્થ 'શું' થાય છે. દા.ત. 'What is this?' (આ શું છે?)."
      },
      {
        "id": "u1l5q4",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Live",
        "options": [
          "જવું",
          "રહેવું",
          "ખાવું",
          "પીવું"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Live' નો અર્થ 'રહેવું' થાય છે. (ઉચ્ચાર: લિવ). દા.ત. 'I live here' (હું અહીં રહું છું)."
      },
      {
        "id": "u1l5q5",
        "type": "MCQ_ENG_TO_GUJ",
        "instruction_gujarati": "સાચો અર્થ પસંદ કરો:",
        "english_sentence": "Work",
        "options": [
          "આરામ",
          "કામ",
          "રમત",
          "ઊંઘ"
        ],
        "correct_index": 1,
        "explanation_gujarati": "માર્ગદર્શન: 'Work' એટલે 'કામ'."
      },
      {
        "id": "u1l5q6",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "તમે ક્યાં રહો છો?",
        "correct_sentence": "Where do you live",
        "shuffled_words": [
          "live",
          "do",
          "you",
          "Where",
          "what"
        ],
        "explanation_gujarati": "માર્ગદર્શન: પ્રશ્ન બનાવવા 'Where' પહેલા આવે છે, પછી સહાયક ક્રિયાપદ 'do'. સાચું વાક્ય: 'Where do you live' (તમે ક્યાં રહો છો?)."
      },
      {
        "id": "u1l5q7",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "___ do you live?",
        "correct_answer": "Where",
        "options": [
          "Where",
          "What",
          "How",
          "Why"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'ક્યાં' માટે 'Where' શબ્દ વપરાશે."
      },
      {
        "id": "u1l5q8",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "તમે ક્યાં રહો છો?",
        "correct_answer": "Where do you live?",
        "acceptable_answers": [
          "Where do you live"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'તમે ક્યાં રહો છો?' એટલે 'Where do you live?'."
      },
      {
        "id": "u1l5q9",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "Where do you live?",
        "correct_answer": "Where do you live?",
        "acceptable_answers": [
          "Where do you live"
        ],
        "phonetic_gujarati": "વ્હેર ડુ યુ લિવ?",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને 'Where do you live?' લખો."
      },
      {
        "id": "u1l5q10",
        "type": "SPEAK_AND_MATCH",
        "instruction_gujarati": "અંગ્રેજીમાં બોલો:",
        "target_sentence": "Where do you live?",
        "phonetic_gujarati": "વ્હેર ડુ યુ લિવ?",
        "explanation_gujarati": "માર્ગદર્શન: સ્પષ્ટ ઉચ્ચારમાં 'વ્હેર ડુ યુ લિવ?' બોલો."
      },
      {
        "id": "u1l5q11",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "હું ભારતમાં રહું છું.",
        "correct_sentence": "I live in India",
        "shuffled_words": [
          "live",
          "India",
          "in",
          "I",
          "am"
        ],
        "explanation_gujarati": "માર્ગદર્શન: અંગ્રેજીમાં પહેલા કર્તા 'I' આવે, પછી ક્રિયાપદ 'live', અને છેલ્લે 'in India'. સાચું વાક્ય: 'I live in India'."
      },
      {
        "id": "u1l5q12",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "હું ભારતમાં રહું છું.",
        "correct_answer": "I live in India.",
        "acceptable_answers": [
          "I live in India"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'હું ભારતમાં રહું છું' એટલે 'I live in India'."
      },
      {
        "id": "u1l5q13",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "તમે શું કરો છો? (કામ માટે)",
        "correct_sentence": "What do you do",
        "shuffled_words": [
          "do",
          "you",
          "What",
          "are",
          "where"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'તમે શું કરો છો?' માટે સાચું વાક્ય: 'What do you do'."
      },
      {
        "id": "u1l5q14",
        "type": "FILL_IN_THE_BLANK",
        "instruction_gujarati": "ખાલી જગ્યા પૂરો:",
        "sentence_with_blank": "___ do you do?",
        "correct_answer": "What",
        "options": [
          "What",
          "Where",
          "How",
          "Why"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'શું' માટે 'What' શબ્દ વપરાશે. 'What do you do?' એટલે 'તમે શું કરો છો?'."
      },
      {
        "id": "u1l5q15",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "તમે શું કામ કરો છો?",
        "correct_answer": "What do you do for work?",
        "acceptable_answers": [
          "What do you do?",
          "What is your job?",
          "What do you do for work"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'તમે શું કામ કરો છો?' માટે 'What do you do for work?' કહી શકાય."
      },
      {
        "id": "u1l5q16",
        "type": "LISTEN_AND_TYPE",
        "instruction_gujarati": "સાંભળો અને લખો:",
        "audio_text": "What do you do for work?",
        "correct_answer": "What do you do for work?",
        "acceptable_answers": [
          "What do you do for work",
          "What do you do"
        ],
        "phonetic_gujarati": "વૉટ ડુ યુ ડુ ફોર વર્ક?",
        "explanation_gujarati": "માર્ગદર્શન: સાંભળીને 'What do you do for work?' લખો."
      },
      {
        "id": "u1l5q17",
        "type": "WORD_ORDER",
        "instruction_gujarati": "વાક્યને યોગ્ય ક્રમમાં ગોઠવો:",
        "gujarati_meaning": "હું એક શાળામાં કામ કરું છું.",
        "correct_sentence": "I work in a school",
        "shuffled_words": [
          "work",
          "school",
          "in",
          "a",
          "I"
        ],
        "explanation_gujarati": "માર્ગદર્શન: કર્તા 'I', પછી ક્રિયાપદ 'work', પછી સ્થળ 'in a school'. સાચું વાક્ય: 'I work in a school'."
      },
      {
        "id": "u1l5q18",
        "type": "TRANSLATE_GUJ_TO_ENG",
        "instruction_gujarati": "અંગ્રેજીમાં ટાઈપ કરો:",
        "gujarati_sentence": "હું એક શાળામાં કામ કરું છું.",
        "correct_answer": "I work in a school.",
        "acceptable_answers": [
          "I work in a school",
          "I work at a school"
        ],
        "explanation_gujarati": "માર્ગદર્શન: 'હું એક શાળામાં કામ કરું છું' નું અંગ્રેજી 'I work in a school' થાય છે."
      },
      {
        "id": "u1l5q19",
        "type": "CONVERSATION_SIM",
        "instruction_gujarati": "જવાબ ટાઈપ કરો:",
        "scenario_gujarati": "નવી વ્યક્તિ તમારા વિશે પૂછે છે.",
        "ai_role": "Stranger",
        "user_role": "You",
        "ai_says": "Nice to meet you! Where do you live?",
        "expected_hint_gujarati": "હું ભારતમાં રહું છું (I live in India).",
        "acceptable_responses": [
          "I live in India.",
          "I live in India",
          "In India"
        ],
        "keywords": [
          "live",
          "India",
          "I"
        ],
        "difficulty": 2,
        "explanation_gujarati": "ભાષાંતર: અજાણી વ્યક્તિ પૂછે છે - 'Nice to meet you! Where do you live?' (તમને મળીને આનંદ થયો! તમે ક્યાં રહો છો?)\nમાર્ગદર્શન: તમારો જવાબ: 'I live in India' (હું ભારતમાં રહું છું)."
      },
      {
        "id": "u1l5q20",
        "type": "MULTI_TURN_CONVERSATION",
        "instruction_gujarati": "સંવાદ પૂરો કરો:",
        "explanation_gujarati": "ભાષાંતર: રાહુલ કહે છે 'Hello! My name is Rahul. What is your name?' અને 'Nice to meet you Amit. What do you do for work?'\nમાર્ગદર્શન: તમારે તમારું નામ અને તમે શું કરો છો (I am a student) એનો અંગ્રેજીમાં જવાબ આપવાનો છે.",
        "difficulty": 3,
        "scenario_gujarati": "તમે પાર્કમાં એક નવી વ્યક્તિને મળો છો.",
        "ai_role": "Rahul",
        "user_role": "You",
        "required_turns": 2,
        "turns": [
          {
            "speaker": "ai",
            "line": "Hello! My name is Rahul. What is your name?"
          },
          {
            "speaker": "user",
            "line": "My name is Amit.",
            "acceptable_keywords": [
              "name",
              "is",
              "Amit"
            ],
            "acceptable_responses": [
              "My name is Amit.",
              "I am Amit."
            ],
            "phonetic_gujarati": "માઈ નેમ ઇઝ અમિત."
          },
          {
            "speaker": "ai",
            "line": "Nice to meet you Amit. What do you do for work?"
          },
          {
            "speaker": "user",
            "line": "I am a student.",
            "acceptable_keywords": [
              "am",
              "student",
              "I",
              "a"
            ],
            "acceptable_responses": [
              "I am a student.",
              "I study."
            ],
            "phonetic_gujarati": "આઈ ઍમ અ સ્ટુડન્ટ."
          }
        ]
      }
    ]
  }
];
