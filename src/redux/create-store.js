
import Redux, {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import { isFSA } from 'flux-standard-action';

let logger = store =>  next => action => {
    console.group(action.type);
    let result = next(action);
    console.groupEnd(action.type);
    return result;
};

export const createStoreWithMiddleware = compose(
   applyMiddleware(asyncMiddleware, logger)
)(createStore);
function isPromise (val) {
    return val && typeof val.then === 'function';
}

//()=>(dispatch, getState)=>async()=>{}
//()=>(dispatch, getState)=>{}
//()=>async(dispatch,getState)=>{}

function asyncMiddleware ({dispatch, getState}){
    return next => action =>{
        if (!isFSA(action)) {
            if (typeof action === 'function') {
                if(isPromise(action)){
                    action.then(dispatch,getState);
                }else{
                    return action(dispatch, getState);
                }
            }
            return next(action);
        }else{
            if(typeof action.payload === 'function'){
                var res = action.payload(dispatch, getState);
                if (isPromise(res)) {
                    res.then(
                        (result) => {
                            dispatch({...action, payload: result});
                        },
                        (error) => {
                            dispatch({...action, payload: error, error: true});
                        }
                    );
                }else{
                    dispatch({...action, payload: res});
                }
            }else{
                next(action);
            }
        }

    };
}