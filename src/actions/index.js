export const REQUEST_SCHEDULE = "REQUEST_SCHEDULE"
export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE"

export function requestSchedule(season = '2019') {
    return async (dispatch) => {
        dispatch({ type: REQUEST_SCHEDULE });

        let response = await fetch(`https://api.overwatchleague.com/schedule?expand=team.content&locale=en_US&season=${season}&separateStagePlayoffsWeek=true`);
        let json = await response.json();

        dispatch({ type: RECEIVE_SCHEDULE, schedule: json.data.stages });
    }
}