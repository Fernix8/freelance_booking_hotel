interface IDissmissModalReduxData {
    hasDismissedModal: boolean;
}

interface IDismissModalReduxAction {
    type: string;
    data: IDissmissModalReduxData;
}
