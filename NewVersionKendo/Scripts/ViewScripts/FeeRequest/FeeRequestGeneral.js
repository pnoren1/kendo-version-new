﻿$(document).ready(function () {

    //MojFind("#btnFeeRequestFinalApproval").click(function () {
    //    var url = "FeeRequest/FeeRequestFinalApproval";
    //    Moj.confirm(Resources.Strings.FeeRequestFinalApprovalAlert, function () {
    //        $.post(url, function (data) {
    //            
    //            if (data.Errors != undefined) {
    //                Moj.showErrorMessage(data.Errors);
    //            } else if (data.Messages != undefined) {
    //                Moj.showMessage(data.Messages, function () {
    //                    Moj.closeTab('#tabStrip', 'close_FeeRequest_Tab_' + MojFind("#FeeRequestId").val()); //סגירת טאב בקשה
    //                }, Resources.Strings.Message, MessageType.Success);
    //                //PDO.onRefresh(EntityContentTypeEnum.FeeRequestShiftsCalls);
    //            }
    //        });
    //    });
    //    return false;
    //});

    MojFind("#btnCancelFeeRequestGeneral").click(function () {
        MojFind("#lnk_FeeRequestGeneral").click();
    });
}),



onSuccessSaveFeeRequestGeneralDetails = function (data) {
    if (data.ActionResult != null) {
        if (data.ActionResult.Error != undefined && data.ActionResult.Error.length > 0) {
            Moj.showErrorMessage(data.ActionResult.Error, function () {
                return false;
            });
        }
        else
        {
            if (data.ActionResult.IsChange) {
                switch (data.ActionResult.OpenTabName)
                {
                    case "FeeRequestShiftsDetails":
                        {
                            PDO.onRefresh(EntityContentTypeEnum.FeeRequestShiftsCalls);
                            break;
                        }
                    case "FeeRequestHearingDetails":
                        {
                            PDO.onRefresh(EntityContentTypeEnum.FeeRequestHearing);
                            break;
                        }
                }
            }
        }
    }


};