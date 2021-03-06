var app = angular.module('app', []);

app.controller('MaJiangController', ['$scope', function($scope) {
    var data = [
        {start : '2017-01-06 20:00', end : '2017-01-07 04:00', address : '黄君山至尊宝809', rmb : -800},
        {start : '2017-01-07 15:00', end : '2017-01-08 03:00', address : '黄君山至尊宝809', rmb : -200},
        {start : '2017-01-08 15:00', end : '2017-01-08 21:00', address : '黄君山至尊宝809', rmb : -200},
        {start : '2017-01-13 21:30', end : '2017-01-14 03:00', address : '黄君山至尊宝809', rmb : +500},
        {start : '2017-01-14 15:00', end : '2017-01-15 03:00', address : '黄君山至尊宝810', rmb : -2400 + 400},
        {start : '2017-01-15 15:00', end : '2017-01-15 21:00', address : '岗头市场11栋楼下', rmb : +900},
        
        {start : '2017-02-10 20:00', end : '2017-02-11 06:00', address : '岗头市场11栋楼下', rmb : -340},
        {start : '2017-02-11 21:00', end : '2017-02-12 05:00', address : '岗头市场11栋楼下', rmb : -2300},
        {start : '2017-02-12 15:00', end : '2017-02-12 22:00', address : '瓦窑排', rmb : +300},

        {start : '2017-02-25 15:00', end : '2017-02-25 23:30', address : '黄君山至尊宝816', rmb : +360},
        {start : '2017-02-26 15:00', end : '2017-02-26 21:30', address : '黄君山至尊宝811', rmb : -200},

        {start : '2017-03-04 15:00', end : '2017-03-05 03:00', address : '黄君山至尊宝', rmb : 0},

        {start : '2017-03-11 21:00', end : '2017-03-12 01:30', address : '岗头市场', rmb : +80},
        {start : '2017-03-12 14:00', end : '2017-03-12 22:00', address : '岗头市场', rmb : -180},

        {start : '2017-03-17 20:00', end : '2017-03-18 07:00', address : '岗头市场', rmb : +400},
        {start : '2017-03-18 20:00', end : '2017-03-19 14:00', address : '马蹄山至尊宝', rmb : -560},

        {start : '2017-03-23 19:00', end : '2017-03-24 01:00', address : '宝安25区', rmb : +200},
        {start : '2017-03-24 19:30', end : '2017-03-25 00:00', address : '岗头市场', rmb : +80},
        
        {start : '2017-03-25 14:00', end : '2017-03-26 00:00', address : '岗头市场', rmb : +80},

        {start : '2017-04-07 21:00', end : '2017-04-08 02:00', address : '岗头市场', rmb : -640},
        {start : '2017-04-08 21:00', end : '2017-04-09 00:00', address : '岗头市场', rmb : +520},
        {start : '2017-04-09 16:00', end : '2017-04-09 21:00', address : '岗头市场', rmb : -600},

        {start : '2017-04-14 21:00', end : '2017-04-15 09:00', address : '岗头市场', rmb : -1000},
        {start : '2017-04-15 19:00', end : '2017-04-16 03:00', address : '马蹄山至尊宝', rmb : +500},
        
        {start : '2017-04-22 17:00', end : '2017-04-23 00:00', address : '马蹄山至尊宝', rmb : +2060},

        {start : '2017-04-28 20:00', end : '2017-04-29 01:00', address : '岗头市场11栋楼下', rmb : -520},
        {start : '2017-04-29 13:00', end : '2017-04-30 03:00', address : '黄君山至尊宝', rmb : +1500},
        {start : '2017-05-01 00:00', end : '2017-05-01 14:00', address : '瓦窑排', rmb : -350},
        {start : '2017-05-01 16:00', end : '2017-05-01 20:00', address : '瓦窑排', rmb : +90},

        {start : '2017-05-06 14:00', end : '2017-05-07 10:00', address : '马蹄山至尊宝', rmb : +5800},

        {start : '2017-09-02 15:00', end : '2017-09-03 01:00', address : '五和公爵', rmb : -380},

        {start : '2017-09-09 21:00', end : '2017-09-10 04:00', address : '五和公爵', rmb : +800},
        {start : '2017-09-10 13:00', end : '2017-09-10 22:00', address : '五和公爵', rmb : -370},

        {start : '2017-09-15 23:30', end : '2017-09-16 08:00', address : '岗头市场', rmb : -100},
        {start : '2017-09-16 19:00', end : '2017-09-17 02:00', address : '五和公爵', rmb : +90},
        {start : '2017-09-16 19:00', end : '2017-09-17 02:00', address : '五和公爵', rmb : +1710},

        {start : '2017-10-06 19:00', end : '2017-10-07 03:00', address : '五和公爵', rmb : -200},

        {start : '2017-10-14 14:00', end : '2017-10-15 03:00', address : '五和公爵', rmb : +100},
        {start : '2017-10-14 14:00', end : '2017-10-14 20:00', address : '湖贝', rmb : +300},

        {start : '2017-10-21 14:00', end : '2017-10-22 03:00', address : '岗头红海', rmb : +200},

        {start : '2017-10-28 13:00', end : '2017-10-29 03:00', address : '五和公爵', rmb : -5},

        {start : '2017-11-18 20:00', end : '2017-11-19 09:00', address : '岗头市场', rmb : +900},
        {start : '2017-11-19 17:00', end : '2017-11-19 23:00', address : '瓦窑排', rmb : -210},

        {start : '2017-12-02 15:00', end : '2017-12-03 06:00', address : '五和公爵', rmb : -1700},
        {start : '2017-12-09 14:00', end : '2017-12-09 22:00', address : '五和公爵', rmb : +800},
        
    ];

    var day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    var convertDate = function(date){
        var tmp = date.split(' ');
        var tmp1 = tmp[0].split('-');
        var dt = tmp1[1] + '/' + tmp1[2] + '/' + tmp1[0] + ' ' + tmp[1]
        return new Date(dt);
    }

    var getTimeFormat = function(time) {

        var zero = function(i){
            return i == 0 ? '00' : (i > 0 && i < 10) ? '0' + i : i;
        }
        
        var h = parseInt(time / 3600);
        var m = parseInt(time / 60 % 60);
        return zero(h) + '小时' + zero(m) + '分钟';
    }

    var totalTime = 0;
    var totalRmb = 0;
    angular.forEach(data, function(i){
        var startDate = convertDate(i.start);
        var endDate = convertDate(i.end);

        var time = (endDate - startDate) / 1000;

        totalTime += time;
        totalRmb += i.rmb;

        i.time = time;
        i.duration = getTimeFormat(time);
        i.startDay = day[startDate.getDay()];
        i.endDay = day[endDate.getDay()];
    });

    data.push({address : '总计', duration : getTimeFormat(totalTime),rmb : totalRmb})

    $scope.items = data;
}]);