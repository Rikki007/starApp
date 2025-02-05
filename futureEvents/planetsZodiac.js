const planetTransits = [
    {
      planet: "Sun",
      description: "Symbolizes vitality, ego, individuality, and creative energy. The transit lasts about 30 days in each sign.",
      effects: {
        Aries: "Boosts confidence and initiative, but may cause excessive impulsiveness and selfishness.",
        Taurus: "Brings stability and perseverance, but may increase stubbornness and greed.",
        Gemini: "Enhances sociability and curiosity, but may lead to superficiality and inconsistency.",
        Cancer: "Increases emotional sensitivity and care for loved ones, but may cause excessive sensitivity and withdrawal.",
        Leo: "Brings a creative boost and confidence, but may increase egocentrism and arrogance.",
        Virgo: "Activates analytical skills and diligence, but may lead to excessive perfectionism and criticism.",
        Libra: "Enhances diplomacy and a desire for harmony, but may cause indecisiveness and dependence on others' opinions.",
        Scorpio: "Brings depth and transformation, but may increase suspicion and manipulative tendencies.",
        Sagittarius: "Boosts optimism and a desire for freedom, but may lead to excessive bluntness and irresponsibility.",
        Capricorn: "Strengthens discipline and ambition, but may cause coldness and excessive seriousness.",
        Aquarius: "Encourages originality and a desire for change, but may increase rebelliousness and detachment.",
        Pisces: "Enhances intuition and compassion, but may lead to excessive dreaminess and a tendency toward illusions."
      }
    },
    {
      planet: "Moon",
      description: "Symbolizes emotions, intuition, the subconscious, and everyday matters. The transit lasts about 2.5 days in each sign.",
      effects: {
        Aries: "Emotions become impulsive, with possible outbursts of anger and impatience.",
        Taurus: "Emotions stabilize, but may lead to passivity and resistance to change.",
        Gemini: "Emotions become changeable, enhancing sociability but possibly leading to superficiality.",
        Cancer: "Emotions intensify, but may increase dependency on others.",
        Leo: "Emotions become bright and expressive, but may lead to excessive dramatization.",
        Virgo: "Emotions become more rational, but may increase excessive criticism and anxiety.",
        Libra: "Emotions focus on seeking harmony, but may lead to indecisiveness and dependence on a partner.",
        Scorpio: "Emotions become deep and intense, but may lead to jealousy and manipulative tendencies.",
        Sagittarius: "Emotions become optimistic, but may lead to excessive bluntness and irresponsibility.",
        Capricorn: "Emotions are restrained, increasing practicality but possibly leading to coldness.",
        Aquarius: "Emotions become unconventional, but may lead to detachment and rebelliousness.",
        Pisces: "Emotions intensify, enhancing intuition but possibly leading to excessive dreaminess."
      }
    },
    {
      planet: "Mercury",
      description: "Symbolizes communication, intellect, learning, and logic. The transit lasts about 3 weeks in each sign.",
      effects: {
        Aries: "Thoughts become quick and decisive, but may lead to hasty judgments.",
        Taurus: "Thoughts become more practical, but may lead to slow decision-making.",
        Gemini: "Enhances curiosity and sociability, but may lead to distractibility.",
        Cancer: "Thoughts become more intuitive, but may lead to excessive emotionality.",
        Leo: "Thoughts become creative and confident, but may lead to overconfidence.",
        Virgo: "Enhances analytical thinking, but may lead to excessive criticism.",
        Libra: "Thoughts focus on seeking balance, but may lead to indecisiveness.",
        Scorpio: "Thoughts become deep and insightful, but may lead to secrecy.",
        Sagittarius: "Thoughts become optimistic and philosophical, but may lead to superficiality.",
        Capricorn: "Thoughts become structured, but may lead to excessive rigidity.",
        Aquarius: "Thoughts become original, but may lead to impracticality.",
        Pisces: "Thoughts become intuitive, but may lead to excessive dreaminess."
      }
    },
    {
      planet: "Venus",
      description: "Symbolizes love, beauty, harmony, and material wealth. The transit lasts about 3-4 weeks in each sign.",
      effects: {
        Aries: "Increases passion and impulsiveness in relationships, but may lead to jealousy.",
        Taurus: "Increases sensuality and a desire for stability, but may lead to excessive attachment.",
        Gemini: "Increases lightness and sociability in relationships, but may lead to superficiality.",
        Cancer: "Increases emotional attachment, but may lead to excessive dependency.",
        Leo: "Increases romance, but may lead to excessive pride.",
        Virgo: "Increases practicality, but may lead to excessive criticism.",
        Libra: "Increases a desire for harmony, but may lead to indecisiveness.",
        Scorpio: "Increases passion, but may lead to jealousy.",
        Sagittarius: "Increases optimism, but may lead to irresponsibility.",
        Capricorn: "Increases seriousness, but may lead to coldness.",
        Aquarius: "Increases originality, but may lead to detachment.",
        Pisces: "Increases romance, but may lead to excessive idealization."
      }
    },
    {
      planet: "Mars",
      description: "Symbolizes energy, aggression, action, and struggle. The transit lasts about 6-7 weeks in each sign.",
      effects: {
        Aries: "Increases activity and decisiveness, but may lead to excessive aggression.",
        Taurus: "Increases persistence, but may lead to sluggishness.",
        Gemini: "Increases curiosity, but may lead to distractibility.",
        Cancer: "Increases emotional activity, but may lead to passivity.",
        Leo: "Increases creative energy, but may lead to overconfidence.",
        Virgo: "Increases diligence, but may lead to excessive criticism.",
        Libra: "Increases a desire for balance, but may lead to indecisiveness.",
        Scorpio: "Increases passion, but may lead to excessive aggression.",
        Sagittarius: "Increases optimism, but may lead to irresponsibility.",
        Capricorn: "Increases discipline, but may lead to excessive rigidity.",
        Aquarius: "Increases originality, but may lead to rebelliousness.",
        Pisces: "Increases intuition, but may lead to passivity."
      }
    },
    {
      planet: "Jupiter",
      description: "Symbolizes expansion, luck, wisdom, and growth. The transit lasts about 1 year in each sign.",
      effects: {
        Aries: "Increases confidence and a desire for leadership, but may lead to overconfidence.",
        Taurus: "Increases stability and material growth, but may lead to greed.",
        Gemini: "Increases curiosity, but may lead to superficiality.",
        Cancer: "Increases emotional support, but may lead to excessive dependency.",
        Leo: "Increases creative potential, but may lead to excessive pride.",
        Virgo: "Increases practicality, but may lead to excessive criticism.",
        Libra: "Increases a desire for harmony, but may lead to indecisiveness.",
        Scorpio: "Increases depth, but may lead to excessive suspicion.",
        Sagittarius: "Increases optimism, but may lead to excessive bluntness.",
        Capricorn: "Increases discipline, but may lead to excessive rigidity.",
        Aquarius: "Increases originality, but may lead to detachment.",
        Pisces: "Increases intuition, but may lead to excessive dreaminess."
      }
    },
    {
      planet: "Saturn",
      description: "Symbolizes limitations, discipline, responsibility, and karma. The transit lasts about 2.5 years in each sign.",
      effects: {
        Aries: "Increases discipline, but may lead to limitations in initiative.",
        Taurus: "Increases stability, but may lead to financial difficulties.",
        Gemini: "Increases responsibility in communication, but may lead to excessive criticism.",
        Cancer: "Increases emotional maturity, but may lead to family difficulties.",
        Leo: "Increases responsibility in creativity, but may lead to excessive seriousness.",
        Virgo: "Increases diligence, but may lead to excessive criticism.",
        Libra: "Increases responsibility in partnerships, but may lead to excessive dependency.",
        Scorpio: "Increases depth, but may lead to excessive suspicion.",
        Sagittarius: "Increases responsibility in philosophical matters, but may lead to excessive rigidity.",
        Capricorn: "Increases discipline, but may lead to coldness.",
        Aquarius: "Increases responsibility in social matters, but may lead to detachment.",
        Pisces: "Increases spiritual maturity, but may lead to illusions."
      }
    }
  ];