import React, { useEffect, useState, useReducer } from "react";

import {useTranslation} from 'react-i18next';

const MailReplyRecipient = props => {

    const [recipients, dispatch] = useReducer((recipients, { type, value }) => {
        switch (type) {
            case "add":
                return [...recipients, value];

            case "add_recipient":
                recipients = { ... recipients};
                recipients[value].push({"name" : "", "email" : ""});
                return recipients;

            case "remove_recipient":
                recipients = { ... recipients};
                recipients[value.recipient] = recipients[value.recipient].filter((_, index) => index !== value.index);
                return recipients;

            case "set":
                return value;

            case 'set_attribute':
                recipients = { ... recipients};
                recipients[value.value.type][value.value.index][value.value.field] = value.value.value;
                return recipients;
                break;

            case "cleanup":
                return [];
            case "remove":
                return recipients.filter((_, index) => index !== value);
            default:
                return recipients;
        }
    }, []);

    const setReciepints = (type, value) => {
        dispatch({'type' : type, "value" : value});
        props.setRecipients(recipients);
    }

    useEffect(() => {
        dispatch({"type" : "set", "value" : props.recipients});
        props.setRecipients(props.recipients);
    },[props.recipients]);

    const { t, i18n } = useTranslation('mail_chat');
    
    return <div className="row">

        {!props.readOnly && <div className="col-12 text-secondary font-weight-bold fs13 pb-1">{t('r.recipients')} <i className="material-icons settings text-muted" onClick={(e) => setReciepints("add_recipient","reply")} style={{fontSize: "20px"}}>add</i> Cc <i className="material-icons settings text-muted" onClick={(e) => setReciepints("add_recipient","cc")} style={{fontSize: "20px"}}>add</i> Bcc <i onClick={(e) => setReciepints("add_recipient","bcc")} className="material-icons settings text-muted" style={{fontSize: "20px"}}>add</i></div>}

        <div className="col-6">
            {recipients.reply && recipients.reply.map((mail, index) => (
                <div className="form-row pb-1">
                    <div className="col-1 text-secondary fs13 pt-1">{t('r.to')}:</div>
                    <div className="col-5">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text" ><i className="material-icons me-0">mail_outline</i></span>
                            <input disabled={props.readOnly} type="text" className="form-control form-control-sm" placeholder="E-mail" onChange={(e) => setReciepints("set_attribute",{value : {value: e.target.value, type: "reply", index: index, "field" : "email"}})} value={mail.email} placeholder={t('r.email')} aria-describedby="validationTooltipUsernamePrepend" />
                        </div>
                    </div>
                    <div className="col-5"><input type="text" disabled={props.readOnly} placeholder={t('r.name')} onChange={(e) => setReciepints("set_attribute",{value : {value: e.target.value, type: "reply", index: index, "field" : "name"}})} value={mail.name} className="form-control form-control-sm" /></div>
                    {!props.readOnly && index > 0 && <div className="col"><i className="material-icons settings text-muted" onClick={(e) => setReciepints("remove_recipient",{"recipient":"reply", "index" : index})}>remove</i></div>}
                </div>
            ))}
        </div>

        <div className="col-6">
        {recipients.cc && recipients.cc.map((mail, index) => (
            <div className="form-row pb-1">
                <div className="col-1 text-secondary fs13 pt-1">Cc:</div>
                <div className="col-5">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" ><i className="material-icons me-0">mail_outline</i></span>
                        <input type="text" disabled={props.readOnly} className="form-control form-control-sm" placeholder="E-mail" onChange={(e) => setReciepints("set_attribute",{value : {value: e.target.value, type: "cc", index: index, "field" : "email"}})} value={mail.email} placeholder={t('r.email')} aria-describedby="validationTooltipUsernamePrepend" />
                    </div>
                </div>
                <div className="col-5"><input disabled={props.readOnly} type="text" placeholder={t('r.name')} onChange={(e) => setReciepints("set_attribute",{value : {value: e.target.value, type: "cc", index: index, "field" : "name"}})} value={mail.name} className="form-control form-control-sm" /></div>
                {!props.readOnly && <div className="col"><i className="material-icons settings text-muted" onClick={(e) => setReciepints("remove_recipient",{"recipient":"cc", "index" : index})}>remove</i></div>}
            </div>
        ))}
        </div>

        <div className="col-6">
        {recipients.bcc && recipients.bcc.map((mail, index) => (
            <div className="form-row pb-1">
                <div className="col-1 text-secondary fs13 pt-1">Bcc:</div>
                <div className="col-5">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" ><i className="material-icons me-0">mail_outline</i></span>
                        <input type="text" disabled={props.readOnly} className="form-control form-control-sm" placeholder="E-mail" onChange={(e) => setReciepints("set_attribute",{value : {value: e.target.value, type: "bcc", index: index, "field" : "email"}})} value={mail.email} placeholder={t('r.email')} aria-describedby="validationTooltipUsernamePrepend" />
                    </div>
                </div>
                <div className="col-5"><input type="text" disabled={props.readOnly} placeholder={t('r.name')} onChange={(e) => setReciepints("set_attribute",{value : {value: e.target.value, type: "bcc", index: index, "field" : "name"}})} value={mail.name} className="form-control form-control-sm" /></div>
                {!props.readOnly && <div className="col"><i className="material-icons settings text-muted" onClick={(e) => setReciepints("remove_recipient",{"recipient":"bcc", "index" : index})}>remove</i></div>}
            </div>
        ))}
        </div>


    </div>
}

export default React.memo(MailReplyRecipient);