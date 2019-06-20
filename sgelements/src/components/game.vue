<template>
    <div>
        <div class="game_wrap">
            <div v-for="elem in options.teams" :key = 'elem.id'>{{elem.title}}</div>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        options: Object
    },
    data(){
        return {
            game:[
                {
                    "id": 10126,
                    "title": "Теніс",
                    "weight": 150,
                    "view": "tennis",
                    "alias": "tennis",
                    "categories": [
                        {
                            "id": 970077,
                            "title": "ATP 250",
                            "alias": "ATP 250",
                            "weight": 85,
                            "competitions": [
                                {
                                    "id": 18755,
                                    "title": "Штутґарт, Німеччина",
                                    "weight": 50,
                                    "games": [
                                        {
                                            "id": 303119,
                                            "code": "7119",
                                            "current_time": null,
                                            "top": 0,
                                            "period": "S2G18",
                                            "start_time": 1560346200,
                                            "status": "live",
                                            "teams": [
                                                {
                                                    "id": 391731,
                                                    "type": "home",
                                                    "title": "Жо-Вiлфрiд Тсонга"
                                                },
                                                {
                                                    "id": 390025,
                                                    "type": "away",
                                                    "title": "Мілош Раоніч"
                                                }
                                            ],
                                            "markets": [
                                                {
                                                    "id": 20073921,
                                                    "period": "FT",
                                                    "type": "Winner",
                                                    "outcomes": [
                                                        {
                                                            "id": 47521343,
                                                            "coeff": 1.39,
                                                            "value": null,
                                                            "type": "Away"
                                                        },
                                                        {
                                                            "id": 47521344,
                                                            "coeff": 2.85,
                                                            "value": null,
                                                            "type": "Home"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20081723,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47541523,
                                                            "coeff": 8.5,
                                                            "value": "-1.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47541524,
                                                            "coeff": 1.05,
                                                            "value": "1.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20094119,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47569048,
                                                            "coeff": 2.75,
                                                            "value": "0.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47569049,
                                                            "coeff": 1.41,
                                                            "value": "-0.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20094120,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47569050,
                                                            "coeff": 4.3,
                                                            "value": "-0.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47569051,
                                                            "coeff": 1.18,
                                                            "value": "0.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20112973,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47620568,
                                                            "coeff": 1.78,
                                                            "value": "27.5",
                                                            "type": "Over"
                                                        },
                                                        {
                                                            "id": 47620569,
                                                            "coeff": 1.94,
                                                            "value": "27.5",
                                                            "type": "Under"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20112995,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47620648,
                                                            "coeff": 2.6,
                                                            "value": "1.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47620649,
                                                            "coeff": 1.47,
                                                            "value": "-1.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20112996,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47620650,
                                                            "coeff": 1.96,
                                                            "value": "28.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47620651,
                                                            "coeff": 1.8,
                                                            "value": "28.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20113158,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47621085,
                                                            "coeff": 1.75,
                                                            "value": "-2.5",
                                                            "type": "Away"
                                                        },
                                                        {
                                                            "id": 47621086,
                                                            "coeff": 2.02,
                                                            "value": "2.5",
                                                            "type": "Home"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20113365,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47621591,
                                                            "coeff": 1.12,
                                                            "value": "3.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47621592,
                                                            "coeff": 5.8,
                                                            "value": "-3.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20113439,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47621817,
                                                            "coeff": 1.84,
                                                            "value": "29.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47621818,
                                                            "coeff": 1.86,
                                                            "value": "29.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20114353,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47624187,
                                                            "coeff": 1.93,
                                                            "value": "30.5",
                                                            "type": "Over"
                                                        },
                                                        {
                                                            "id": 47624188,
                                                            "coeff": 1.84,
                                                            "value": "30.5",
                                                            "type": "Under"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20115499,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47627271,
                                                            "coeff": 2.55,
                                                            "value": "32.5",
                                                            "type": "Over"
                                                        },
                                                        {
                                                            "id": 47627272,
                                                            "coeff": 1.48,
                                                            "value": "32.5",
                                                            "type": "Under"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20115765,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47628019,
                                                            "coeff": 1.73,
                                                            "value": "31.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47628020,
                                                            "coeff": 2,
                                                            "value": "31.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "score": [
                                                {
                                                    "id": 17603008,
                                                    "period": "S1",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17603009,
                                                    "period": "S1",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17603010,
                                                    "period": "S1G1",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17603011,
                                                    "period": "S1G1",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604022,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604083,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604126,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17604196,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17604361,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604434,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17604498,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604557,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17604626,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604722,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604723,
                                                    "period": "S1G2",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17604724,
                                                    "period": "S1G2",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604819,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17604915,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17605003,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605088,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17605209,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17605339,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605404,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605508,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17605622,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605733,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605799,
                                                    "period": "S1G3",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17605800,
                                                    "period": "S1G3",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605834,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605906,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17605909,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17605977,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606030,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606055,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606056,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606058,
                                                    "period": "S1G4",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606059,
                                                    "period": "S1G4",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606445,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606514,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606661,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606725,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606729,
                                                    "period": "S1G4",
                                                    "value": -1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606732,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606790,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606840,
                                                    "period": "S1G5",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606841,
                                                    "period": "S1G5",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606842,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606843,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17606932,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17606981,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607014,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607069,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607122,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607164,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607204,
                                                    "period": "S1G5",
                                                    "value": -1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607216,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607229,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607285,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607287,
                                                    "period": "S1G6",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607288,
                                                    "period": "S1G6",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607305,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607583,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607715,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17607781,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607847,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17607955,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608016,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608137,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608230,
                                                    "period": "S1G7",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608231,
                                                    "period": "S1G7",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608232,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608247,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608300,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608373,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608376,
                                                    "period": "S1G7",
                                                    "value": -1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608377,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608441,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608486,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608517,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608519,
                                                    "period": "S1G8",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17608520,
                                                    "period": "S1G8",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17608522,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609023,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609161,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609241,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609325,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609472,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609556,
                                                    "period": "S1G9",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609557,
                                                    "period": "S1G9",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609560,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609561,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609700,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609758,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609853,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609895,
                                                    "period": "S1G10",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609896,
                                                    "period": "S1G10",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17609897,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609909,
                                                    "period": "S1G9",
                                                    "value": -1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609912,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17609913,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17610226,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17610325,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17610443,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17610503,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17610617,
                                                    "period": "S2",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17610618,
                                                    "period": "S2",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17610620,
                                                    "period": "S2G11",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17610621,
                                                    "period": "S2G11",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17610642,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17610643,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17611636,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17611714,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17611801,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17611848,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17611945,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612005,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612075,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612119,
                                                    "period": "S2G12",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612120,
                                                    "period": "S2G12",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612121,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612129,
                                                    "period": "S2G11",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612277,
                                                    "period": "S2G12",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612321,
                                                    "period": "S2G12",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612427,
                                                    "period": "S2G12",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612512,
                                                    "period": "S2G12",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612656,
                                                    "period": "S2G13",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612657,
                                                    "period": "S2G13",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612658,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612671,
                                                    "period": "S2G12",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612819,
                                                    "period": "S2G13",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17612893,
                                                    "period": "S2G13",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17612968,
                                                    "period": "S2G13",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613031,
                                                    "period": "S2G13",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613119,
                                                    "period": "S2G14",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613120,
                                                    "period": "S2G14",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613125,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613126,
                                                    "period": "S2G13",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613646,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613690,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613744,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613807,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613876,
                                                    "period": "S2G15",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17613877,
                                                    "period": "S2G15",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613879,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613904,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17613988,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17614063,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17614101,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17614214,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17614307,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17614388,
                                                    "period": "S2G16",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17614389,
                                                    "period": "S2G16",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17614391,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17614392,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17614789,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17614853,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17614991,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17615128,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17615129,
                                                    "period": "S2G17",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17615130,
                                                    "period": "S2G17",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17615144,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17615332,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17615392,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17615482,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17615538,
                                                    "period": "S2G18",
                                                    "value": 0,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17615539,
                                                    "period": "S2G18",
                                                    "value": 0,
                                                    "team_id": 390025
                                                },
                                                {
                                                    "id": 17615543,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 391731
                                                },
                                                {
                                                    "id": 17615544,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 391731
                                                }
                                            ],
                                            "outcome_sum": 83
                                        },
                                        {
                                            "id": 303120,
                                            "code": "7120",
                                            "current_time": null,
                                            "top": 0,
                                            "period": "S2G21",
                                            "start_time": 1560342600,
                                            "status": "live",
                                            "teams": [
                                                {
                                                    "id": 383718,
                                                    "type": "home",
                                                    "title": "Ніколоз Басилашвілі"
                                                },
                                                {
                                                    "id": 385690,
                                                    "type": "away",
                                                    "title": "Мартон Фучовіч"
                                                }
                                            ],
                                            "markets": [
                                                {
                                                    "id": 20073922,
                                                    "period": "FT",
                                                    "type": "Winner",
                                                    "outcomes": [
                                                        {
                                                            "id": 47521345,
                                                            "coeff": 1.54,
                                                            "value": null,
                                                            "type": "Away"
                                                        },
                                                        {
                                                            "id": 47521346,
                                                            "coeff": 2.35,
                                                            "value": null,
                                                            "type": "Home"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20076487,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47528436,
                                                            "coeff": 1.58,
                                                            "value": "-2.5",
                                                            "type": "Away"
                                                        },
                                                        {
                                                            "id": 47528437,
                                                            "coeff": 2.25,
                                                            "value": "2.5",
                                                            "type": "Home"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20094135,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47569086,
                                                            "coeff": 2.8,
                                                            "value": "1.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47569087,
                                                            "coeff": 1.38,
                                                            "value": "-1.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20094138,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47569092,
                                                            "coeff": 2.02,
                                                            "value": "3.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47569093,
                                                            "coeff": 1.74,
                                                            "value": "-3.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20103060,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47594269,
                                                            "coeff": 3.5,
                                                            "value": "0.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47594271,
                                                            "coeff": 1.28,
                                                            "value": "-0.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20112411,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47619160,
                                                            "coeff": 1.65,
                                                            "value": "4.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47619161,
                                                            "coeff": 2.14,
                                                            "value": "-4.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20112695,
                                                    "period": "FT",
                                                    "type": "HandicapGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47619874,
                                                            "coeff": 1.15,
                                                            "value": "5.5",
                                                            "type": "Home"
                                                        },
                                                        {
                                                            "id": 47619875,
                                                            "coeff": 4.9,
                                                            "value": "-5.5",
                                                            "type": "Away"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20114403,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47624326,
                                                            "coeff": 4.4,
                                                            "value": "29.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47624327,
                                                            "coeff": 1.18,
                                                            "value": "29.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20114778,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47625279,
                                                            "coeff": 2.6,
                                                            "value": "30.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47625280,
                                                            "coeff": 1.46,
                                                            "value": "30.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20115455,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47627136,
                                                            "coeff": 1.58,
                                                            "value": "31.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47627137,
                                                            "coeff": 2.25,
                                                            "value": "31.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20115685,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47627779,
                                                            "coeff": 1.49,
                                                            "value": "32.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47627780,
                                                            "coeff": 2.55,
                                                            "value": "32.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": 20115719,
                                                    "period": "FT",
                                                    "type": "OverUnderGame",
                                                    "outcomes": [
                                                        {
                                                            "id": 47627875,
                                                            "coeff": 1.25,
                                                            "value": "33.5",
                                                            "type": "Under"
                                                        },
                                                        {
                                                            "id": 47627876,
                                                            "coeff": 3.7,
                                                            "value": "33.5",
                                                            "type": "Over"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "score": [
                                                {
                                                    "id": 17567147,
                                                    "period": "S1",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17567148,
                                                    "period": "S1",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17567149,
                                                    "period": "S1G1",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17567150,
                                                    "period": "S1G1",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601524,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601530,
                                                    "period": "S1G1",
                                                    "value": -1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601531,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601563,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601624,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17601787,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601887,
                                                    "period": "S1G2",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17601888,
                                                    "period": "S1G2",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601894,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17601895,
                                                    "period": "S1G1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602055,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17602144,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602226,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602322,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602377,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17602505,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17602593,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602669,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17602774,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602829,
                                                    "period": "S1G3",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17602830,
                                                    "period": "S1G3",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602831,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602842,
                                                    "period": "S1G2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17602955,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603037,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603094,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17603202,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603288,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603290,
                                                    "period": "S1G4",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603291,
                                                    "period": "S1G4",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17603292,
                                                    "period": "S1G3",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603654,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603776,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17603803,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17603851,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17603963,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603972,
                                                    "period": "S1G4",
                                                    "value": -1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17603982,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17604081,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17604187,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17604327,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17604414,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17604493,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17604605,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17604672,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17604788,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17604926,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605035,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605133,
                                                    "period": "S1G5",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605134,
                                                    "period": "S1G5",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605139,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605140,
                                                    "period": "S1G4",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605274,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605322,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605384,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605467,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605544,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605629,
                                                    "period": "S1G6",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17605630,
                                                    "period": "S1G6",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605635,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605636,
                                                    "period": "S1G5",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605875,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17605969,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17606046,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606120,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606174,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606260,
                                                    "period": "S1G7",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606261,
                                                    "period": "S1G7",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17606276,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606277,
                                                    "period": "S1G6",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606364,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606413,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17606479,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17606566,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606680,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17606744,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606812,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17606917,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607033,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607036,
                                                    "period": "S1G7",
                                                    "value": -1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607039,
                                                    "period": "S1G7",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607147,
                                                    "period": "S1G8",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607148,
                                                    "period": "S1G8",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607158,
                                                    "period": "S1G7",
                                                    "value": -4,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607159,
                                                    "period": "S1G7",
                                                    "value": -5,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607160,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607171,
                                                    "period": "S1G7",
                                                    "value": 4,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607172,
                                                    "period": "S1G7",
                                                    "value": 6,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607389,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607474,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607529,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607623,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607717,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607768,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607769,
                                                    "period": "S1G8",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607771,
                                                    "period": "S1G9",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607772,
                                                    "period": "S1G9",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607863,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17607951,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17607992,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608065,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608160,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608161,
                                                    "period": "S1G10",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608162,
                                                    "period": "S1G10",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608170,
                                                    "period": "S1",
                                                    "value": -1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608176,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608177,
                                                    "period": "S1G9",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608416,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608461,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608504,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608547,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608632,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608685,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608686,
                                                    "period": "S1G10",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608688,
                                                    "period": "S1G11",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17608689,
                                                    "period": "S1G11",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608795,
                                                    "period": "S1G11",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608881,
                                                    "period": "S1G11",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17608959,
                                                    "period": "S1G11",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609017,
                                                    "period": "S1G11",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17609141,
                                                    "period": "S1G11",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609183,
                                                    "period": "S1G12",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609184,
                                                    "period": "S1G12",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17609185,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17609186,
                                                    "period": "S1G11",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17609440,
                                                    "period": "S1G12",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609514,
                                                    "period": "S1G12",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609516,
                                                    "period": "S1G12",
                                                    "value": -1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609526,
                                                    "period": "S1G12",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609612,
                                                    "period": "S1G12",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609696,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609697,
                                                    "period": "S1G12",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609698,
                                                    "period": "S1G13T",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609699,
                                                    "period": "S1G13T",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17609707,
                                                    "period": "S1G13",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609708,
                                                    "period": "S1G13",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17609842,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17609924,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17610011,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610157,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610214,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17610306,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610464,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610544,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17610636,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17610741,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610953,
                                                    "period": "S1",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610954,
                                                    "period": "S1G13T",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610956,
                                                    "period": "S2",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610957,
                                                    "period": "S2",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17610958,
                                                    "period": "S2G14",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610959,
                                                    "period": "S2G14",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17610975,
                                                    "period": "S1G13",
                                                    "value": 7,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17610976,
                                                    "period": "S1G13",
                                                    "value": 4,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611293,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611407,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611412,
                                                    "period": "S2G14",
                                                    "value": -1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611413,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611483,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611536,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611625,
                                                    "period": "S2G15",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611626,
                                                    "period": "S2G15",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611629,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611630,
                                                    "period": "S2G14",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611753,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611785,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611836,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611918,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611956,
                                                    "period": "S2G16",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17611957,
                                                    "period": "S2G16",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611958,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17611973,
                                                    "period": "S2G15",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612126,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612202,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17612270,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612361,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17612537,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17612710,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612867,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612990,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612991,
                                                    "period": "S2G17",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17612992,
                                                    "period": "S2G17",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17612997,
                                                    "period": "S2G16",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613345,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613444,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613525,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613573,
                                                    "period": "S2G18",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17613574,
                                                    "period": "S2G18",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613578,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613585,
                                                    "period": "S2G17",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613647,
                                                    "period": "S2G18",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613687,
                                                    "period": "S2G18",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17613754,
                                                    "period": "S2G18",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613806,
                                                    "period": "S2G18",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613890,
                                                    "period": "S2G18",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17613964,
                                                    "period": "S2G19",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17613965,
                                                    "period": "S2G19",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613970,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17613980,
                                                    "period": "S2G18",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614284,
                                                    "period": "S2G19",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614365,
                                                    "period": "S2G19",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614444,
                                                    "period": "S2G19",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614486,
                                                    "period": "S2G20",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17614487,
                                                    "period": "S2G20",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614490,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614516,
                                                    "period": "S2G19",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614604,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17614715,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614781,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614852,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17614894,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17614948,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17615017,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17615093,
                                                    "period": "S2G20",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17615094,
                                                    "period": "S2",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17615096,
                                                    "period": "S2G21",
                                                    "value": 0,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17615097,
                                                    "period": "S2G21",
                                                    "value": 0,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17615420,
                                                    "period": "S2G21",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17615486,
                                                    "period": "S2G21",
                                                    "value": 1,
                                                    "team_id": 385690
                                                },
                                                {
                                                    "id": 17615520,
                                                    "period": "S2G21",
                                                    "value": 1,
                                                    "team_id": 383718
                                                },
                                                {
                                                    "id": 17615594,
                                                    "period": "S2G21",
                                                    "value": 1,
                                                    "team_id": 383718
                                                }
                                            ],
                                            "outcome_sum": 68
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        getInfo(){//запрос на свою лигу
           
            
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>

<style>

</style>
