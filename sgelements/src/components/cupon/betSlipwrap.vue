<template lang="html">
    <div class="">
        <div v-for='item in data[0].categories[0].competitions[0].games[0].markets' :key='item.id' class="">
            <div @click='greateBetList(item,elem)' v-for="elem in item.outcomes" :key='elem.id' class="oneBlock">
                {{elem}}
            </div>

        </div>
        <div v-if='(betSlipList!={})' class="">
            <div class="">
                <cupon :options='betSlipList'></cupon>
            </div>
        </div>

    </div>
</template>

<script>

import cupon from './cupon.vue';

export default {
    components:{
        cupon
    },
    data() {
        return{
             betslip:{
                49067900:{
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                },
                49067902:{
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн1"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома1"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                },
                49061904:{
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация2",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн2"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома2"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                }
            },
            betSlipList:{},
            "data": [{
                "id": 10121,
                "title": "Футбол",
                "weight": 200,
                "view": "football",
                "alias": "football",
                "categories": [{
                    "id": 969946,
                    "title": "Европа",
                    "alias": "Europe",
                    "weight": 90,
                    "competitions": [{
                        "id": 16308,
                        "title": "Лига Чемпионов УЕФА. Квалификация",
                        "weight": 90,
                        "games": [{
                            "id": 311321,
                            "code": "51321",
                            "current_time": null,
                            "top": 1,
                            "period": null,
                            "start_time": 1561467600,
                            "status": "prematch",
                            "teams": [{
                                "id": 362872,
                                "type": "home",
                                "title": "Трe Пенн"
                            }, {
                                "id": 336567,
                                "type": "away",
                                "title": "ФК Санта Колома"
                            }],
                            "markets": [{
                                "id": 20659423,
                                "period": "FT",
                                "type": "MatchResult",
                                "outcomes": [{
                                    "id": 49007909,
                                    "coeff": 7.1,
                                    "value": null,
                                    "type": "W1"
                                }, {
                                    "id": 49007910,
                                    "coeff": 4.8,
                                    "value": null,
                                    "type": "X"
                                }, {
                                    "id": 49007911,
                                    "coeff": 1.46,
                                    "value": null,
                                    "type": "W2"
                                }]
                            }, {
                                "id": 20659424,
                                "period": "FT",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49007912,
                                    "coeff": 2.09,
                                    "value": "2.5",
                                    "type": "Under"
                                }, {
                                    "id": 49007913,
                                    "coeff": 1.77,
                                    "value": "2.5",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20663011,
                                "period": "FT",
                                "type": "DoubleChance",
                                "outcomes": [{
                                    "id": 49018881,
                                    "coeff": 2.7,
                                    "value": null,
                                    "type": "1X"
                                }, {
                                    "id": 49018882,
                                    "coeff": 1.19,
                                    "value": null,
                                    "type": "12"
                                }, {
                                    "id": 49018883,
                                    "coeff": 1.13,
                                    "value": null,
                                    "type": "X2"
                                }]
                            }, {
                                "id": 20663012,
                                "period": "FT",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49018884,
                                    "coeff": 1.69,
                                    "value": "1.5",
                                    "type": "Home"
                                }, {
                                    "id": 49018885,
                                    "coeff": 2.25,
                                    "value": "-1.5",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20663017,
                                "period": "FT",
                                "type": "HomeOverUnder",
                                "outcomes": [{
                                    "id": 49018896,
                                    "coeff": 1.79,
                                    "value": "0.5",
                                    "type": "Over"
                                }, {
                                    "id": 49018897,
                                    "coeff": 2.05,
                                    "value": "0.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663018,
                                "period": "FT",
                                "type": "BothTeamsToScore",
                                "outcomes": [{
                                    "id": 49018898,
                                    "coeff": 2.05,
                                    "value": null,
                                    "type": "Yes"
                                }, {
                                    "id": 49018899,
                                    "coeff": 1.82,
                                    "value": null,
                                    "type": "No"
                                }]
                            }, {
                                "id": 20663020,
                                "period": "FT",
                                "type": "CorrectScore",
                                "outcomes": [{
                                    "id": 49018909,
                                    "coeff": 15,
                                    "value": "1-0",
                                    "type": "Score"
                                }, {
                                    "id": 49018910,
                                    "coeff": 33,
                                    "value": "2-0",
                                    "type": "Score"
                                }, {
                                    "id": 49018911,
                                    "coeff": 18,
                                    "value": "2-1",
                                    "type": "Score"
                                }, {
                                    "id": 49018913,
                                    "coeff": 57,
                                    "value": "3-1",
                                    "type": "Score"
                                }, {
                                    "id": 49018914,
                                    "coeff": 56,
                                    "value": "3-2",
                                    "type": "Score"
                                }, {
                                    "id": 49018919,
                                    "coeff": 11,
                                    "value": "0-0",
                                    "type": "Score"
                                }, {
                                    "id": 49018920,
                                    "coeff": 8.1,
                                    "value": "1-1",
                                    "type": "Score"
                                }, {
                                    "id": 49018921,
                                    "coeff": 18,
                                    "value": "2-2",
                                    "type": "Score"
                                }, {
                                    "id": 49018922,
                                    "coeff": 77,
                                    "value": "3-3",
                                    "type": "Score"
                                }, {
                                    "id": 49018924,
                                    "coeff": 6.1,
                                    "value": "0-1",
                                    "type": "Score"
                                }, {
                                    "id": 49018925,
                                    "coeff": 6,
                                    "value": "0-2",
                                    "type": "Score"
                                }, {
                                    "id": 49018926,
                                    "coeff": 8.8,
                                    "value": "0-3",
                                    "type": "Score"
                                }, {
                                    "id": 49018927,
                                    "coeff": 16,
                                    "value": "0-4",
                                    "type": "Score"
                                }, {
                                    "id": 49018928,
                                    "coeff": 7.6,
                                    "value": "1-2",
                                    "type": "Score"
                                }, {
                                    "id": 49018929,
                                    "coeff": 10,
                                    "value": "1-3",
                                    "type": "Score"
                                }, {
                                    "id": 49018930,
                                    "coeff": 20,
                                    "value": "1-4",
                                    "type": "Score"
                                }, {
                                    "id": 49018931,
                                    "coeff": 25,
                                    "value": "2-3",
                                    "type": "Score"
                                }, {
                                    "id": 49018932,
                                    "coeff": 44,
                                    "value": "2-4",
                                    "type": "Score"
                                }]
                            }, {
                                "id": 20663021,
                                "period": "FT",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49018934,
                                    "coeff": 2.18,
                                    "value": "1.0",
                                    "type": "Home"
                                }, {
                                    "id": 49018935,
                                    "coeff": 1.72,
                                    "value": "-1.0",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20663022,
                                "period": "FT",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49018936,
                                    "coeff": 1.33,
                                    "value": "2.0",
                                    "type": "Home"
                                }, {
                                    "id": 49018937,
                                    "coeff": 3.3,
                                    "value": "-2.0",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20663023,
                                "period": "FT",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49018938,
                                    "coeff": 1.24,
                                    "value": "2.5",
                                    "type": "Home"
                                }, {
                                    "id": 49018939,
                                    "coeff": 4.1,
                                    "value": "-2.5",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20663024,
                                "period": "FT",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49018940,
                                    "coeff": 2.35,
                                    "value": "3.0",
                                    "type": "Over"
                                }, {
                                    "id": 49018941,
                                    "coeff": 1.62,
                                    "value": "3.0",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663025,
                                "period": "FT",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49018942,
                                    "coeff": 4.8,
                                    "value": "4.0",
                                    "type": "Over"
                                }, {
                                    "id": 49018943,
                                    "coeff": 1.19,
                                    "value": "4.0",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663027,
                                "period": "FT",
                                "type": "HomeOverUnder",
                                "outcomes": [{
                                    "id": 49018946,
                                    "coeff": 3.3,
                                    "value": "1.0",
                                    "type": "Over"
                                }, {
                                    "id": 49018947,
                                    "coeff": 1.33,
                                    "value": "1.0",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663028,
                                "period": "FT",
                                "type": "HomeOverUnder",
                                "outcomes": [{
                                    "id": 49018948,
                                    "coeff": 4.9,
                                    "value": "1.5",
                                    "type": "Over"
                                }, {
                                    "id": 49018949,
                                    "coeff": 1.18,
                                    "value": "1.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663029,
                                "period": "FT",
                                "type": "AwayOverUnder",
                                "outcomes": [{
                                    "id": 49018950,
                                    "coeff": 1.63,
                                    "value": "1.5",
                                    "type": "Over"
                                }, {
                                    "id": 49018951,
                                    "coeff": 2.3,
                                    "value": "1.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663030,
                                "period": "FT",
                                "type": "AwayOverUnder",
                                "outcomes": [{
                                    "id": 49018952,
                                    "coeff": 2.13,
                                    "value": "2.0",
                                    "type": "Over"
                                }, {
                                    "id": 49018953,
                                    "coeff": 1.74,
                                    "value": "2.0",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20663031,
                                "period": "FT",
                                "type": "AwayOverUnder",
                                "outcomes": [{
                                    "id": 49018954,
                                    "coeff": 2.8,
                                    "value": "2.5",
                                    "type": "Over"
                                }, {
                                    "id": 49018955,
                                    "coeff": 1.44,
                                    "value": "2.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20667187,
                                "period": "FT",
                                "type": "EvenOddTotal",
                                "outcomes": [{
                                    "id": 49031480,
                                    "coeff": 1.89,
                                    "value": null,
                                    "type": "Odd"
                                }, {
                                    "id": 49031481,
                                    "coeff": 1.89,
                                    "value": null,
                                    "type": "Even"
                                }]
                            }, {
                                "id": 20667188,
                                "period": "T1",
                                "type": "DoubleChance",
                                "outcomes": [{
                                    "id": 49031482,
                                    "coeff": 1.74,
                                    "value": null,
                                    "type": "1X"
                                }, {
                                    "id": 49031483,
                                    "coeff": 1.51,
                                    "value": null,
                                    "type": "12"
                                }, {
                                    "id": 49031484,
                                    "coeff": 1.1,
                                    "value": null,
                                    "type": "X2"
                                }]
                            }, {
                                "id": 20667189,
                                "period": "T1",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49031485,
                                    "coeff": 1.45,
                                    "value": "1.5",
                                    "type": "Under"
                                }, {
                                    "id": 49031486,
                                    "coeff": 2.55,
                                    "value": "1.5",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20667190,
                                "period": "T1",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49031487,
                                    "coeff": 1.27,
                                    "value": "1.0",
                                    "type": "Home"
                                }, {
                                    "id": 49031488,
                                    "coeff": 3.4,
                                    "value": "-1.0",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20673017,
                                "period": "T1",
                                "type": "MatchResult",
                                "outcomes": [{
                                    "id": 49049323,
                                    "coeff": 1.92,
                                    "value": null,
                                    "type": "W2"
                                }, {
                                    "id": 49049324,
                                    "coeff": 2.3,
                                    "value": null,
                                    "type": "X"
                                }, {
                                    "id": 49049325,
                                    "coeff": 6.3,
                                    "value": null,
                                    "type": "W1"
                                }]
                            }, {
                                "id": 20676002,
                                "period": "FT",
                                "type": "DrawNoBet",
                                "outcomes": [{
                                    "id": 49058215,
                                    "coeff": 5.1,
                                    "value": null,
                                    "type": "W1"
                                }, {
                                    "id": 49058216,
                                    "coeff": 1.17,
                                    "value": null,
                                    "type": "W2"
                                }]
                            }, {
                                "id": 20676003,
                                "period": "FT",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49058217,
                                    "coeff": 1.26,
                                    "value": "1.5",
                                    "type": "Over"
                                }, {
                                    "id": 49058218,
                                    "coeff": 3.7,
                                    "value": "1.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20676176,
                                "period": "FT",
                                "type": "AwayOverUnder",
                                "outcomes": [{
                                    "id": 49058779,
                                    "coeff": 6.1,
                                    "value": "0.5",
                                    "type": "Under"
                                }, {
                                    "id": 49058780,
                                    "coeff": 1.14,
                                    "value": "0.5",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20676997,
                                "period": "FT",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49061298,
                                    "coeff": 1.4,
                                    "value": "2.0",
                                    "type": "Over"
                                }, {
                                    "id": 49061299,
                                    "coeff": 2.95,
                                    "value": "2.0",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20678350,
                                "period": "T1",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49065163,
                                    "coeff": 1.99,
                                    "value": "1.0",
                                    "type": "Under"
                                }, {
                                    "id": 49065164,
                                    "coeff": 1.72,
                                    "value": "1.0",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679362,
                                "period": "T1",
                                "type": "HomeOverUnder",
                                "outcomes": [{
                                    "id": 49067862,
                                    "coeff": 3,
                                    "value": "0.5",
                                    "type": "Over"
                                }, {
                                    "id": 49067863,
                                    "coeff": 1.33,
                                    "value": "0.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20679363,
                                "period": "T1",
                                "type": "AwayOverUnder",
                                "outcomes": [{
                                    "id": 49067864,
                                    "coeff": 1.59,
                                    "value": "0.5",
                                    "type": "Over"
                                }, {
                                    "id": 49067865,
                                    "coeff": 2.2,
                                    "value": "0.5",
                                    "type": "Under"
                                }]
                            }, {
                                "id": 20679365,
                                "period": "T1",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49067869,
                                    "coeff": 3.8,
                                    "value": "0.0",
                                    "type": "Home"
                                }, {
                                    "id": 49067870,
                                    "coeff": 1.23,
                                    "value": "0.0",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20679366,
                                "period": "T1",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49067871,
                                    "coeff": 1.16,
                                    "value": "1.5",
                                    "type": "Home"
                                }, {
                                    "id": 49067872,
                                    "coeff": 4.5,
                                    "value": "-1.5",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20679367,
                                "period": "T1",
                                "type": "EvenOddTotal",
                                "outcomes": [{
                                    "id": 49067873,
                                    "coeff": 2,
                                    "value": null,
                                    "type": "Odd"
                                }, {
                                    "id": 49067874,
                                    "coeff": 1.72,
                                    "value": null,
                                    "type": "Even"
                                }]
                            }, {
                                "id": 20679368,
                                "period": "T1",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49067875,
                                    "coeff": 2.95,
                                    "value": "0.5",
                                    "type": "Under"
                                }, {
                                    "id": 49067876,
                                    "coeff": 1.35,
                                    "value": "0.5",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679369,
                                "period": "T1",
                                "type": "AwayOverUnder",
                                "outcomes": [{
                                    "id": 49067877,
                                    "coeff": 1.45,
                                    "value": "1.0",
                                    "type": "Under"
                                }, {
                                    "id": 49067878,
                                    "coeff": 2.55,
                                    "value": "1.0",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679370,
                                "period": "T2",
                                "type": "MatchResult",
                                "outcomes": [{
                                    "id": 49067879,
                                    "coeff": 6,
                                    "value": null,
                                    "type": "W1"
                                }, {
                                    "id": 49067880,
                                    "coeff": 2.8,
                                    "value": null,
                                    "type": "X"
                                }, {
                                    "id": 49067881,
                                    "coeff": 1.75,
                                    "value": null,
                                    "type": "W2"
                                }]
                            }, {
                                "id": 20679371,
                                "period": "T2",
                                "type": "DoubleChance",
                                "outcomes": [{
                                    "id": 49067882,
                                    "coeff": 1.92,
                                    "value": null,
                                    "type": "1X"
                                }, {
                                    "id": 49067883,
                                    "coeff": 1.37,
                                    "value": null,
                                    "type": "12"
                                }, {
                                    "id": 49067884,
                                    "coeff": 1.11,
                                    "value": null,
                                    "type": "X2"
                                }]
                            }, {
                                "id": 20679372,
                                "period": "T2",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49067885,
                                    "coeff": 3.9,
                                    "value": "0.0",
                                    "type": "Home"
                                }, {
                                    "id": 49067886,
                                    "coeff": 1.21,
                                    "value": "0.0",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20679373,
                                "period": "T2",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49067887,
                                    "coeff": 1.42,
                                    "value": "1.0",
                                    "type": "Home"
                                }, {
                                    "id": 49067888,
                                    "coeff": 2.65,
                                    "value": "-1.0",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20679374,
                                "period": "T2",
                                "type": "Handicap",
                                "outcomes": [{
                                    "id": 49067889,
                                    "coeff": 1.25,
                                    "value": "1.5",
                                    "type": "Home"
                                }, {
                                    "id": 49067890,
                                    "coeff": 3.6,
                                    "value": "-1.5",
                                    "type": "Away"
                                }]
                            }, {
                                "id": 20679375,
                                "period": "T2",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49067891,
                                    "coeff": 4,
                                    "value": "0.5",
                                    "type": "Under"
                                }, {
                                    "id": 49067892,
                                    "coeff": 1.21,
                                    "value": "0.5",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679376,
                                "period": "T2",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49067893,
                                    "coeff": 2.85,
                                    "value": "1.0",
                                    "type": "Under"
                                }, {
                                    "id": 49067894,
                                    "coeff": 1.37,
                                    "value": "1.0",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679377,
                                "period": "T2",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49067895,
                                    "coeff": 1.76,
                                    "value": "1.5",
                                    "type": "Under"
                                }, {
                                    "id": 49067896,
                                    "coeff": 1.95,
                                    "value": "1.5",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679378,
                                "period": "T2",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49067897,
                                    "coeff": 1.33,
                                    "value": "2.0",
                                    "type": "Under"
                                }, {
                                    "id": 49067898,
                                    "coeff": 3,
                                    "value": "2.0",
                                    "type": "Over"
                                }]
                            }, {
                                "id": 20679379,
                                "period": "T2",
                                "type": "OverUnder",
                                "outcomes": [{
                                    "id": 49067899,
                                    "coeff": 1.21,
                                    "value": "2.5",
                                    "type": "Under"
                                }, {
                                    "id": 49067900,
                                    "coeff": 3.9,
                                    "value": "2.5",
                                    "type": "Over"
                                }]
                            }],
                            "score": []
                        }]
                    }]
                }]
            }]
        }
    },
    methods:{
        greateBetList(market,outcomes){
            let oneBetSlip ={
                view:this.data[0].view,
                sportTitle:this.data[0].title,
                league:this.data[0].categories[0].competitions[0].title,
                status:this.data[0].categories[0].competitions[0].games[0].status,
                teams:this.data[0].categories[0].competitions[0].games[0].teams,
                markets:{
                    "id": market.id,
                    "period": market.period,
                    "type": market.type
                },
                outcomes:outcomes
            }
            this.$set(this.betSlipList,outcomes.id,oneBetSlip)
            // this.betSlipList[outcomes.id] =  oneBetSlip;
        }
    }
}
</script>

<style lang="css">
.oneBlock{
    border:solid 1px #000;
}
</style>
