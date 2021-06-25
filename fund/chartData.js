
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

var option;

var colors = ['#EE6666', '#91CC75', '#5470C6', '#7A378B'];
var KTZS = "恐贪指数"
var YFDZXP = "易方达中小盘"
var YFDLC = "易方达蓝筹"
var FGTH = "富国天惠"

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
	dataZoom: [
        {
            show: true,
            realtime: true,
            start: 65,
            end: 85
        },
        {
            type: 'inside',
            realtime: true,
            start: 65,
            end: 85
        }
    ],
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false}
        }
    },
    legend: {
        data: [KTZS, YFDZXP, YFDLC, FGTH]
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['2019年6月20日','2019年6月21日','2019年6月24日','2019年6月25日','2019年6月26日','2019年6月27日','2019年6月28日','2019年6月30日','2019年7月1日','2019年7月2日','2019年7月3日','2019年7月4日','2019年7月5日','2019年7月8日','2019年7月9日','2019年7月10日','2019年7月11日','2019年7月12日','2019年7月15日','2019年7月16日','2019年7月17日','2019年7月18日','2019年7月19日','2019年7月22日','2019年7月23日','2019年7月24日','2019年7月25日','2019年7月26日','2019年7月29日','2019年7月30日','2019年7月31日','2019年8月1日','2019年8月2日','2019年8月5日','2019年8月6日','2019年8月7日','2019年8月8日','2019年8月9日','2019年8月12日','2019年8月13日','2019年8月14日','2019年8月15日','2019年8月16日','2019年8月19日','2019年8月20日','2019年8月21日','2019年8月22日','2019年8月23日','2019年8月26日','2019年8月27日','2019年8月28日','2019年8月29日','2019年8月30日','2019年9月2日','2019年9月3日','2019年9月4日','2019年9月5日','2019年9月6日','2019年9月9日','2019年9月10日','2019年9月11日','2019年9月12日','2019年9月16日','2019年9月17日','2019年9月18日','2019年9月19日','2019年9月20日','2019年9月23日','2019年9月24日','2019年9月25日','2019年9月26日','2019年9月27日','2019年9月30日','2019年10月8日','2019年10月9日','2019年10月10日','2019年10月11日','2019年10月14日','2019年10月15日','2019年10月16日','2019年10月17日','2019年10月18日','2019年10月21日','2019年10月22日','2019年10月23日','2019年10月24日','2019年10月25日','2019年10月28日','2019年10月29日','2019年10月30日','2019年10月31日','2019年11月1日','2019年11月4日','2019年11月5日','2019年11月6日','2019年11月7日','2019年11月8日','2019年11月11日','2019年11月12日','2019年11月13日','2019年11月14日','2019年11月15日','2019年11月18日','2019年11月19日','2019年11月20日','2019年11月21日','2019年11月22日','2019年11月25日','2019年11月26日','2019年11月27日','2019年11月28日','2019年11月29日','2019年12月2日','2019年12月3日','2019年12月4日','2019年12月5日','2019年12月6日','2019年12月9日','2019年12月10日','2019年12月11日','2019年12月12日','2019年12月13日','2019年12月16日','2019年12月17日','2019年12月18日','2019年12月19日','2019年12月20日','2019年12月23日','2019年12月24日','2019年12月25日','2019年12月26日','2019年12月27日','2019年12月30日','2019年12月31日','2020年1月2日','2020年1月3日','2020年1月6日','2020年1月7日','2020年1月8日','2020年1月9日','2020年1月10日','2020年1月13日','2020年1月14日','2020年1月15日','2020年1月16日','2020年1月17日','2020年1月20日','2020年1月21日','2020年1月22日','2020年1月23日','2020年2月3日','2020年2月4日','2020年2月5日','2020年2月6日','2020年2月7日','2020年2月10日','2020年2月11日','2020年2月12日','2020年2月13日','2020年2月14日','2020年2月17日','2020年2月18日','2020年2月19日','2020年2月20日','2020年2月21日','2020年2月24日','2020年2月25日','2020年2月26日','2020年2月27日','2020年2月28日','2020年3月2日','2020年3月3日','2020年3月4日','2020年3月5日','2020年3月6日','2020年3月9日','2020年3月10日','2020年3月11日','2020年3月12日','2020年3月13日','2020年3月16日','2020年3月17日','2020年3月18日','2020年3月19日','2020年3月20日','2020年3月23日','2020年3月24日','2020年3月25日','2020年3月26日','2020年3月27日','2020年3月30日','2020年3月31日','2020年4月1日','2020年4月2日','2020年4月3日','2020年4月7日','2020年4月8日','2020年4月9日','2020年4月10日','2020年4月13日','2020年4月14日','2020年4月15日','2020年4月16日','2020年4月17日','2020年4月20日','2020年4月21日','2020年4月22日','2020年4月23日','2020年4月24日','2020年4月27日','2020年4月28日','2020年4月29日','2020年4月30日','2020年5月6日','2020年5月7日','2020年5月8日','2020年5月11日','2020年5月12日','2020年5月13日','2020年5月14日','2020年5月15日','2020年5月18日','2020年5月19日','2020年5月20日','2020年5月21日','2020年5月22日','2020年5月25日','2020年5月26日','2020年5月27日','2020年5月28日','2020年5月29日','2020年6月1日','2020年6月2日','2020年6月3日','2020年6月4日','2020年6月5日','2020年6月8日','2020年6月9日','2020年6月10日','2020年6月11日','2020年6月12日','2020年6月15日','2020年6月16日','2020年6月17日','2020年6月18日','2020年6月19日','2020年6月22日','2020年6月23日','2020年6月24日','2020年6月29日','2020年6月30日','2020年7月1日','2020年7月2日','2020年7月3日','2020年7月6日','2020年7月7日','2020年7月8日','2020年7月9日','2020年7月10日','2020年7月13日','2020年7月14日','2020年7月15日','2020年7月16日','2020年7月17日','2020年7月20日','2020年7月21日','2020年7月22日','2020年7月23日','2020年7月24日','2020年7月27日','2020年7月28日','2020年7月29日','2020年7月30日','2020年7月31日','2020年8月3日','2020年8月4日','2020年8月5日','2020年8月6日','2020年8月7日','2020年8月10日','2020年8月11日','2020年8月12日','2020年8月13日','2020年8月14日','2020年8月17日','2020年8月18日','2020年8月19日','2020年8月20日','2020年8月21日','2020年8月24日','2020年8月25日','2020年8月26日','2020年8月27日','2020年8月28日','2020年8月31日','2020年9月1日','2020年9月2日','2020年9月3日','2020年9月4日','2020年9月7日','2020年9月8日','2020年9月9日','2020年9月10日','2020年9月11日','2020年9月14日','2020年9月15日','2020年9月16日','2020年9月17日','2020年9月18日','2020年9月21日','2020年9月22日','2020年9月23日','2020年9月24日','2020年9月25日','2020年9月28日','2020年9月29日','2020年9月30日','2020年10月9日','2020年10月12日','2020年10月13日','2020年10月14日','2020年10月15日','2020年10月16日','2020年10月19日','2020年10月20日','2020年10月21日','2020年10月22日','2020年10月23日','2020年10月26日','2020年10月27日','2020年10月28日','2020年10月29日','2020年10月30日','2020年11月2日','2020年11月3日','2020年11月4日','2020年11月5日','2020年11月6日','2020年11月9日','2020年11月10日','2020年11月11日','2020年11月12日','2020年11月13日','2020年11月16日','2020年11月17日','2020年11月18日','2020年11月19日','2020年11月20日','2020年11月23日','2020年11月24日','2020年11月25日','2020年11月26日','2020年11月27日','2020年11月30日','2020年12月1日','2020年12月2日','2020年12月3日','2020年12月4日','2020年12月7日','2020年12月8日','2020年12月9日','2020年12月10日','2020年12月11日','2020年12月14日','2020年12月15日','2020年12月16日','2020年12月17日','2020年12月18日','2020年12月21日','2020年12月22日','2020年12月23日','2020年12月24日','2020年12月25日','2020年12月28日','2020年12月29日','2020年12月30日','2020年12月31日','2021年1月4日','2021年1月5日','2021年1月6日','2021年1月7日','2021年1月8日','2021年1月11日','2021年1月12日','2021年1月13日','2021年1月14日','2021年1月15日','2021年1月18日','2021年1月19日','2021年1月20日','2021年1月21日','2021年1月22日','2021年1月25日','2021年1月26日','2021年1月27日','2021年1月28日','2021年1月29日','2021年2月1日','2021年2月2日','2021年2月3日','2021年2月4日','2021年2月5日','2021年2月8日','2021年2月9日','2021年2月10日','2021年2月18日','2021年2月19日','2021年2月22日','2021年2月23日','2021年2月24日','2021年2月25日','2021年2月26日','2021年3月1日','2021年3月2日','2021年3月3日','2021年3月4日','2021年3月5日','2021年3月8日','2021年3月9日','2021年3月10日','2021年3月11日','2021年3月12日','2021年3月15日','2021年3月16日','2021年3月17日','2021年3月18日','2021年3月19日','2021年3月22日','2021年3月23日','2021年3月24日','2021年3月25日','2021年3月26日','2021年3月29日','2021年3月30日','2021年3月31日','2021年4月1日','2021年4月2日','2021年4月6日','2021年4月7日','2021年4月8日','2021年4月9日','2021年4月12日','2021年4月13日','2021年4月14日','2021年4月15日','2021年4月16日','2021年4月19日','2021年4月20日','2021年4月21日','2021年4月22日','2021年4月23日','2021年4月26日','2021年4月27日','2021年4月28日','2021年4月29日','2021年4月30日','2021年5月6日','2021年5月7日','2021年5月10日','2021年5月11日','2021年5月12日','2021年5月13日','2021年5月14日','2021年5月17日','2021年5月18日','2021年5月19日','2021年5月20日','2021年5月21日','2021年5月24日','2021年5月25日','2021年5月26日','2021年5月27日','2021年5月28日','2021年5月31日','2021年6月1日','2021年6月2日','2021年6月3日','2021年6月4日','2021年6月7日','2021年6月8日','2021年6月9日','2021年6月10日','2021年6月11日','2021年6月15日','2021年6月16日','2021年6月17日','2021年6月18日','2021年6月21日','2021年6月22日','2021年6月23日','2021年6月24日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: KTZS,
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {                  
                 formatter: function (value, index) {           
                  return value.toFixed(1);      
                   }
            }
        },
        {
            type: 'value',
            name: YFDZXP,
            min: function(value){return value.min;},
            max: function(value){return value.max;},
            position: 'right',
            offset: 160,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {                  
                 formatter: function (value, index) {           
                  return value.toFixed(1);      
                   }
            }
        },
        {
            type: 'value',
            name: YFDLC,
            min: function(value){return value.min;},
            max: function(value){return value.max;},
            position: 'right',
			offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
			axisLabel: {                   
                 formatter: function (value, index) {           
                  return value.toFixed(1);      
                   }                
            }
        },
        {
            type: 'value',
            name: FGTH,
            min: function(value){return value.min;},
            max: function(value){return value.max;},
            position: 'right',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[3]
                }
            },
			axisLabel: {                   
                 formatter: function (value, index) {           
                  return value.toFixed(1);      
                   }                
            }
        }
    ],
    series: [
        {
            name: KTZS,
            type: 'line',
			markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
				symbol:"none",
                data: [{
					lineStyle: {
                    type:"solid",
                    color:"#0099ff",
                },
                                   label:{
                                   position:'end',
                                   formatter:"恐惧线"
                               },
                    yAxis: 25
                }, {
					
					lineStyle: {
                    type:"solid",
                    color:"#ff0000",
                },
                                   label:{
                                   position:'end',
                                   formatter:"贪婪线"
                               },
                    yAxis: 89
                }]
            },
            yAxisIndex: 0,
            data: [55.1356,69.6795,76.1709,66.5571,60.7231,77.5678,75.4314,75.4314,87.8389,83.4018,65.8176,59.9836,65.7354,39.4412,18.9811,21.0353,21.7749,31.8817,33.1964,30.074,20.1315,13.1471,26.3763,21.1175,33.8537,47.4938,50.1233,50.2876,45.1931,43.8784,42.3993,41.8242,21.6105,13.7223,11.7502,10.5998,14.1331,12.2432,24.0756,16.1873,15.53,20.7888,18.0772,46.2613,31.4708,39.9343,40.1808,45.7683,27.2802,60.4766,53.6565,56.1216,63.8455,87.3459,87.0173,88.332,92.6869,95.645,96.7954,94.9877,89.0715,93.0978,94.3303,80.6902,86.0312,91.0435,92.9334,87.4281,91.7009,74.3632,63.6812,77.1569,63.0238,61.1339,56.8611,71.3229,76.4996,79.622,61.627,64.4207,61.4626,50.3698,50.6984,56.0394,49.7946,48.562,52.7527,66.4749,61.5448,58.9154,60.8053,82.2514,90.304,89.8932,86.1956,87.7568,77.0748,57.765,60.3122,68.8578,75.8422,62.0378,68.447,82.1693,71.9803,56.2859,48.4799,49.2194,56.9433,60.9696,57.0255,50.5341,53.41,53.3279,52.5883,61.8735,70.8299,72.6376,81.5941,72.5555,72.8841,90.4684,93.7551,95.152,96.0559,95.9737,94.2482,87.1816,93.673,93.3443,94.7412,92.5226,97.2062,96.4667,99.1783,98.3566,98.8496,99.2605,97.8636,99.0961,98.6031,99.014,98.1923,96.2202,95.3985,94.8233,97.5349,95.3985,95.7272,72.309,52.6705,73.0485,81.3476,85.456,81.7584,76.6639,39.3591,71.5694,42.5637,59.7371,81.2654,74.1988,75.7601,83.6483,84.0592,74.3632,65.8998,21.1997,37.4692,8.6278,83.7305,82.6623,82.9088,85.1274,80.8546,27.5267,67.0501,24.8973,12.3254,8.0526,1.8077,1.7256,1.2325,0.9039,0.8217,0,0.3287,0.986,0.493,0.0822,0.4108,1.3969,1.0682,1.479,2.0542,26.5407,14.3796,35.6615,19.0633,35.6615,56.0394,52.0131,56.3681,59.4084,71.0764,67.6253,69.1865,53.8209,49.6302,51.8488,53.5744,51.2736,50.7806,54.7247,52.9992,55.5464,55.3821,60.2301,61.8735,52.8348,51.6845,54.8069,60.6409,51.0271,49.8767,22.6787,38.7839,53.0813,51.438,51.1915,55.8751,72.1446,59.0797,63.599,67.7896,66.3106,59.8192,69.8439,71.0764,62.6952,67.2966,62.4486,64.8316,64.092,65.2424,83.8948,83.8948,85.3739,84.1413,81.9228,81.0189,82.0871,89.4002,92.1939,96.138,97.4528,97.9458,98.4388,98.7675,98.9318,98.521,98.0279,86.1134,93.3443,90.0575,85.6204,86.4421,84.6343,62.8595,71.8159,73.2128,78.7182,76.5818,73.5415,37.7157,34.3468,25.8833,18.4881,20.2136,16.1052,13.6401,10.0247,28.6771,37.1405,69.2687,68.2005,33.6894,19.2276,65.6532,69.3509,68.6113,36.401,55.9573,74.281,49.3016,54.3139,53.9852,46.59,46.3435,37.3048,48.1512,22.9252,14.7083,16.6804,30.567,24.1578,29.1701,33.1142,48.3977,35.6615,19.5563,30.8135,9.2851,8.7099,7.1487,9.6138,9.4495,45.1109,65.4889,72.802,62.613,65.3246,63.3525,52.0953,53.2457,46.4256,44.9466,38.7839,37.9622,34.0181,50.6163,52.3418,38.0444,55.2177,59.5727,59.4906,78.636,74.0345,88.2498,83.0731,78.0608,80.4437,64.9959,84.3878,73.295,79.7864,76.9926,84.7165,92.5226,90.5505,70.2547,66.0641,81.5119,78.8003,93.4265,91.7831,84.3057,86.3057,77.4856,79.4577,68.2827,74.6919,68.6935,73.9523,63.3525,68.0362,73.2128,75.9244,83.2375,64.3385,81.8406,75.0205,79.129,79.7042,54.4782,79.5399,88.4141,93.0156,92.1939,92.0296,96.6311,97.2884,94.0838,98.2744,97.0419,92.7691,90.797,96.3024,91.5366,96.5489,97.3706,96.8776,96.7132,89.7288,90.304,69.3509,61.7091,80.7724,76.4996,70.9121,65.3246,60.5588,84.2235,86.2777,91.8652,93.8373,90.7149,86.5242,85.8669,63.2703,59.9014,27.198,60.8874,29.1701,64.6672,21.4462,17.7486,4.848,2.6294,3.5333,15.2013,18.9811,26.7872,31.3887,14.544,23.5004,11.5037,36.8118,11.9145,14.6261,14.8726,30.4026,25.8833,32.9499,18.6524,26.2942,29.6631,45.5218,47.1652,41.9063,23.0896,17.5021,20.2958,32.3747,23.7469,44.1249,58.1758,55.7108,59.244,70.4191,78.4717,62.3665,62.7773,65.9819,70.9942,61.2161,58.9975,54.1495,59.5727,53.903,61.0518,47.6582,70.7477,71.7338,78.8003,72.7198,58.3402,49.1372,54.4782,89.318,88.9893,94.0016,92.5226,93.9195,90.8792,85.0452,86.6886,89.9753,91.1257,84.963,84.8809,85.8669,77.1569,56.5325,22.35,42.3172,39.6878,39.441199999999995,35.0041,43.385400000000004,43]
        },
        {
            name: YFDZXP,
            type: 'line',
            yAxisIndex: 1,
            data: [5.1474,5.1548,5.2102,5.2092,5.215,5.3196,5.3586,5.3582,5.5512,5.5633,5.4511,5.3642,5.4907,5.4004,5.3996,5.4136,5.3908,5.4622,5.4289,5.3595,5.3431,5.2842,5.3266,5.3245,5.286,5.3038,5.3323,5.3565,5.371,5.3545,5.2971,5.2559,5.2095,5.1193,5.125,5.1336,5.2082,5.1675,5.2969,5.2881,5.3579,5.3523,5.4204,5.4607,5.4634,5.4351,5.5185,5.5836,5.5192,5.6161,5.5948,5.6071,5.6962,5.7353,5.6929,5.6605,5.6824,5.7025,5.6987,5.6824,5.5354,5.5886,5.559,5.5354,5.663,5.6567,5.6847,5.6237,5.7021,5.6822,5.6594,5.6547,5.6193,5.673,5.6413,5.7228,5.7438,5.7347,5.7819,5.7539,5.7625,5.7044,5.6769,5.6927,5.64,5.574,5.6446,5.6953,5.6748,5.6723,5.7117,5.8248,5.8567,5.8831,5.8446,5.8722,5.8675,5.8048,5.8379,5.8977,5.9234,5.8822,5.8884,5.9553,5.9437,5.9018,5.7645,5.741,5.7765,5.7478,5.7371,5.6359,5.6241,5.6145,5.638,5.6573,5.7205,5.6767,5.6921,5.6874,5.6669,5.7631,5.7519,5.7823,5.758,5.7349,5.7261,5.7042,5.7213,5.6894,5.7452,5.7383,5.8014,5.8507,5.8248,5.7667,5.6773,5.7172,5.7034,5.7949,5.8585,5.9268,5.8883,5.8917,5.9081,5.9097,5.9162,5.8816,5.865,5.7304,5.4202,5.4748,5.6041,5.728,5.714,5.751,5.8181,5.8344,5.807,5.8522,5.8651,5.8135,5.8031,5.9309,5.9308,5.8798,5.8722,5.7905,5.8292,5.6886,5.8084,5.8776,5.911,6.0739,5.987,5.8377,5.9189,5.8776,5.765,5.6906,5.4944,5.489,5.4067,5.2577,5.3971,5.2649,5.4246,5.5852,5.5931,5.5991,5.4919,5.6177,5.6198,5.6689,5.6788,5.7778,5.7491,5.7993,5.8132,5.7922,5.8508,5.8282,5.8175,5.8465,5.8613,5.7675,5.8661,5.9242,5.9143,5.9267,6.0648,6.0088,5.9983,6.0191,6.0606,6.0841,6.057,6.103,6.2105,6.1813,6.1243,6.2605,6.3474,6.3003,6.3227,6.1757,6.2493,6.3272,6.2919,6.2755,6.389,6.5264,6.4503,6.4523,6.5237,6.5987,6.5804,6.6448,6.6907,6.6286,6.6662,6.5543,6.636,6.6687,6.6642,6.8042,6.7718,6.911,6.8774,6.8934,6.9504,7.0743,7.206,7.2269,7.3212,7.456,7.4385,7.5952,7.6473,7.8683,7.8604,7.9635,7.438,7.4665,7.4403,7.5915,7.7323,7.8284,7.5189,7.6486,7.726,7.8308,7.866,7.8841,7.9628,7.9747,8.0303,7.8998,7.7878,7.7849,7.8317,7.729,7.723,7.876,8.0038,8.0396,8.002,7.8895,7.9867,8.0919,8.2429,8.2594,8.3404,8.5115,8.5078,8.4958,8.485,8.5421,8.4209,8.2539,8.1209,7.9524,8.018,8.1344,8.1958,8.2287,8.133,8.0271,8.1027,8.02,7.9551,7.9968,7.9034,7.9475,7.9667,7.9828,8.0558,8.1879,8.4703,8.5697,8.5195,8.4892,8.4327,8.3386,8.5286,8.5468,8.6025,8.4431,8.4989,8.5274,8.6449,8.8029,8.6591,8.6923,8.7441,8.8081,8.8524,8.805,8.9681,9.0426,8.9557,9.0451,8.932,9.097,8.9517,8.8613,8.9108,8.9936,8.9965,9.0343,8.8353,8.8507,8.9077,8.8042,8.958,8.9281,9.0444,9.248,9.2517,9.2683,9.225,9.27,9.2332,9.3971,9.3815,9.4356,9.5845,9.5251,9.5969,9.5978,9.5743,9.4972,9.5519,9.7165,9.6921,9.8339,10.0348,10.1528,10.4994,10.6044,10.7003,10.6089,10.4544,10.6848,10.5707,10.4408,10.3716,10.3975,10.2608,10.2916,10.4637,10.5596,10.7892,10.6618,10.629,10.4083,10.4487,10.5753,10.7489,10.8012,10.8486,11.0026,11.1011,11.3457,11.6289,11.2855,11.3176,10.8551,10.815,10.3682,10.2577,9.9825,10.0687,9.9296,10.1124,9.8229,9.8484,9.4197,9.1681,9.2813,9.5587,9.5477,9.3356,9.4645,9.5198,9.6578,9.4561,9.5032,9.4913,9.3924,9.4018,9.6546,9.6929,9.7402,9.6745,9.83,9.9897,9.8969,9.7167,9.7609,9.6108,9.4836,9.5785,9.6637,9.6449,9.6651,9.8011,9.8276,9.8831,9.8566,9.9264,9.8469,9.9724,10.0193,9.9674,9.9208,9.7387,9.597,9.5634,9.7035,9.7909,9.8074,9.9398,10.0671,10.0787,10.0293,10.0739,10.0143,10.1557,10.3803,10.3167,10.4018,10.2573,10.2058,10.2261,10.0674,10.0522,10.0636,10.0818,9.951,9.961,9.9749,9.8863,9.8427,9.7732,9.7712,9.7297,9.7627,9.8140,9.7487,9.7388]
        },
        {
            name: YFDLC,
            type: 'line',
            yAxisIndex: 2,
            data: [1.2791,1.2803,1.2937,1.2883,1.2883,1.3149,1.3184,1.3184,1.3183,1.3625,1.3454,1.3352,1.362,1.3402,1.3354,1.3471,1.3405,1.3469,1.3476,1.3368,1.3376,1.3244,1.3346,1.3297,1.3241,1.3249,1.3393,1.3386,1.3463,1.3432,1.3432,1.3232,1.3003,1.2746,1.2825,1.2834,1.3014,1.288,1.3167,1.3062,1.3231,1.3209,1.3376,1.3608,1.3639,1.3638,1.3824,1.4001,1.3764,1.3964,1.3848,1.4119,1.4368,1.451,1.441,1.4438,1.4527,1.4568,1.4441,1.43,1.4,1.4121,1.4035,1.4008,1.4195,1.4107,1.4137,1.3984,1.416,1.4,1.3998,1.3985,1.3943,1.4095,1.3988,1.418,1.4294,1.433,1.4455,1.4392,1.4383,1.4282,1.4243,1.4264,1.411,1.4006,1.4227,1.4407,1.4447,1.4393,1.4511,1.4572,1.4688,1.4655,1.4573,1.4662,1.4634,1.4402,1.4444,1.4485,1.4479,1.4404,1.4434,1.4696,1.4666,1.4556,1.4394,1.4321,1.4386,1.4344,1.4307,1.3894,1.386,1.3803,1.3822,1.3932,1.4153,1.3965,1.3991,1.4011,1.407,1.4293,1.4225,1.4512,1.4513,1.4452,1.4449,1.4496,1.449,1.4416,1.4444,1.459,1.4686,1.4691,1.467,1.459,1.4325,1.4496,1.439,1.4684,1.4776,1.502,1.4832,1.4854,1.5018,1.5112,1.5152,1.4874,1.4964,1.4567,1.3896,1.4192,1.4438,1.4771,1.4771,1.478,1.5009,1.5059,1.5054,1.5185,1.5199,1.5046,1.5075,1.5308,1.5212,1.4921,1.4998,1.479,1.4931,1.4546,1.4773,1.5001,1.5064,1.5576,1.5357,1.4821,1.5045,1.4998,1.4537,1.4456,1.3715,1.3789,1.3366,1.2966,1.365,1.324,1.3795,1.4329,1.4378,1.4333,1.4116,1.4326,1.4279,1.4547,1.4625,1.5059,1.4921,1.5128,1.5125,1.5089,1.523,1.521,1.5273,1.5422,1.55,1.5137,1.5437,1.5577,1.5432,1.5591,1.5945,1.5831,1.5806,1.5961,1.6042,1.6176,1.6219,1.6352,1.6724,1.6678,1.6556,1.6924,1.7149,1.7165,1.7146,1.6481,1.6884,1.7234,1.7041,1.6902,1.7304,1.795,1.7845,1.7987,1.825,1.8386,1.8261,1.8293,1.8564,1.8445,1.8568,1.8171,1.8587,1.8738,1.8798,1.915,1.9118,1.9628,1.9547,1.9514,1.9677,2.0074,2.0719,2.0915,2.1211,2.1461,2.1695,2.2215,2.2159,2.262,2.2388,2.2717,2.1142,2.1448,2.1295,2.2116,2.2009,2.2428,2.14,2.164,2.2052,2.2237,2.229,2.2271,2.2422,2.2584,2.2724,2.2326,2.1984,2.1857,2.1998,2.1676,2.1656,2.1985,2.233,2.2533,2.2375,2.2132,2.2429,2.3006,2.3265,2.3325,2.3472,2.3873,2.3732,2.3748,2.3824,2.3901,2.3521,2.3065,2.2612,2.2314,2.2433,2.288,2.3052,2.3122,2.2924,2.2474,2.2653,2.2352,2.2221,2.2343,2.1948,2.1915,2.2155,2.2092,2.2292,2.2796,2.3497,2.3773,2.3752,2.346,2.3381,2.3269,2.369,2.3784,2.3954,2.3584,2.3612,2.3894,2.4535,2.5053,2.4487,2.4773,2.4973,2.5153,2.567,2.5449,2.5929,2.5808,2.5196,2.5609,2.5637,2.6206,2.5676,2.5469,2.5504,2.598,2.6103,2.6263,2.551,2.5762,2.5983,2.5316,2.5665,2.541,2.5726,2.6321,2.6132,2.626,2.6175,2.6311,2.6417,2.6503,2.631,2.6661,2.7125,2.6947,2.719,2.7293,2.744,2.7299,2.7329,2.7401,2.7537,2.8212,2.8661,2.9202,3.0144,3.0452,3.0491,3.0306,2.9898,3.0335,2.9997,2.9985,2.9819,3.0143,3.0303,3.0868,3.1302,3.1652,3.325,3.2393,3.1889,3.1174,3.1327,3.203,3.2692,3.3092,3.3084,3.35,3.3807,3.4215,3.5287,3.461,3.477,3.3015,3.2979,3.1287,3.1122,2.9872,3.0655,3.0117,3.0963,2.9647,2.957,2.7872,2.7353,2.7899,2.9122,2.8839,2.8028,2.8573,2.8582,2.9218,2.852,2.8564,2.8318,2.7775,2.7584,2.8476,2.8299,2.8677,2.8453,2.9347,2.9855,2.9644,2.8782,2.901,2.8442,2.8004,2.7903,2.8208,2.8078,2.8464,2.8982,2.9181,2.9122,2.9193,2.9844,2.9613,2.9863,3.0005,3.0175,2.9722,2.901,2.8597,2.8161,2.8229,2.856,2.8333,2.8662,2.9318,2.9482,2.9345,2.9665,2.9538,2.9813,3.1056,3.1078,3.1016,3.0805,3.1313,3.1733,3.1438,3.1219,3.1411,3.126,3.049,3.0587,3.0916,3.0421,3.0088,2.9664,2.9786,2.9668,2.9584,2.9605,2.9518,2.9910]
        },
        {
            name: FGTH,
            type: 'line',
            yAxisIndex: 3,
            data: [4.8145,4.8266,4.8299,4.8149,4.8199,4.8547,4.8516,4.8514,4.9229,4.9442,4.9145,4.8876,4.9158,4.8699,4.8641,4.8577,4.8557,4.8601,4.8791,4.8577,4.8654,4.8391,4.8437,4.8341,4.8443,4.8738,4.8966,4.9067,4.9079,4.9146,4.8956,4.8813,4.8672,4.8247,4.8121,4.8002,4.8382,4.8282,4.8684,4.8542,4.8711,4.882,4.8939,4.952,4.9568,4.9543,4.963,4.9798,4.955,4.9898,4.9847,4.9915,5.0013,5.0326,5.0455,5.058,5.0754,5.0819,5.1215,5.1064,5.0711,5.0944,5.0884,5.0607,5.0783,5.0871,5.1003,5.0689,5.0798,5.0571,5.0191,5.0341,5.0098,5.0106,5.0156,5.0518,5.0624,5.0754,5.0569,5.0496,5.0547,5.0263,5.0179,5.0382,5.0137,5.0076,5.0194,5.0384,5.0313,5.02,5.0254,5.0639,5.0826,5.0993,5.0888,5.0937,5.0862,5.0464,5.0531,5.0694,5.0791,5.0697,5.0721,5.1023,5.0883,5.0724,5.0324,5.037,5.051,5.04,5.0361,5.0123,5.0211,5.0385,5.0506,5.0692,5.0961,5.0967,5.1081,5.1067,5.1015,5.1281,5.1393,5.1591,5.1499,5.145,5.131,5.1122,5.1358,5.1467,5.15,5.1469,5.172,5.1881,5.2261,5.2207,5.2184,5.2625,5.2429,5.2776,5.28,5.308,5.2881,5.2874,5.296,5.2981,5.3357,5.3021,5.3205,5.2326,5.0523,5.1397,5.1565,5.2115,5.2128,5.2335,5.2538,5.2814,5.2671,5.2851,5.3491,5.3621,5.3527,5.4009,5.4227,5.4484,5.4413,5.3531,5.37,5.2651,5.3394,5.3634,5.3772,5.4151,5.3859,5.282,5.3331,5.2918,5.2323,5.2001,5.0728,5.0812,5.0475,5.0361,5.0815,5.0027,5.0602,5.1199,5.1064,5.1058,5.0746,5.0899,5.0758,5.1196,5.1183,5.1804,5.1749,5.1984,5.1757,5.1788,5.2371,5.2108,5.2145,5.2316,5.256,5.2367,5.2622,5.2574,5.245,5.2654,5.2804,5.2747,5.2969,5.3207,5.3289,5.3551,5.3535,5.3686,5.3897,5.3649,5.3637,5.3842,5.4216,5.3899,5.3803,5.3201,5.332,5.3803,5.3532,5.3512,5.3794,5.4492,5.461,5.4643,5.4853,5.4884,5.4942,5.5198,5.5332,5.5085,5.5175,5.495,5.5492,5.556,5.578,5.6184,5.6104,5.6559,5.6637,5.6653,5.7097,5.7574,5.7757,5.7902,5.8755,5.9191,5.9549,6.0284,6.0229,6.1147,6.0962,6.0841,5.9318,5.9926,6.0577,6.1241,6.1684,6.19,6.0413,6.0526,6.097,6.1996,6.1893,6.2174,6.26,6.2322,6.2815,6.2646,6.2134,6.1989,6.1681,6.0947,6.0795,6.1226,6.1676,6.2042,6.1479,6.0941,6.1564,6.2063,6.2016,6.1676,6.1947,6.2984,6.2695,6.2832,6.2843,6.2712,6.2362,6.1563,6.1605,6.0577,6.0727,6.1216,6.1329,6.1783,6.141,6.1159,6.1763,6.1538,6.1248,6.1661,6.0979,6.0963,6.0962,6.1158,6.1256,6.2203,6.3125,6.3419,6.3395,6.3125,6.2992,6.276,6.3046,6.2887,6.2423,6.173,6.1862,6.2173,6.244,6.2825,6.216,6.2529,6.2907,6.3254,6.3507,6.2955,6.3431,6.3186,6.2573,6.2715,6.2595,6.3033,6.264,6.2485,6.2744,6.3013,6.3444,6.3126,6.2428,6.2359,6.2596,6.2556,6.312,6.3165,6.3136,6.347,6.3551,6.3592,6.3144,6.3363,6.3042,6.3457,6.359,6.3714,6.4003,6.3862,6.4408,6.3919,6.4137,6.4075,6.433,6.4379,6.4154,6.4706,6.5201,6.5647,6.6181,6.6634,6.7232,6.6788,6.6573,6.7293,6.6842,6.6182,6.627,6.692,6.6252,6.6748,6.7493,6.7907,6.8389,6.7504,6.7502,6.6342,6.6281,6.7106,6.7964,6.785,6.7865,6.8039,6.8838,6.9536,7.047,7.0286,6.9931,6.8624,6.8393,6.7249,6.7451,6.6733,6.7537,6.703,6.7701,6.6262,6.607,6.4748,6.3657,6.3922,6.4619,6.4761,6.3987,6.4485,6.4789,6.5263,6.4415,6.4762,6.4624,6.397,6.4049,6.4789,6.4939,6.5235,6.4823,6.531,6.5722,6.5702,6.5434,6.5635,6.5162,6.4473,6.45,6.4851,6.4667,6.4715,6.5586,6.5598,6.5803,6.5931,6.6237,6.6027,6.6234,6.6547,6.6645,6.668,6.6227,6.5441,6.5381,6.5537,6.5599,6.5327,6.5961,6.6653,6.6552,6.6578,6.6702,6.622,6.6334,6.7338,6.7171,6.7468,6.7189,6.7619,6.7853,6.7426,6.7092,6.7194,6.7216,6.6751,6.6974,6.71,6.692,6.6692,6.5772,6.6072,6.5978,6.6135,6.6372,6.6625,6.6474]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
