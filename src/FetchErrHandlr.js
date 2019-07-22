/*
    serves as a generic error handler for all my wacky fetch functions
    It's small but it's also DRY
*/

function ErrHandlr(error)
{
    console.log('Something went wrong: ' + error);
}

export default ErrHandlr;