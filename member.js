function skillMember() {
    return {
        restrict: 'E',
        name: 'skillMember',
        template: 'Skill: <input type="text" ng-model="memberSkill" />{{memberSkill}}',
        scope: {
            memberSkill: '=memberSkill'
        }
    };
}