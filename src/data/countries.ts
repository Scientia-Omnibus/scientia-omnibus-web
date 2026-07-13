export interface CountryData {
  name: string;
  nameRu: string;
  cx: number;
  cy: number;
  penetration: string;
  fact: string;
}

export const AFFECTED_COUNTRIES: CountryData[] = [
  { name: "Nigeria", nameRu: "Нігерыя", cx: 503.5, cy: 466.2, penetration: "~70%", fact: "Nigeria has 200M+ people, only ~36% internet penetration" },
  { name: "Ethiopia", nameRu: "Эфіопія", cx: 594.2, cy: 457.3, penetration: "~18%", fact: "120M population, internet access <20%" },
  { name: "DR Congo", nameRu: "ДР Конга", cx: 551.7, cy: 489.6, penetration: "~14%", fact: "100M people, one of the lowest connectivity rates" },
  { name: "Kenya", nameRu: "Кенія", cx: 588.6, cy: 486.6, penetration: "~40%", fact: "53M people, significant urban-rural digital divide" },
  { name: "Tanzania", nameRu: "Танзанія", cx: 580.1, cy: 501.3, penetration: "~25%", fact: "65M population, limited educational software access" },
  { name: "South Africa", nameRu: "ПАР", cx: 551.7, cy: 575.6, penetration: "~55%", fact: "Most unequal internet access in the world" },
  { name: "Uganda", nameRu: "Уганда", cx: 571.5, cy: 480.8, penetration: "~20%", fact: "45M people, average school computer is 12+ years old" },
  { name: "Mozambique", nameRu: "Мазамбік", cx: 580.1, cy: 537.2, penetration: "~17%", fact: "32M population, cyclone-prone region needs offline tools" },
  { name: "India", nameRu: "Індыя", cx: 702.0, cy: 424.1, penetration: "~43%", fact: "1.4B people, 300M students; bloatware wastes scarce bandwidth" },
  { name: "Bangladesh", nameRu: "Бангладэш", cx: 736.0, cy: 411.5, penetration: "~32%", fact: "170M population, dense but low connectivity" },
  { name: "Pakistan", nameRu: "Пакістан", cx: 665.1, cy: 381.5, penetration: "~25%", fact: "240M people, unreliable electricity in rural schools" },
  { name: "Nepal", nameRu: "Непал", cx: 719.0, cy: 398.5, penetration: "~21%", fact: "30M population, mountainous terrain limits infrastructure" },
  { name: "Myanmar", nameRu: "М'янма", cx: 753.1, cy: 417.8, penetration: "~23%", fact: "54M people, internet heavily restricted and slow" },
  { name: "Thailand", nameRu: "Тайланд", cx: 767.2, cy: 439.4, penetration: "~48%", fact: "70M population, rural schools lack modern software" },
  { name: "Vietnam", nameRu: "В'етнам", cx: 787.1, cy: 442.4, penetration: "~50%", fact: "100M people, rapid digitalization but old hardware persists" },
  { name: "Indonesia", nameRu: "Інданезія", cx: 821.1, cy: 498.3, penetration: "~36%", fact: "280M people across 17000 islands, infrastructure challenge" },
  { name: "Philippines", nameRu: "Філіпіны", cx: 826.8, cy: 448.4, penetration: "~30%", fact: "115M population, one of the slowest avg internet speeds" },
  { name: "Brazil", nameRu: "Бразілія", cx: 327.6, cy: 528.0, penetration: "~55%", fact: "215M people, extreme regional inequality in access" },
  { name: "Colombia", nameRu: "Калумбія", cx: 276.6, cy: 472.0, penetration: "~40%", fact: "50M population, conflict-affected regions lack connectivity" },
  { name: "Peru", nameRu: "Перу", cx: 265.2, cy: 513.1, penetration: "~35%", fact: "33M people, Amazon basin communities are completely offline" },
  { name: "Bolivia", nameRu: "Балівія", cx: 293.6, cy: 534.1, penetration: "~28%", fact: "12M population, highest poverty rate in South America" },
];
