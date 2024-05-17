var FormBuilderFields = {
    text: {
        idGroup: 1,
        icon: "icon-textbox"
    },
    number: {
        idGroup: 1,
        icon: "icon-number",
        hasNumber: true
    },
    multiline: {
        idGroup: 1,
        icon: "icon-multiline"
    },
    email: {
        idGroup: 1,
        icon: "icon-email"
    },
    telephone: {
        idGroup: 1,
        icon: "icon-telephone"
    },
    mobile: {
        idGroup: 1,
        icon: "icon-mobile"
    },
    date: {
        idGroup: 1,
        icon: "icon-date"
    },
    time: {
        idGroup: 1,
        icon: "icon-time"
    },
    list: {
        idGroup: 1,
        icon: "icon-dropdown",
        hasList: true,
        hasNumber: true
    },
    checkbox: {
        idGroup: 1,
        icon: "icon-checkbox",
        hasList: true,
        hasNumber: true
    },
    radio: {
        idGroup: 1,
        icon: "icon-radio",
        hasList: true,
        hasNumber: true
    },
    toggle: {
        idGroup: 1,
        icon: "icon-toggleoff",
        hasNumber: true
    },
    picture: {
        idGroup: 1,
        icon: "icon-picture",
        hasList: true,
        hasNumber: true
    },
    rangeslider: {
        idGroup: 1,
        icon: "icon-slider",
        hasNumber: true
    },
    website: {
        idGroup: 1,
        icon: "icon-website"
    },
    password: {
        idGroup: 1,
        icon: "icon-password"
    },
    label: {
        idGroup: 1,
        icon: "icon-label"
    },
    attachment: {
        idGroup: 1,
        icon: "icon-attachment"
    },
    section: {
        idGroup: 1,
        icon: "icon-panel"
    },
    page: {
        idGroup: 1,
        icon: "icon-page"
    },
    user: {
        idGroup: 2,
        icon: "icon-user"
    },
    customer: {
        idGroup: 2,
        icon: "icon-customer"
    },
    factor: {
        idGroup: 2,
        icon: "icon-factor",
        hasNumber: true
    },
    product: {
        idGroup: 2,
        icon: "icon-product",
        hasNumber: true
    },
    sales: {
        idGroup: 2,
        icon: "icon-donate",
        hasNumber: true
    },
    formfield: {
        idGroup: 3,
        icon: "icon-list-alt",
        preview: {
            img: "formfield.gif",
            width: 700,
            height: 402,
            tipfa: "با استفاده از «فیلد فرم» فرمها را به هم متصل کنید و اطلاعات ثبت شده در فرمهای قبلی را در فرم جدید انتخاب کنید.",
            tipen: "Connect the forms using Field Form and select the information recorded in the previous forms in the new form."
        }
    },
    editor: {
        idGroup: 3,
        icon: "icon-editor",
        preview: {
            img: "editor.gif",
            width: 526,
            height: 282
        }
    },
    formule: {
        idGroup: 3,
        icon: "icon-formule",
        hasNumber: true,
        preview: {
            img: "formule.gif",
            width: 700,
            height: 600
        }
    },
    signature: {
        idGroup: 3,
        icon: "icon-signature",
        preview: {
            img: "signature.gif",
            width: 432,
            height: 250
        }
    },
    dependList: {
        idGroup: 3,
        icon: "icon-dependlist",
        hasList: true,
        hasNumber: true,
        preview: {
            img: "dependList.gif",
            width: 440,
            height: 384
        }
    },
    rating: {
        idGroup: 3,
        icon: "icon-rating",
        hasNumber: true,
        preview: {
            img: "rating.gif",
            width: 148,
            height: 148
        }
    },
    smileyrating: {
        idGroup: 3,
        icon: "icon-smiley",
        hasNumber: true,
        preview: {
            img: "smileyRating.gif",
            width: 374,
            height: 342
        }
    },
    scalerating: {
        idGroup: 3,
        icon: "icon-ellipsis-horizontal",
        hasNumber: true,
        preview: {
            img: "scaleRating.gif",
            width: 470,
            height: 270
        }
    },
    multimedia: {
        idGroup: 3,
        icon: "icon-multimedia",
        preview: {
            img: "multimedia.gif",
            width: 456,
            height: 220
        }
    },
    map: {
        idGroup: 3,
        icon: "icon-map",
        preview: {
            img: "map.gif",
            width: 634,
            height: 350
        }
    },
    matrix: {
        idGroup: 3,
        icon: "icon-matrix",
        hasList: true,
        hasNumber: true,
        preview: {
            img: "matrix.gif",
            width: 616,
            height: 256
        }
    },
    booking: {
        idGroup: 3,
        icon: "icon-calendar",
        hasNumber: true,
        preview: {
            img: "booking.gif",
            width: 718,
            height: 434
        }
    },
    termofuse: {
        idGroup: 3,
        icon: "icon-termofuse",
        preview: {
            img: "termOfUse.gif",
            width: 492,
            height: 260
        }
    },
    verifySms: {
        idGroup: 4,
        icon: "icon-mobile"
    }
};
var FormBuilderFieldGroups = [{
    id: 1,
    type: "groupBasic",
}, {
    id: 2,
    type: "groupSystem",
}, {
    id: 3,
    type: "groupAdvance",
}];
var FormBuilderPrimaryFields = [{
    id: "primary_id",
    title: "submissionId",
    icon: "icon-hashtag"
}, {
    id: "primary_formattedId",
    title: "formattedId",
    icon: "icon-hashtag"
}, {
    id: "primary_creatorId",
    title: "creator",
    icon: "icon-user"
}, {
    id: "primary_createDate",
    title: "createDate",
    icon: "icon-date"
}, {
    id: "primary_editorId",
    title: "editor",
    icon: "icon-user"
}, {
    id: "primary_editDate",
    title: "editDate",
    icon: "icon-date"
}, {
    id: "primary_custCode",
    title: "customerMain",
    icon: "icon-customer"
}, {
    id: "primary_urlReferrer",
    title: "urlReferrer",
    icon: "icon-code"
}, {
    id: "primary_browser",
    title: "browser",
    icon: "icon-browser"
}, {
    id: "primary_ip",
    title: "ip",
    icon: "icon-globe"
}, {
    id: "primary_coordinate",
    title: "location",
    icon: "icon-map"
}, {
    id: "primary_paymentStatus",
    title: "paymentStatus",
    icon: "icon-donate"
}];
function createInsertFieldUI(b, a) {
    FormBuilderFields[b].insert = a
}
function createSettingFieldUI(b, a) {
    FormBuilderFields[b].setting = a
}
function CreateInsertUI(D) {
    var v = this;
    var I = {};
    var a = {};
    var k = false;
    var E = false;
    var o = false;
    var w = false;
    var c = false;
    var n = 0;
    var e = "";
    var F = FormUtility.randomId();
    v.sectionGroupCounter = 0;
    var j = {
        footerClass: "",
        onChangePage: function() {},
        onSaveForm: [],
        onBeforeSaveForm: function() {},
        extraParamForSave: {}
    };
    D = $.extend(true, j, D || {});
    var A = $("<div>");
    var y = $("<div>");
    var z = $("<div>");
    var B = $("<div>");
    var x = $("<div>").addClass("ravesh-form-loading-bar").appendTo(y);
    var H = function(X) {
        var Z = this;
        Z.data = X;
        var Y = function(aa) {
            var ab = ["top", "left", "right"];
            aa.addClass("ravesh-form-builder titles-" + ab[X.titlePosition]);
            aa.attr("dir", X.lang == "fa" ? "rtl" : "ltr");
            return aa
        };
        Y(A).addClass("frm-header").css({
            direction: X.lang == "fa" ? "rtl" : "ltr"
        });
        Y(y).addClass("frm-container");
        Y(z).addClass("frm-footer").css({
            overflow: "hidden",
            padding: 15
        });
        Y(B).addClass("frm-toolbar");
        Z.addPage = function(aa) {
            A.append(aa.header);
            y.append(aa.container);
            z.append(aa.footer)
        }
    };
    var J = function(Z, aa, Y) {
        var ab = this;
        ab.data = Y;
        ab.index = Z;
        var X = function() {
            var ak = $("<div>").addClass("form-design-page insert-mode");
            var ap = s("wizardValidationType");
            ab.header = $("<div>");
            if (aa > 0) {
                var an = $("<div>").addClass("title-wizard").text(Y.title);
                var aj = $("<div>").addClass("number-wizard").text(FormUtility.numberLocalize(Z + 1, a.form.lang));
                var ac = $("<div>").addClass("box-wizard");
                ab.header.addClass("form-design-page-step style-1" + (Z == 0 ? " active" : "") + (ap == 0 ? " allow-click" : "")).append(aj, ac, an);
                if (ap == 0) {
                    ab.header.click(function() {
                        ab.setActivePage(ab)
                    })
                }
            }
            ab.content = $("<div>").addClass("form-design-page-content");
            var ad = $("<div>").addClass("form-design-page-footer " + D.footerClass);
            var af = $("<div>").addClass("form-design-page-footer-content");
            ad.append(af);
            var ag = null;
            var ae = null;
            var ah = null;
            if (aa == Z) {
                var am = $("<span>").append(k ? Y.property.edit : Y.property.submit);
                var al = $("<div>").addClass("spinner small white").css({
                    position: "absolute",
                    left: "calc(50% - 10px)",
                    visibility: "hidden"
                });
                ah = $("<button>").addClass("ravesh-button submit").css({
                    "min-width": 100
                }).append(am, al);
                var ai = false;
                var ao = function(ar, aq) {
                    ar.css("visibility", aq ? "visible" : "hidden")
                };
                af.append(ah);
                ah.click(function() {
                    if (ai) {
                        return false
                    }
                    if (s("wizardValidationType") != 0) {
                        var aq = v.getData();
                        if (!b(aq, ab)) {
                            return false
                        }
                    }
                    ai = true;
                    ao(am, false);
                    ao(al, true);
                    O(function() {
                        ai = false;
                        ao(am, true);
                        ao(al, false)
                    });
                    return false
                })
            }
            if (aa > 0) {
                if (aa != Z) {
                    ag = $("<button>").addClass("ravesh-button submit").css({
                        "min-width": 100
                    }).text(Y.property.next);
                    af.append(ag);
                    ag.click(function() {
                        ab.nextPage();
                        return false
                    })
                }
                if (Z != 0) {
                    ae = $("<button>").addClass("ravesh-button navigator").css({
                        "min-width": 100
                    }).text(Y.property.back);
                    af.append(ae);
                    ae.click(function() {
                        ab.prevPage();
                        return false
                    })
                }
            }
            ak.bind("dragover", function(aq) {
                aq.preventDefault()
            });
            ak.bind("drop", function(aq) {
                aq.preventDefault()
            });
            ab.toggleNextButton = function(aq) {
                if (ag) {
                    ag.toggle(aq)
                }
                if (ah) {
                    ah.toggle(aq)
                }
            }
            ;
            ab.toggleBackButton = function(aq) {
                if (ae) {
                    ae.toggle(aq)
                }
            }
            ;
            ab.setDisableNextButton = function(aq) {
                if (ag) {
                    ag.attr("disabled", aq)
                }
                if (ah) {
                    ah.attr("disabled", aq)
                }
            }
            ;
            ab.setDisableBackButton = function(aq) {
                if (ae) {
                    ae.attr("disabled", aq)
                }
            }
            ;
            ab.container = ak.append(ab.content);
            ab.footer = ad
        };
        X();
        ab.hide = function() {
            ab.container.hide();
            ab.footer.hide()
        }
        ;
        ab.show = function() {
            ab.container.show();
            ab.footer.show()
        }
        ;
        ab.setActivePage = function(ac) {
            $.each(I.pages, function(ad, ae) {
                ae.hide();
                ae.header.removeClass("active")
            });
            ac.show();
            ac.header.addClass("active");
            ac.header[0].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            D.onChangePage(ac.index, aa)
        }
        ;
        ab.nextPage = function() {
            if (aa == Z) {
                return false
            }
            if (s("wizardValidationType") != 0) {
                var ac = v.getData();
                if (!b(ac, ab)) {
                    return false
                }
            }
            var ae = N(Y.id);
            var ad = I.pages[Z + 1];
            if (ae) {
                var af = $.grep(I.pages, function(ag) {
                    return ag.data.id == ae
                });
                if (af.length > 0) {
                    ad = af[0]
                }
            }
            ab.setActivePage(ad);
            ad.backPage = ab
        }
        ;
        ab.prevPage = function() {
            if (ab.backPage) {
                ab.setActivePage(ab.backPage)
            } else {
                ab.setActivePage(I.pages[Z - 1])
            }
        }
        ;
        ab.addSection = function(ac) {
            ab.content.append(ac.container)
        }
    };
    var K = function(Z, Y) {
        var aa = this;
        aa.data = Y;
        aa.pageUI = Z;
        Y.group = v.sectionGroupCounter++;
        var X = function() {
            var ae = $("<div>").addClass("form-design-section");
            var af = $("<div>").addClass("form-design-section-wrapper");
            aa.wrapper = $("<div>").css("transition", "opacity 300ms").append(af);
            ae.append(aa.wrapper);
            if (I.form.data.type == "classic") {
                af.addClass("style-" + Y.property.style)
            }
            if (!Y.property.hiddenTitle && I.form.data.type == "classic") {
                var ac = $("<div>").addClass("form-design-section-head");
                var ad = $("<div>").addClass("title").text(Y.title);
                ac.append(ad);
                af.append(ac)
            }
            var ab = $("<div>").addClass("form-design-section-content");
            af.append(ab);
            if (Y.isDuplicate || Y.property.allowDuplicate) {
                aa.duplicateCoverButton = $("<a>").attr("href", "#").addClass("add-new-section ravesh-link").addClass("style-" + Y.property.style).text(r("insert", "addField").replace(/\{0\}/g, Y.title)).appendTo(aa.wrapper).click(function() {
                    if (Y.property.disable) {
                        return false
                    }
                    var ag = aa.duplicate();
                    ag.wrapper.css("opacity", 0).hide().slideDown().delay(200).queue(function(ah) {
                        $(this).css("opacity", 1);
                        ah()
                    });
                    ag.wrapper[0].scrollIntoView();
                    V();
                    N();
                    C();
                    aa.toggleDuplicateButtons();
                    return false
                });
                aa.deleteSectionButton = $("<a>").attr("href", "#").css({
                    "margin-right": 5,
                    "margin-left": 5
                }).addClass("delete-section ravesh-link").addClass("style-" + Y.property.style).text(r("insert", "removeField").replace(/\{0\}/g, Y.title)).appendTo(aa.wrapper).click(function() {
                    if (Y.property.disable) {
                        return false
                    }
                    aa.wrapper.css("opacity", 0).delay(500).slideUp(function() {
                        aa.content.remove()
                    });
                    var ah = $.grep(I.fields, function(ai) {
                        return ai.sectionUI == aa
                    });
                    for (var ag in ah) {
                        I.fields.splice($.inArray(ah[ag], I.fields), 1)
                    }
                    I.sections.splice($.inArray(aa, I.sections), 1);
                    N();
                    C();
                    aa.toggleDuplicateButtons();
                    return false
                });
                aa.toggleDuplicateButtons = function() {
                    var ag = $.grep(I.sections, function(ah) {
                        return ah.data.id == Y.id
                    });
                    ag[0].deleteSectionButton.toggle(ag.length > 1)
                }
            }
            aa.content = ab;
            aa.container = ae
        };
        X();
        aa.duplicate = function() {
            var ab = $.extend(true, {
                isDuplicate: true
            }, Y);
            var ac = new K(Z,ab);
            ac.container = aa.container;
            aa.container.append(ac.wrapper);
            I.sections.push(ac);
            aa.toggleDuplicateButtons();
            var ad = $.grep(I.fields, function(ae) {
                return ae.sectionUI == aa && !ae.data.isDuplicate
            }).sort(function(ae, af) {
                return ae.data.order - af.data.order
            });
            if (Y.property.randomOrderFields) {
                ad = FormUtility.shuffleArray(ad)
            }
            $.each(ad, function(af, ag) {
                var ae = new G(ac,$.extend(true, {}, ag.data));
                ac.addField(ae);
                I.fields.push(ae)
            });
            return ac
        }
        ;
        aa.toggle = function(ab) {
            if (c) {
                return false
            }
            Y.property.hidden = !ab;
            $.each(v.getData().fields, function(ac, ad) {
                if (ad.sectionUI == aa) {
                    ad.toggle(ab)
                }
            });
            aa.wrapper.toggle(ab);
            aa.container.toggle(ab)
        }
        ;
        aa.setDisable = function(ab) {
            Y.property.disable = ab;
            $.each(v.getData().fields, function(ac, ad) {
                if (ad.sectionUI == aa) {
                    ad.setDisable(ab)
                }
            })
        }
        ;
        aa.setDisable(Y.property.disable || false);
        aa.toggle(!(Y.property.hidden || false));
        aa.addField = function(ab) {
            aa.content.append(ab.getUI)
        }
    };
    var G = function(Z, Y) {
        var ab = this;
        ab.data = Y;
        ab.sectionUI = Z;
        var X = function() {
            var ai = $("<div>").addClass("form-design-field form-field-" + Y.type);
            aa(ai, Z.data.column, Y.column);
            var ac = $("<div>").addClass("content");
            if (!Y.property.hiddenTitle) {
                var am = $("<span>").addClass("required").css("color", "red").text(" * ");
                var ao = $("<span>").addClass("title-str").text(Y.title);
                if (Y.property.richTitle) {
                    ao.html(Y.property.richTitle)
                }
                var an = $("<div>").addClass("title").append(am, ao);
                if (Y.detail != "" && Y.property.detailTip) {
                    var aj = $("<span>").addClass("help-icon");
                    an.append(aj);
                    W(aj, Y.detail)
                }
                ac.append(an);
                ab.setTitle = function(at, ar) {
                    if (ar) {
                        ao.html(at)
                    } else {
                        ao.text(at)
                    }
                }
            } else {
                ai.addClass("hidden-title")
            }
            if (Y.property.required) {
                ai.addClass("required")
            }
            var ak = $("<div>");
            var aq = $("<div>").addClass("wrapper").append(ak);
            if (Y.detail != "" && !Y.property.detailTip) {
                aq.append($("<div>").addClass("detail").text(Y.detail))
            }
            ac.append(aq);
            var af = FormBuilderFields[Y.type];
            if (af.insert) {
                ab.insertUI = new (af.insert)(Y);
                ab.insertUI.toggleError = function(ar, at) {
                    ac.toggleClass("has-error-tip", ar);
                    aq.find(".ravesh-error-tip").remove();
                    if (ar) {
                        var au = $("<div>").addClass("ravesh-error-tip").text(FormUtility.numberLocalize(at));
                        ak.after(au.fadeIn());
                        au.click(function() {
                            au.remove();
                            ac.removeClass("has-error-tip")
                        })
                    }
                }
                ;
                ab.insertUI.formType = I.form.data.type;
                ab.insertUI.nextPage = al;
                ab.insertUI.isApp = w;
                ab.insertUI.getFrmRes = r;
                ab.insertUI.getFrmSetting = s;
                ab.insertUI.onChange = function() {
                    ap();
                    N();
                    C();
                    if (v.needTryOnChange) {
                        v.needTryOnChange = false;
                        C()
                    }
                }
                ;
                ab.insertUI.runRule = function() {
                    N()
                }
                ;
                ab.insertUI.setFieldValue = function(ar) {
                    P(ab, ar)
                }
                ;
                ak.append(ab.insertUI.getUI());
                if (Y.property.width) {
                    var ah = {
                        large: "100%",
                        medium: "300px",
                        small: "150px"
                    };
                    if (ah[Y.property.width] != null) {
                        ab.insertUI.setWidth(Y.property.width, ah[Y.property.width])
                    } else {
                        ab.insertUI.setWidth("custom", Y.property.width)
                    }
                }
                ab.onHide = function(at, ar) {
                    if (ab.insertUI.onHide) {
                        ab.insertUI.onHide(at, ar)
                    }
                }
                ;
                ab.toggle = function(at) {
                    if (c) {
                        return false
                    }
                    var ar = !at != Y.property.hidden;
                    Y.property.hidden = !at;
                    if (at) {
                        ai.css("display", "inline-block")
                    } else {
                        ai.css("display", "none")
                    }
                    if (at) {
                        aq.css("display", "block")
                    } else {
                        aq.css("display", "none")
                    }
                    ab.onHide(!at, ar);
                    if (ar) {
                        v.needTryOnChange = true
                    }
                }
                ;
                var ag = ab.insertUI.setDisable;
                ab.setDisable = function(ar) {
                    if (Y.property.readOnly && !Y.property.disable) {
                        return false
                    }
                    Y.property.disable = ar;
                    if (ag) {
                        ag(ar)
                    }
                }
                ;
                ab.setDisable(Y.property.disable || false);
                ab.setReadOnly = function(ar) {
                    if (ag && ar) {
                        ab.setDisable(true);
                        Y.property.readOnly = true
                    }
                }
                ;
                ab.toggle(!(Y.property.hidden || false));
                function ap() {
                    if (!ab.confirmButton) {
                        return false
                    }
                    if (ab.sectionUI.pageUI.index == I.pages.length - 1) {
                        return false
                    }
                    var ar = ab.insertUI.getValue();
                    if (ar.constructor === Array) {
                        ab.confirmButton.toggle(ar.length > 0)
                    } else {
                        ab.confirmButton.toggle(ar.value != "")
                    }
                }
                function al() {
                    if (ab.insertUI.formType == "line") {
                        Z.pageUI.nextPage()
                    }
                }
                if (ab.insertUI.formType == "line" && ab.insertUI.needConfirm) {
                    ab.confirmButton = $("<button>").css({
                        padding: 5,
                        margin: 0,
                        "min-width": 100,
                        "margin-top": 10
                    }).text(frmRes.insert.ok).addClass("ravesh-button submit confirm").appendTo($("<div>").appendTo(ak)).click(function() {
                        al();
                        return false
                    }).hide()
                }
            }
            if (Y.isDuplicate) {
                var ad = $("<a>").attr("href", "#").addClass("delete-field ravesh-link").text(r("insert", "removeField").replace(/\{0\}/g, Y.title));
                aq.append(ad);
                ad.click(function() {
                    if (Y.property.disable) {
                        return false
                    }
                    ab.wrapper.css("opacity", 0).delay(500).slideUp(function() {
                        ab.wrapper.remove()
                    });
                    I.fields.splice($.inArray(ab, I.fields), 1);
                    N();
                    C();
                    return false
                })
            } else {
                if (Y.property.allowDuplicate) {
                    var ae = $("<a>").attr("href", "#").addClass("add-new ravesh-link").text(r("insert", "addField").replace(/\{0\}/g, Y.title));
                    aq.append(ae);
                    ae.click(function() {
                        if (Y.property.disable) {
                            return false
                        }
                        ab.duplicate();
                        V();
                        N();
                        C();
                        return false
                    })
                }
            }
            ab.content = ac;
            ab.wrapper = aq;
            ab.container = ai.append(ac)
        };
        X();
        function aa(af, ah, ag) {
            var ae = {
                c12: "col-1-2",
                c14: "col-1-4",
                c23: "col-2-3",
                c13: "col-1-3",
                c34: "col-3-4",
                cfull: "col-full",
                c15: "col-1-5",
                c25: "col-2-5",
                c35: "col-3-5",
                c45: "col-4-5",
                c16: "col-1-6",
                c56: "col-5-6"
            };
            var ac = "";
            if (ah == 6) {
                if (ag == 5) {
                    ac = ae.c56
                } else {
                    if (ag == 4) {
                        ac = ae.c23
                    } else {
                        if (ag == 3) {
                            ac = ae.c12
                        } else {
                            if (ag == 2) {
                                ac = ae.c13
                            } else {
                                if (ag == 1) {
                                    ac = ae.c16
                                }
                            }
                        }
                    }
                }
            } else {
                if (ah == 5) {
                    if (ag == 4) {
                        ac = ae.c45
                    } else {
                        if (ag == 3) {
                            ac = ae.c35
                        } else {
                            if (ag == 2) {
                                ac = ae.c25
                            } else {
                                if (ag == 1) {
                                    ac = ae.c15
                                }
                            }
                        }
                    }
                } else {
                    if (ah == 4) {
                        if (ag == 3) {
                            ac = ae.c34
                        } else {
                            if (ag == 2) {
                                ac = ae.c12
                            } else {
                                if (ag == 1) {
                                    ac = ae.c14
                                }
                            }
                        }
                    } else {
                        if (ah == 3) {
                            if (ag == 2) {
                                ac = ae.c23
                            } else {
                                if (ag == 1) {
                                    ac = ae.c13
                                }
                            }
                        } else {
                            if (ah == 2) {
                                if (ag == 1) {
                                    ac = ae.c12
                                }
                            }
                        }
                    }
                }
            }
            if (ac == "") {
                ac = ae.cfull
            }
            for (var ad in ae) {
                af.removeClass(ae[ad])
            }
            af.addClass(ac)
        }
        ab.duplicate = function() {
            var ac = new G(Z,$.extend(true, {
                isDuplicate: true
            }, Y));
            ab.content.append(ac.wrapper);
            ac.content.css("opacity", 0).hide().slideDown().delay(200).queue(function(ad) {
                $(this).css("opacity", 1);
                ad()
            });
            I.fields.push(ac);
            return ac
        }
        ;
        ab.getUI = ab.container
    };
    v.setData = function(X, Y) {
        X = d(X);
        a = X;
        I = {
            form: {},
            pages: [],
            sections: [],
            fields: []
        };
        if (Y) {
            v.sectionGroupCounter = Y.maxGroupNumber + 1
        }
        I.form = new H(X.form);
        if (!t(X)) {
            return false
        }
        var Z = $.grep(X.fields, function(ab) {
            return ab.type == "page"
        }).sort(function(ab, ac) {
            return ab.order - ac.order
        });
        $.each(Z, function(ab, ad) {
            var ac = new J(ab,Z.length - 1,ad);
            I.form.addPage(ac);
            I.pages.push(ac);
            if (ab != 0) {
                ac.hide()
            }
            if (c) {
                ac.show();
                y.addClass("check-mode").css({
                    display: "block",
                    minHeight: "600px",
                    overflowY: "scroll"
                })
            }
            var ae = $.grep(X.fields, function(af) {
                return af.parentId == ad.id
            }).sort(function(af, ag) {
                return af.order - ag.order
            });
            $.each(ae, function(ag, ai) {
                var ah = new K(ac,ai);
                ac.addSection(ah);
                I.sections.push(ah);
                if (ah.toggleDuplicateButtons) {
                    ah.toggleDuplicateButtons()
                }
                var af = $.grep(X.fields, function(aj) {
                    return aj.parentId == ai.id
                }).sort(function(aj, ak) {
                    return aj.order - ak.order
                });
                if (!Y) {
                    if (ai.property.randomOrderFields) {
                        af = FormUtility.shuffleArray(af)
                    }
                    if (ai.property.randomShowFieldsCount && ai.property.randomShowFieldsCount != "" && ai.property.randomShowFieldsCount != "0") {
                        if (!ai.property.randomOrderFields) {
                            af = FormUtility.shuffleArray(af)
                        }
                        af = af.slice(0, parseInt(ai.property.randomShowFieldsCount));
                        if (!ai.property.randomOrderFields) {
                            af = af.sort(function(aj, ak) {
                                return aj.order - ak.order
                            })
                        }
                    }
                }
                $.each(af, function(aj, al) {
                    var am = false;
                    if (al.permission && al.permission == 2) {
                        if (k) {
                            am = true
                        } else {
                            return
                        }
                    }
                    var ak = new G(ah,al);
                    ak.setReadOnly(am);
                    ah.addField(ak);
                    I.fields.push(ak)
                })
            })
        });
        if (Y) {
            T(Y)
        } else {
            if (X.property && X.property.queryString && X.property.queryString.length > 0) {
                var aa = D.extraParamForSave.urlReferrer ? D.extraParamForSave.urlReferrer : document.location.href;
                U(X.property.queryString, aa)
            }
        }
        if (!X.property.showWizard) {
            A.hide()
        }
        if (RaveshUI.isMobile && o) {
            A.hide()
        }
        setTimeout(function() {
            N();
            C()
        }, 100)
    }
    ;
    v.setOnChangePage = function(X) {
        D.onChangePage = X
    }
    ;
    v.setOnSaveForm = function(X) {
        D.onSaveForm.push(X)
    }
    ;
    v.setOnBeforeSaveForm = function(X) {
        D.onBeforeSaveForm = X
    }
    ;
    v.setEditMode = function(X) {
        k = X
    }
    ;
    v.setIsApp = function(X) {
        w = X
    }
    ;
    v.setPreviewMode = function(Y, X) {
        E = Y;
        o = X || false
    }
    ;
    v.setCheckMode = function(X) {
        c = X
    }
    ;
    v.convertServerData = d;
    v.getHeader = function() {
        return I.pages && I.pages.length > 1 ? A : ""
    }
    ;
    v.getContainer = function() {
        return y
    }
    ;
    v.getFooter = function() {
        return z
    }
    ;
    v.getToolbar = function() {
        return B
    }
    ;
    v.getData = function() {
        return I
    }
    ;
    v.saveForm = O;
    v.setFormValueCustomer = S;
    v.setFieldValueAndTitle = Q;
    v.setFieldValueAuth = R;
    v.fixGroupFormValueParam = l;
    v.resizeForm = M;
    v.getFrmSetting = s;
    v.getCoordinate = p;
    v.setExtraParamForSave = function(X, Y) {
        D.extraParamForSave[X] = Y
    }
    ;
    v.getFieldsValue = q;
    v.setTheme = V;
    v.handlerError = u;
    function s(Y) {
        var X = a;
        if (!X.property) {
            X.property = {
                domain: $("#HFdomain").val(),
                serverUrl: "/",
                lang: X.form.lang,
                currentDate: FormUtility.getCurrentDate("en"),
                queryString: [],
                wizardValidationType: 0,
                showWizard: true
            }
        }
        if (!X.property.dir) {
            X.property.dir = X.property.lang == "fa" ? "rtl" : "ltr"
        }
        if ($("#HFFromSection").length > 0) {
            X.property.serverUrl = "/"
        }
        if (Y == "id") {
            return X.form.id
        }
        return X.property[Y]
    }
    function r(X, Y) {
        if (typeof frmRes != "undefined" && frmRes[X] != null && frmRes[X][Y] != null) {
            return frmRes[X][Y]
        }
        return ""
    }
    function d(X) {
        if (!X.lists) {
            return X
        }
        var Y = $.extend(true, {}, X);
        $.each(Y.fields, function(aa, ab) {
            $.each(ab.property, function(ac, ad) {
                if (ad.toString().toLowerCase() == "true") {
                    ab.property[ac] = true
                }
                if (ad.toString().toLowerCase() == "false") {
                    ab.property[ac] = false
                }
            });
            if (ab.property.listIds != null) {
                var Z = ab.property.listIds.split(",");
                ab.property.list = [];
                $.each(Z, function(ac, ad) {
                    var ae = $.grep(Y.lists, function(af) {
                        return af.id == parseInt(ad)
                    });
                    if (ae.length > 0) {
                        ab.property.list.push(ae[0])
                    }
                })
            }
        });
        delete Y.lists;
        return Y
    }
    function q(Z, aa) {
        var Y = v.getData();
        var ab = {
            data: new Array(),
            formData: new FormData()
        };
        var X = function(ad, ac) {
            ad.fieldId = ac.data.id;
            ad.groupNum = ac.sectionUI.data.group;
            ad.group = ad.fieldId + "_" + ad.groupNum;
            if (ad.value !== "") {
                ab.formData.append("field_" + ad.group, ad.value)
            }
        };
        $.each(Y.fields, function(ac, ad) {
            if (!ad.insertUI) {
                return
            }
            if (!Z && (ad.data.property.hidden || ad.sectionUI.data.property.hidden)) {
                return
            }
            if (!aa && ad.data.property.readOnly) {
                return
            }
            var ae = ad.insertUI.getValue();
            if (ae.constructor === Array) {
                if (ae.length == 0) {
                    ae = [{
                        title: "",
                        value: "",
                        number: 0
                    }]
                }
                $.each(ae, function(af, ag) {
                    X(ag, ad)
                })
            } else {
                X(ae, ad)
            }
            ab.data = ab.data.concat(ae)
        });
        return ab
    }
    function b(X, Z) {
        var aa = true;
        var ab = null;
        $.each(X.fields, function(ad, ae) {
            if (!ae.insertUI) {
                return
            }
            if (Z && ae.sectionUI.pageUI != Z) {
                return
            }
            ae.insertUI.toggleError(false);
            if (ae.data.property.hidden || ae.sectionUI.data.property.hidden || ae.data.property.readOnly) {
                return
            }
            var ag = ae.insertUI.getValue();
            var af = false;
            if (ae.data.property.required) {
                if (ag.constructor === Array) {
                    $.each(ag, function(ah, ai) {
                        if (ai.value != "") {
                            af = true
                        }
                    })
                } else {
                    af = ag.value != ""
                }
                if (!af) {
                    ae.insertUI.toggleError(true, r("insert", "required"))
                }
            } else {
                af = true
            }
            if (af && ae.insertUI.checkValid) {
                var ac = ae.insertUI.checkValid();
                if (ac) {
                    af = false;
                    ae.insertUI.toggleError(true, ac)
                }
            }
            if (!af) {
                aa = false
            }
            if (ab == null && !af) {
                ab = ae
            }
        });
        if (ab != null) {
            ab.sectionUI.pageUI.setActivePage(ab.sectionUI.pageUI);
            $("html,body").animate({
                scrollTop: ab.getUI.offset().top - 170
            });
            if ("parentIFrame"in window) {
                try {
                    parentIFrame.sendMessage({
                        message_type: "form-scroll-to",
                        message_content: ab.getUI.offset().top - 170
                    }, "*")
                } catch (Y) {}
            }
        }
        return aa
    }
    function O(X, aa) {
        if (E) {
            var Z = RaveshUI.showDialog({
                showHead: false,
                width: 450
            });
            var Y = $("<div>").addClass("ravesh-modal");
            Z.setContent(Y.append($("<i>").addClass("icon-warning"), r("insert", "MessagePreviewMode").replace(/\\n/g, "<br/>")));
            if (o) {
                Z.addFooterButton(frmRes.download.useThisTemplate, "submit", function() {
                    CallbtnUseThisTemplate();
                    Z.close();
                    return false
                }).focus()
            }
            Z.addFooterButton(frmRes.main.back).focus();
            if (X) {
                X()
            }
            return false
        }
        var ac = v.getData();
        if (ac.form.data.id == 0) {
            if (X) {
                X()
            }
            return false
        }
        if (s("wizardValidationType") == 0) {
            if (!aa && !b(ac)) {
                if (X) {
                    X()
                }
                return false
            }
        }
        var ad = D.onBeforeSaveForm();
        if (!aa && ad === false) {
            if (X) {
                X()
            }
            return false
        }
        var ab = q(false, false).formData;
        $.each(D.extraParamForSave, function(af, ag) {
            ab.append(af, ag)
        });
        ab.append("coordinate", e);
        ab.append("formId", ac.form.data.id);
        if (aa) {
            ab.append("forceSave", true)
        }
        var ae = "";
        if (k) {
            ae = s("serverUrl") + s("domain") + "/form/update/" + n
        } else {
            ae = s("serverUrl") + s("domain") + "/form/save/" + ac.form.data.id
        }
        FormUtility.postForm(ae, ab, function(ag, ah, af) {
            $.each(D.onSaveForm, function(ai, aj) {
                aj(ag, ah, af)
            });
            if (X) {
                X()
            }
            if (!ag) {
                u(ah, af)
            }
            x.css("width", 0).hide()
        }, function(af) {
            x.css("width", af + "%").show()
        })
    }
    function u(aa, X) {
        if (aa == "reCaptcha" || aa == "numericCaptcha") {
            return false
        }
        if (X == "startTimer") {
            return false
        }
        var Z = X[0].errorCode;
        if (Z == 9) {
            if (window.RaveshFormUtility) {
                RaveshFormUtility.showDialogPlan(null, function() {}, "upgrade", formBuilder.plan.type + 1)
            } else {
                var Y = new RaveshUI.MiniDialog();
                Y.setContent($("<div>").css({
                    padding: 15,
                    "text-align": "center",
                    "font-size": 18,
                    "margin-top": 50
                }).append(frmRes.insert.capacityPlanMessage))
            }
        } else {
            if (Z == 6 || Z == 7 || Z == 8 || Z == 11 || Z == 12 || Z == 13) {
                var Y = new RaveshUI.MiniDialog();
                Y.setContent($("<div>").css({
                    padding: 15
                }).append(aa == "" ? $("<div>").css({
                    "text-align": "center"
                }).append(X[0].errorMessage) : aa));
                if (Z == 13) {
                    setTimeout(function() {
                        location.reload()
                    }, 1000)
                }
            } else {
                var aa = "";
                var Y = new RaveshUI.MiniDialog();
                if ($.type(X) == "string") {
                    aa = X
                } else {
                    $.each(X, function(ab, ac) {
                        aa += "<div>" + ac.errorMessage + "</div>"
                    })
                }
                Y.setContent($("<div>").css({
                    padding: 15,
                    "text-align": "center",
                    "font-size": "12pt",
                    margin: "50px 0"
                }).append(aa))
            }
        }
    }
    function l(Y, ab, Z) {
        var X = $.extend(true, [], ab);
        var aa = {};
        $.each(X, function(ac, ad) {
            ad.parentId = ad.group.split("_")[0];
            ad.num = parseInt(ad.group.split("_")[1])
        });
        $.each(X, function(ae, af) {
            var ac = $.grep(Y.fields, function(ah) {
                return ah.id == af.fieldId
            })[0];
            var ag = $.grep(Y.fields, function(ah) {
                return ah.id == ac.parentId
            })[0];
            if (ac.parentId != af.parentId) {
                if (!ag.property.allowDuplicate || ag.property.allowDuplicate.toString().toLowerCase() == "false") {
                    var ad = $.grep(X, function(ah) {
                        return ah.parentId == ac.parentId
                    });
                    if (ad.length != 0) {
                        af.group = ad[0].num;
                        return
                    }
                }
                if (aa[ac.parentId + "_" + af.num]) {
                    af.group = aa[ac.parentId + "_" + af.num].num
                } else {
                    Z++;
                    aa[ac.parentId + "_" + af.num] = {
                        name: ac.parentId + "_" + Z,
                        num: Z
                    };
                    af.group = Z
                }
            } else {
                af.group = af.num
            }
        });
        return {
            params: X,
            newGroups: aa,
            maxGroupNumber: Z
        }
    }
    function P(X, Z) {
        var Y = X.sectionUI;
        $.each(Z, function(ac, ad) {
            var ab = $.grep(a.fields, function(ae) {
                return ae.id == ad.fieldId
            });
            if (ab.length == 0) {
                return
            } else {
                ab = ab[0]
            }
            var aa = [];
            if (Y.data.property.allowDuplicate && ab.parentId == Y.data.id) {
                aa = $.grep(v.getData().fields, function(ae) {
                    return ae.sectionUI == Y && ae.data.id == ab.id
                })
            } else {
                aa = $.grep(v.getData().fields, function(ae) {
                    return ae.data.id == ab.id
                })
            }
            if (aa.length == 0) {
                return
            } else {
                aa = aa[0]
            }
            if (aa.data.property.allowDuplicate && aa.insertUI.getValue().value != "") {
                aa = aa.duplicate()
            }
            aa.insertUI.setValue(ad)
        });
        N();
        C()
    }
    function R(X) {
        if (X.length == 0) {
            return false
        }
        $.each(X, function(Z, aa) {
            var Y = $.grep(v.getData().fields, function(ab) {
                return ab.data.id == aa.fieldId
            });
            if (Y.length == 0) {
                return
            } else {
                Y = Y[0]
            }
            if (Y.data.property.allowDuplicate && Y.insertUI.getValue().value != "") {
                Y = Y.duplicate()
            }
            Y.insertUI.setValue(aa)
        });
        N();
        C()
    }
    function T(Y) {
        n = Y.id;
        var X = l(a, Y.params, v.sectionGroupCounter);
        v.sectionGroupCounter = X.maxGroupNumber;
        var Z = [];
        $.each(X.newGroups, function(aa, ab) {
            Y.groups.push(ab.name)
        });
        $.each(Y.groups, function(aa, ab) {
            var ab = {
                sectionId: parseInt(ab.split("_")[0]),
                num: parseInt(ab.split("_")[1])
            };
            if ($.grep(Z, function(ac) {
                return ac.num == ab.num
            }).length > 0) {
                ab.num = v.sectionGroupCounter++
            }
            Z.push(ab)
        });
        $.each(Z, function(ab, ac) {
            var ad = $.grep(v.getData().sections, function(ae) {
                return ae.data.id == ac.sectionId
            });
            if (ad.length != 0) {
                ad = ad[0];
                if (!ad.data.groupChanged) {
                    ad.data.group = ac.num;
                    ad.data.groupChanged = true
                } else {
                    if (ad.data.property.allowDuplicate) {
                        var aa = ad.duplicate();
                        aa.data.group = ac.num;
                        aa.data.groupChanged = true
                    }
                }
            }
        });
        $.each(X.params, function(ab, ac) {
            var aa = $.grep(v.getData().fields, function(ae) {
                return ae.data.id == ac.fieldId
            });
            if (aa.length != 0) {
                aa = aa[0];
                var ad = $.grep(v.getData().sections, function(ae) {
                    return ae.data.group == ac.group
                });
                ad = ad[0];
                aa = $.grep(v.getData().fields, function(ae) {
                    return ae.data.id == ac.fieldId && ae.sectionUI == ad
                });
                if (aa.length == 0) {
                    return
                }
                aa = aa[0];
                if (aa.valueChanged) {
                    if (aa.data.property.allowDuplicate) {
                        aa = aa.duplicate()
                    }
                }
                aa.insertUI.setValue(ac);
                aa.valueChanged = true
            } else {}
        })
    }
    function S(X, Z) {
        var Y = $.grep(v.getData().fields, function(aa) {
            return aa.data.type == "customer"
        });
        $.each(Y, function(aa, ab) {
            ab.insertUI.setValue({
                value: X,
                title: Z
            })
        })
    }
    function Q(X, aa, Z) {
        var Y = $.grep(v.getData().fields, function(ab) {
            return ab.data.id == X
        });
        $.each(Y, function(ab, ac) {
            ac.insertUI.setValue({
                value: aa,
                title: Z
            })
        });
        N();
        C()
    }
    function U(X, Y) {
        $.each(X, function(ad, ae) {
            try {
                var ab = ae[0];
                var ac = ae[1];
                var af = FormUtility.getQueryStrings(ac, Y);
                if (!af) {
                    return
                }
                var aa = $.grep(v.getData().fields, function(ag) {
                    return ag.data.id == ab
                });
                if (aa.length == 0) {
                    return
                }
                aa = aa[0];
                if (aa.data.type == "checkbox") {
                    $.each(af.split(","), function(ag, ah) {
                        aa.insertUI.setValue({
                            value: ah
                        })
                    })
                } else {
                    aa.insertUI.setValue({
                        value: af
                    })
                }
                aa.valueChanged = true
            } catch (Z) {}
        })
    }
    function N(ac) {
        if (c) {
            return false
        }
        if (a.rules == null) {
            return false
        }
        if (a.rules.length == 0) {
            return false
        }
        var Y = [];
        if (ac) {
            Y = $.grep(a.rules, function(af) {
                return af.pageId == ac
            })
        } else {
            Y = $.grep(a.rules, function(af) {
                return !af.pageId
            })
        }
        var X = q(true, true).data;
        var Z = function(am, ao) {
            var ak = {
                equal: 1,
                notEqual: 2,
                beginsWith: 3,
                beginsNotWith: 4,
                contains: 5,
                notContains: 6,
                endsWith: 7,
                endsNotWith: 8,
                isEmpty: 9,
                isNotEmpty: 10,
                greater: 11,
                less: 12,
                equalCurrentDate: 15,
                notEqualCurrentDate: 16,
                greaterCurrentDate: 17,
                lessCurrentDate: 18,
                equalAndGreater: 21,
                equalAndLess: 22,
            };
            var af = $.grep(v.getData().fields, function(ap) {
                return ap.data.id == am[0]
            })[0];
            var ag = [];
            if (ao != null && af.sectionUI.data.property.allowDuplicate) {
                ag = $.grep(X, function(ap) {
                    return ap.fieldId == am[0] && ap.groupNum == ao
                })
            } else {
                ag = $.grep(X, function(ap) {
                    return ap.fieldId == am[0]
                })
            }
            var aj = parseInt(am[1]);
            if (ag.length == 0) {
                if (aj == ak.notEqual || aj == ak.beginsNotWith || aj == ak.notContains || aj == ak.endsNotWith || aj == ak.isEmpty || aj == ak.less || aj == ak.notEqualCurrentDate || aj == ak.lessCurrentDate) {
                    return true
                } else {
                    return false
                }
            }
            var al = new Array();
            for (var ai = 0; ai <= ag.length - 1; ai++) {
                var ah = ag[ai].value;
                var an = am[2];
                if (ag[ai].isDate) {
                    if (ah.indexOf(",") != -1) {
                        ag[ai].fieldDate = ah.split(" ")[0];
                        ah = ag[ai].lang == "fa" ? FormUtility.convertGregorianToJalali(ag[ai].fieldDate) : ag[ai].fieldDate
                    } else {
                        ag[ai].fieldDate = ag[ai].lang == "fa" ? FormUtility.convertJalaliToGregorian(ah) : ah
                    }
                    ag[ai].ruleDate = ag[ai].lang == "fa" ? FormUtility.convertJalaliToGregorian(an) : an
                }
                switch (aj) {
                case ak.equal:
                    al.push(ah == an);
                    break;
                case ak.notEqual:
                    al.push(ah != an);
                    break;
                case ak.beginsWith:
                    al.push(ah.indexOf(an) == 0);
                    break;
                case ak.beginsNotWith:
                    al.push(ah.indexOf(an) != 0);
                    break;
                case ak.contains:
                    al.push(ah.indexOf(an) != -1);
                    break;
                case ak.notContains:
                    al.push(ah.indexOf(an) == -1);
                    break;
                case ak.endsWith:
                    al.push(ah.lastIndexOf(an) != -1 && ah.lastIndexOf(an) == ah.length - an.length);
                    break;
                case ak.endsNotWith:
                    al.push(!(ah.lastIndexOf(an) != -1 && ah.lastIndexOf(an) == ah.length - an.length));
                    break;
                case ak.isEmpty:
                    al.push(ah == "");
                    break;
                case ak.isNotEmpty:
                    al.push(ah != "");
                    break;
                case ak.greater:
                    if (af.data.type == "number" || af.data.type == "formule") {
                        ah = parseFloat(ah)
                    }
                    if (ag[ai].isDate) {
                        al.push(ag[ai].fieldDate != "" && new Date(ag[ai].fieldDate) > new Date(ag[ai].ruleDate))
                    } else {
                        al.push(ah > an)
                    }
                    break;
                case ak.less:
                    if (af.data.type == "number" || af.data.type == "formule") {
                        ah = parseFloat(ah)
                    }
                    if (ag[ai].isDate) {
                        al.push(ag[ai].fieldDate != "" && new Date(ag[ai].fieldDate) < new Date(ag[ai].ruleDate))
                    } else {
                        al.push(ah < an)
                    }
                    break;
                case ak.equalAndGreater:
                    if (af.data.type == "number" || af.data.type == "formule") {
                        ah = parseFloat(ah)
                    }
                    if (ag[ai].isDate) {
                        al.push(ag[ai].fieldDate != "" && new Date(ag[ai].fieldDate) >= new Date(ag[ai].ruleDate))
                    } else {
                        al.push(ah >= an)
                    }
                    break;
                case ak.equalAndLess:
                    if (af.data.type == "number" || af.data.type == "formule") {
                        ah = parseFloat(ah)
                    }
                    if (ag[ai].isDate) {
                        al.push(ag[ai].fieldDate != "" && new Date(ag[ai].fieldDate) <= new Date(ag[ai].ruleDate))
                    } else {
                        al.push(ah <= an)
                    }
                    break;
                case ak.equalCurrentDate:
                    al.push(ag[ai].fieldDate == s("currentDate"));
                    break;
                case ak.notEqualCurrentDate:
                    al.push(ag[ai].fieldDate != s("currentDate"));
                    break;
                case ak.greaterCurrentDate:
                    al.push(ag[ai].fieldDate != "" && new Date(ag[ai].fieldDate) > new Date(s("currentDate")));
                    break;
                case ak.lessCurrentDate:
                    al.push(ag[ai].fieldDate != "" && new Date(ag[ai].fieldDate) < new Date(s("currentDate")));
                    break
                }
            }
            if (aj == ak.isEmpty || aj == ak.isNotEmpty) {
                return $.grep(al, function(ap) {
                    return ap == false
                }).length == 0
            } else {
                return $.grep(al, function(ap) {
                    return ap == true
                }).length != 0
            }
        };
        var aa = function(ag, ah) {
            var af = ag[0];
            $.each(ag[1], function(ai, aj) {
                if (aj.length == 2) {
                    aa(aj, ah)
                } else {
                    aj[4] = Z(aj, ah)
                }
            });
            if (ag[1].length == 1) {
                if (ag[1][0].length == 3) {
                    ag[2] = ag[1][0][2]
                } else {
                    ag[2] = ag[1][0][4]
                }
            } else {
                if (af == "and") {
                    ag[2] = $.grep(ag[1], function(ai) {
                        return (ai.length == 3 && ai[2] == false) || (ai.length > 3 && ai[4] == false)
                    }).length == 0
                } else {
                    if (af == "or") {
                        ag[2] = $.grep(ag[1], function(ai) {
                            return (ai.length == 3 && ai[2] == true) || (ai.length > 3 && ai[4] == true)
                        }).length != 0
                    }
                }
            }
            return ag[2]
        };
        var ae = function(af, ah, ai) {
            var ag = [];
            if (ai == null) {
                ag = $.grep(v.getData().fields, function(aj) {
                    return aj.data.id == af[0]
                })
            } else {
                ag = $.grep(v.getData().fields, function(aj) {
                    return aj.data.id == af[0] && aj.sectionUI.data.group == ai
                })
            }
            if (ag.length == 0) {
                ag = $.grep(v.getData().sections, function(aj) {
                    return aj.data.id == af[0]
                })
            }
            $.each(ag, function(aj, ak) {
                switch (af[1]) {
                case "show":
                    ak.toggle(ah);
                    break;
                case "hide":
                    ak.toggle(!ah);
                    break;
                case "enable":
                    ak.setDisable(!ah);
                    break;
                case "disable":
                    ak.setDisable(ah);
                    break;
                case "showOnly":
                    if (ah) {
                        ak.toggle(true)
                    }
                    break;
                case "hideOnly":
                    if (ah) {
                        ak.toggle(false)
                    }
                    break;
                case "enableOnly":
                    if (ah) {
                        ak.setDisable(false)
                    }
                    break;
                case "disableOnly":
                    if (ah) {
                        ak.setDisable(true)
                    }
                    break
                }
            });
            if (af[0] == "prev" || af[0] == "next") {
                $.each(I.pages, function(al, am) {
                    var ak = am[af[0] == "next" ? "toggleNextButton" : "toggleBackButton"];
                    var aj = am[af[0] == "next" ? "setDisableNextButton" : "setDisableBackButton"];
                    switch (af[1]) {
                    case "show":
                        ak(ah);
                        break;
                    case "hide":
                        ak(!ah);
                        break;
                    case "enable":
                        aj(!ah);
                        break;
                    case "disable":
                        aj(ah);
                        break;
                    case "showOnly":
                        if (ah) {
                            ak(true)
                        }
                        break;
                    case "hideOnly":
                        if (ah) {
                            ak(false)
                        }
                        break;
                    case "enableOnly":
                        if (ah) {
                            aj(false)
                        }
                        break;
                    case "disableOnly":
                        if (ah) {
                            aj(true)
                        }
                        break
                    }
                })
            }
        };
        var ab = function(ai) {
            var ag = [];
            var af = function(aj) {
                if (aj.length == 0) {
                    return false
                }
                $.each(aj[1], function(al, am) {
                    if (am.length == 2) {
                        af(am)
                    } else {
                        var ak = $.grep(v.getData().fields, function(an) {
                            return an.data.id == am[0]
                        })[0];
                        if (ak && ak.sectionUI.data.property.allowDuplicate && ag.indexOf(ak.data) == -1) {
                            ag.push(ak.data)
                        }
                    }
                })
            };
            af(ai);
            var ah = [];
            $.each(X, function(aj, ak) {
                if (ah.indexOf(ak.groupNum) != -1) {
                    return
                }
                if ($.grep(ag, function(al) {
                    return al.id == ak.fieldId
                }).length > 0) {
                    ah.push(ak.groupNum)
                }
            });
            if (ah.length == 0) {
                ah.push(null)
            }
            return ah
        };
        var ad = false;
        $.each(Y, function(ah, ai) {
            if (ad) {
                return false
            }
            var af = ai.executeOn == "all" || ((k && ai.executeOn == "update") || (!k && ai.executeOn == "insert"));
            if (af || ai.rules.length == 0) {
                var ag = ab(ai.rules);
                $.each(ag, function(aj, ak) {
                    var al = $.extend(true, [], ai.rules);
                    var am = al.length == 0 ? af : aa(al, ak);
                    if (ac) {
                        if (am) {
                            ad = ai.actions[0][0];
                            return false
                        }
                    } else {
                        $.each(ai.actions, function(an, ao) {
                            ae(ao, am, ak)
                        })
                    }
                })
            }
        });
        return ad
    }
    function C() {
        var X = q(false, true).data;
        $.each(I.fields, function(Z, aa) {
            if (aa.insertUI && aa.insertUI.onChangeForm) {
                aa.insertUI.onChangeForm(X, I.fields, aa.sectionUI.data.group)
            }
        });
        $.each(I.fields, function(Z, aa) {
            if (aa.data.property.richTitle && aa.setTitle && (aa.data.property.richTitle.indexOf("#field_") != -1 || aa.data.property.richTitle.indexOf("#random_text#") != -1)) {
                var ab = aa.data.property.richTitle;
                $.each(I.fields, function(ac, ad) {
                    var ag = "#field_" + ad.data.id + "#";
                    if (aa.data.property.richTitle.indexOf(ag) == -1) {
                        return
                    }
                    var af = [];
                    var ae = Y(aa, ad);
                    $.each(ae, function(ah, ai) {
                        var aj = ai.title == "" ? ai.value : ai.title;
                        if (aj == "") {
                            return
                        }
                        af.push(aj.toString().replace(/\n/g, "<br>"))
                    });
                    ab = ab.replace(ag, af.join("، "))
                });
                ab = ab.replace(/#field[_]\d*#/g, "");
                ab = ab.replace(/#random[_]text#/g, F);
                aa.setTitle(ab, true)
            }
        });
        function Y(ab, Z) {
            var aa = $.grep(X, function(ac) {
                return ac.fieldId.toString() == Z.data.id
            });
            if (aa.length == 0) {
                return []
            } else {
                if (ab.sectionUI.data.property.allowDuplicate && ab.sectionUI.data.id == Z.sectionUI.data.id) {
                    aa = $.grep(aa, function(ac) {
                        return ac.fieldId.toString() == Z.data.id && ac.groupNum == ab.sectionUI.data.group
                    })
                }
                return aa
            }
        }
    }
    function M(X) {
        var Z = ["small", "medium", "large"];
        var Y = function() {
            var ab = "";
            var ac = y.outerWidth();
            if (ac < 450) {
                ab = Z[0]
            }
            if (ac >= 450 && ac <= 800) {
                ab = Z[1]
            }
            if (ac > 800) {
                ab = Z[2]
            }
            $.each(Z, function(ad, ae) {
                y.removeClass("ravesh-form-size-" + ae)
            });
            y.addClass("ravesh-form-size-" + ab);
            if (X) {
                X(Z, ab)
            }
        };
        if (X) {
            var aa;
            $(window).resize(function() {
                clearTimeout(aa);
                aa = setTimeout(Y, 100)
            })
        }
        Y()
    }
    function p() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(X) {
                e = X.coords.latitude + "," + X.coords.longitude
            })
        }
    }
    function V(X, ab, ac, ag) {
        if (X) {
            var aa = I.form.data.lang == "fa" ? "IRANSansWeb" : '"Segoe UI",Helvetica,Arial';
            if (!ag) {
                if (I.form.data.type == "classic") {
                    ag = {
                        pageBackgroundAlign: "center",
                        pageBackgroundColor: "#eee",
                        pageBackgroundImage: "",
                        pageBackgroundView: "tiles",
                        formWidth: "",
                        formMarginBottom: "50",
                        formMarginTop: "50",
                        formBackgroundAlign: "center",
                        formBackgroundColor: "#fff",
                        formBackgroundImage: "",
                        formBackgroundView: "tiles",
                        formBorderColor: "#ddd",
                        formBorderRadius: "5",
                        formBorderStyle: "solid",
                        formBorderWidth: "0",
                        formShadowColor: "#ddd",
                        formShadowWidth: "none",
                        headerEnable: "True",
                        headerHeight: "",
                        headerTextAlign: "unset",
                        headerBackgroundAlign: "center",
                        headerBackgroundColor: "#f9f9f9",
                        headerBackgroundImage: "",
                        headerBackgroundView: "tiles",
                        headerBorderColor: "#ddd",
                        headerBorderStyle: "solid",
                        headerBorderWidth: "0",
                        headerTitleFontColor: "#000",
                        headerTitleFontFamily: aa,
                        headerTitleFontStyle: "normal",
                        headerTitleFontSize: "15px",
                        headerDetailFontColor: "#999",
                        headerDetailFontFamily: aa,
                        headerDetailFontStyle: "normal",
                        headerDetailFontSize: "12px",
                        footerBackgroundAlign: "center",
                        footerBackgroundColor: "#fff",
                        footerBackgroundImage: "",
                        footerBackgroundView: "tiles",
                        footerBorderColor: "#000",
                        footerBorderStyle: "solid",
                        footerBorderWidth: "0",
                        footerButtonAlign: "unset",
                        footerButtonBackColor: "#3692d8",
                        footerButtonBorderColor: "#000",
                        footerButtonBorderStyle: "solid",
                        footerButtonBorderWidth: "0",
                        footerButtonRadius: "2",
                        footerButtonTextColor: "#fff",
                        footerButtonWizardBackColor: "#eee",
                        footerButtonWizardBorderColor: "#000",
                        footerButtonWizardBorderStyle: "solid",
                        footerButtonWizardBorderWidth: "0",
                        footerButtonWizardTextColor: "#999",
                        fieldBackColor: "#fff",
                        fieldBorderColor: "#e1e1e1",
                        fieldBorderStyle: "solid",
                        fieldBorderWidth: "1px",
                        fieldDetailFontColor: "#999",
                        fieldDetailFontFamily: aa,
                        fieldDetailFontSize: "10px",
                        fieldDetailFontStyle: "normal",
                        fieldInputFontColor: "#000",
                        fieldInputFontFamily: aa,
                        fieldInputFontSize: "11px",
                        fieldInputFontStyle: "normal",
                        fieldStyle: "square",
                        fieldTitleFontColor: "#000",
                        fieldTitleFontFamily: aa,
                        fieldTitleFontSize: "11px",
                        fieldTitleFontStyle: "normal",
                        fieldLabelFontColor: "#000",
                        fieldLabelFontFamily: aa,
                        fieldLabelFontSize: "10px",
                        fieldLabelFontStyle: "normal",
                        fieldLabelInsertFontColor: "#06C",
                        fieldLabelInsertFontFamily: aa,
                        fieldLabelInsertFontSize: "10px",
                        fieldLabelInsertFontStyle: "normal",
                        sectionBackColor: "transparent",
                        sectionBorderColor: "#eee",
                        sectionBorderStyle: "solid",
                        sectionBorderWidth: "1px",
                        sectionHeadBackColor: "#f9f9f9",
                        sectionTitleFontColor: "#000",
                        sectionTitleFontFamily: aa,
                        sectionTitleFontSize: "12px",
                        sectionTitleFontStyle: "normal",
                        wizardBackColor: "transparent",
                        wizardColor: "#03a9f4",
                        wizardFontFamily: aa,
                        wizardNumberColor: "#fff",
                        wizardTextColor: "#000"
                    }
                } else {
                    ag = {
                        pageBackgroundAlign: "center",
                        pageBackgroundColor: "rgb(0, 188, 212)",
                        pageBackgroundImage: "",
                        pageBackgroundView: "tiles",
                        formWidth: "",
                        formMarginBottom: "50",
                        formMarginTop: "50",
                        formBackgroundAlign: "center",
                        formBackgroundColor: "#fff",
                        formBackgroundImage: "",
                        formBackgroundView: "tiles",
                        formBorderColor: "rgb(0, 0, 0)",
                        formBorderRadius: "5",
                        formBorderStyle: "solid",
                        formBorderWidth: "0",
                        formShadowColor: "rgba(0, 0, 0, 0.16)",
                        formShadowWidth: "20px",
                        headerEnable: "true",
                        headerHeight: "",
                        headerTextAlign: "center",
                        headerBackgroundAlign: "center",
                        headerBackgroundColor: "rgba(0, 0, 0, 0)",
                        headerBackgroundImage: "",
                        headerBackgroundView: "tiles",
                        headerBorderColor: "#ddd",
                        headerBorderStyle: "solid",
                        headerBorderWidth: "0",
                        headerTitleFontColor: "#000",
                        headerTitleFontFamily: "IRANSansWeb",
                        headerTitleFontStyle: "normal",
                        headerTitleFontSize: "20px",
                        headerDetailFontColor: "rgb(0, 0, 0)",
                        headerDetailFontFamily: "IRANSansWeb",
                        headerDetailFontStyle: "normal",
                        headerDetailFontSize: "14px",
                        footerBackgroundAlign: "center",
                        footerBackgroundColor: "rgb(255, 255, 255)",
                        footerBackgroundImage: "",
                        footerBackgroundView: "tiles",
                        footerBorderColor: "#000",
                        footerBorderStyle: "solid",
                        footerBorderWidth: "0",
                        footerButtonAlign: "unset",
                        footerButtonBackColor: "rgb(76, 175, 80)",
                        footerButtonBorderColor: "#000",
                        footerButtonBorderStyle: "solid",
                        footerButtonBorderWidth: "0",
                        footerButtonRadius: "2",
                        footerButtonTextColor: "#fff",
                        footerButtonWizardBackColor: "#eee",
                        footerButtonWizardBorderColor: "#000",
                        footerButtonWizardBorderStyle: "solid",
                        footerButtonWizardBorderWidth: "0",
                        footerButtonWizardTextColor: "#999",
                        fieldBackColor: "#fff",
                        fieldBorderColor: "#e1e1e1",
                        fieldBorderStyle: "solid",
                        fieldBorderWidth: "1px",
                        fieldDetailFontColor: "#999",
                        fieldDetailFontFamily: "IRANSansWeb",
                        fieldDetailFontSize: "10px",
                        fieldDetailFontStyle: "normal",
                        fieldInputFontColor: "#000",
                        fieldInputFontFamily: "IRANSansWeb",
                        fieldInputFontSize: "11px",
                        fieldInputFontStyle: "normal",
                        fieldStyle: "square",
                        fieldTitleFontColor: "#000",
                        fieldTitleFontFamily: "IRANSansWeb",
                        fieldTitleFontSize: "16px",
                        fieldTitleFontStyle: "normal",
                        fieldLabelFontColor: "#000",
                        fieldLabelFontFamily: "IRANSansWeb",
                        fieldLabelFontSize: "10px",
                        fieldLabelFontStyle: "normal",
                        fieldLabelInsertFontColor: "#06C",
                        fieldLabelInsertFontFamily: "IRANSansWeb",
                        fieldLabelInsertFontSize: "10px",
                        fieldLabelInsertFontStyle: "normal",
                        sectionBackColor: "transparent",
                        sectionBorderColor: "#eee",
                        sectionBorderStyle: "solid",
                        sectionBorderWidth: "1px",
                        sectionHeadBackColor: "#f9f9f9",
                        sectionTitleFontColor: "#000",
                        sectionTitleFontFamily: "IRANSansWeb",
                        sectionTitleFontSize: "12px",
                        sectionTitleFontStyle: "normal",
                        wizardBackColor: "transparent",
                        wizardColor: "#03a9f4",
                        wizardFontFamily: "IRANSansWeb",
                        wizardNumberColor: "#fff",
                        wizardTextColor: "#000",
                        cssLinkExtra: []
                    }
                }
            }
            v.formBuilderSubmitTheme = {
                bodyElem: X,
                formElem: ab,
                formTitle: ac,
                prop: ag
            }
        } else {
            var af = v.formBuilderSubmitTheme;
            if (af == null) {
                return false
            }
            X = af.bodyElem,
            ab = af.formElem,
            ac = af.formTitle,
            ag = af.prop
        }
        var ad = function(ah) {
            if (ah == "repeat-x") {
                return "repeat-x"
            }
            if (ah == "repeat-y") {
                return "repeat-y"
            }
            if (ah == "tiles") {
                return "repeat"
            }
            return "no-repeat"
        };
        var ae = function(ah) {
            switch (ah) {
            case "stretch":
                return "cover";
            case "contain":
                return "contain";
            case "none":
            case "tiles":
            case "repeat-x":
            case "repeat-y":
                return "unset";
            default:
                if (!isNaN(ah)) {
                    return ah + "%"
                }
                return ah
            }
        };
        X.css({
            "background-color": ag.pageBackgroundColor,
            "background-image": ag.pageBackgroundImage.trim() == "" ? "unset" : "url('" + ag.pageBackgroundImage + "')",
            "background-position": ag.pageBackgroundAlign.split(" ").length == 1 ? ag.pageBackgroundAlign + " top" : ag.pageBackgroundAlign,
            "background-attachment": "fixed",
            "background-repeat": ad(ag.pageBackgroundView),
            "background-size": ae(ag.pageBackgroundView)
        });
        ab.css({
            margin: "auto",
            "float": ag.formAlign == "left" || ag.formAlign == "right" ? ag.formAlign : "none",
            "max-width": ag.formWidth == "" ? "1300px" : ag.formWidth + "px",
            "padding-bottom": parseInt(ag.formMarginBottom) || 0,
            "padding-top": parseInt(ag.formMarginTop) || 0
        });
        ab.find(I.form.data.type == "classic" ? ".ravesh-form-box" : ".form-design-page").css({
            overflow: I.form.data.type == "classic" ? "hidden" : "auto",
            "max-height": I.form.data.type == "classic" ? "unset" : "80%",
            "background-color": ag.formBackgroundColor,
            "background-image": ag.formBackgroundImage.trim() == "" ? "unset" : "url('" + ag.formBackgroundImage + "')",
            "background-position": ag.formBackgroundAlign.split(" ").length == 1 ? ag.formBackgroundAlign + " top" : ag.formBackgroundAlign,
            "background-repeat": ad(ag.formBackgroundView),
            "background-size": ae(ag.formBackgroundView),
            "border-width": ag.formBorderWidth,
            "border-color": ag.formBorderColor,
            "border-style": ag.formBorderStyle,
            "border-radius": ag.formBorderRadius + "px",
            "box-shadow": ag.formShadowWidth == "none" ? "none" : ("0 0 " + ag.formShadowWidth + " " + ag.formShadowColor)
        });
        ac.css({
            "background-color": ag.headerBackgroundColor,
            "background-image": ag.headerBackgroundImage.trim() == "" ? "unset" : "url('" + ag.headerBackgroundImage + "')",
            "background-position": ag.headerBackgroundAlign.split(" ").length == 1 ? "bottom " + ag.headerBackgroundAlign : ag.headerBackgroundAlign,
            "background-repeat": ad(ag.headerBackgroundView),
            "background-size": ae(ag.headerBackgroundView),
            "border-width": "0 0 " + ag.headerBorderWidth + " 0",
            "border-color": ag.headerBorderColor,
            "border-style": ag.headerBorderStyle,
            display: ag.headerEnable.toString().toLowerCase() == "true" ? "block" : "none",
            height: ag.headerHeight == "" ? "auto" : ag.headerHeight + "px",
            "font-family": ag.headerTitleFontFamily
        });
        ac.find("h1").css({
            "text-align": ag.headerTextAlign,
            "font-size": ag.headerTitleFontSize,
            color: ag.headerTitleFontColor,
            "font-family": ag.headerTitleFontFamily,
            "font-weight": ag.headerTitleFontStyle == "bold" || ag.headerTitleFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.headerTitleFontStyle == "italic" || ag.headerTitleFontStyle == "boldItalic" ? "italic" : "unset"
        });
        ac.find("h2").css({
            "text-align": ag.headerTextAlign,
            "font-size": ag.headerDetailFontSize,
            color: ag.headerDetailFontColor,
            "font-family": ag.headerDetailFontFamily,
            "font-weight": ag.headerDetailFontStyle == "bold" || ag.headerDetailFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.headerDetailFontStyle == "italic" || ag.headerDetailFontStyle == "boldItalic" ? "italic" : "unset"
        });
        z.css({
            "background-color": ag.footerBackgroundColor,
            "background-image": ag.footerBackgroundImage.trim() == "" ? "unset" : "url('" + ag.footerBackgroundImage + "')",
            "background-position": ag.footerBackgroundAlign.split(" ").length == 1 ? ag.footerBackgroundAlign + " top" : ag.footerBackgroundAlign,
            "background-repeat": ad(ag.footerBackgroundView),
            "background-size": ae(ag.footerBackgroundView),
            "border-width": ag.footerBorderWidth + " 0 0 0",
            "border-color": ag.footerBorderColor,
            "border-style": ag.footerBorderStyle,
            "text-align": ag.footerButtonAlign
        });
        z.find(".ravesh-button.submit").css({
            "background-color": ag.footerButtonBackColor,
            color: ag.footerButtonTextColor,
            "border-width": ag.footerButtonBorderWidth,
            "border-color": ag.footerButtonBorderColor,
            "border-style": ag.footerButtonBorderStyle,
            "border-radius": ag.footerButtonRadius + "px",
        });
        z.find(".ravesh-button.navigator").css({
            "background-color": ag.footerButtonWizardBackColor,
            color: ag.footerButtonWizardTextColor,
            "border-width": ag.footerButtonWizardBorderWidth,
            "border-color": ag.footerButtonWizardBorderColor,
            "border-style": ag.footerButtonWizardBorderStyle,
            "border-radius": ag.footerButtonRadius + "px",
        });
        y.find(".form-design-field .title-str").css({
            "font-size": ag.fieldTitleFontSize,
            color: ag.fieldTitleFontColor,
            "font-family": ag.fieldTitleFontFamily,
            "font-weight": ag.fieldTitleFontStyle == "bold" || ag.fieldTitleFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.fieldTitleFontStyle == "italic" || ag.fieldTitleFontStyle == "boldItalic" ? "italic" : "unset"
        });
        y.find(".form-design-field .detail").css({
            "font-size": ag.fieldDetailFontSize,
            color: ag.fieldDetailFontColor,
            "font-family": ag.fieldDetailFontFamily,
            "font-weight": ag.fieldDetailFontStyle == "bold" || ag.fieldDetailFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.fieldDetailFontStyle == "italic" || ag.fieldDetailFontStyle == "boldItalic" ? "italic" : "unset"
        });
        y.find(".form-design-field .form-input,.form-design-field select.ravesh-dropdown,.form-design-field .ravesh-dropdown input,.form-design-field .ravesh-dropdown .arrow").css({
            "font-size": ag.fieldInputFontSize,
            color: ag.fieldInputFontColor,
            "border-color": ag.fieldInputFontColor,
            "font-family": ag.fieldInputFontFamily,
            "font-weight": ag.fieldInputFontStyle == "bold" || ag.fieldInputFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.fieldInputFontStyle == "italic" || ag.fieldInputFontStyle == "boldItalic" ? "italic" : "unset"
        });
        y.find(".form-design-field label span,.form-field-picture .item span,.form-field-matrix td,.form-field-formule .form-text-style,.form-field-multimedia .ravesh-countdown").css({
            "font-size": ag.fieldLabelFontSize,
            color: ag.fieldLabelFontColor,
            "font-family": ag.fieldLabelFontFamily,
            "font-weight": ag.fieldLabelFontStyle == "bold" || ag.fieldLabelFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.fieldLabelFontStyle == "italic" || ag.fieldLabelFontStyle == "boldItalic" ? "italic" : "unset"
        });
        var Z = {
            "background-color": ag.fieldBackColor,
            "border-color": ag.fieldBorderColor,
            "border-style": ag.fieldBorderStyle,
            "border-width": ag.fieldBorderWidth,
            "border-radius": 0
        };
        switch (ag.fieldStyle) {
        case "halfRounded":
            Z["border-radius"] = "6px";
            break;
        case "fullRounded":
            Z["border-radius"] = "15px";
            break;
        case "rightLine":
            Z["border-right-width"] = parseInt(ag.fieldBorderWidth) + 3;
            break;
        case "leftLine":
            Z["border-left-width"] = parseInt(ag.fieldBorderWidth) + 3;
            break;
        case "bottomLine":
            Z["border-bottom-width"] = parseInt(ag.fieldBorderWidth) + 3;
            break;
        case "line":
            Z["border-width"] = 0;
            Z["border-bottom-width"] = parseInt(ag.fieldBorderWidth) + 3;
            break
        }
        y.find(".form-design-field .form-input,.form-design-field .ravesh-dropdown").css(Z);
        y.find(".form-design-section-wrapper.style-border").css({
            "background-color": ag.sectionBackColor,
            "border-width": ag.sectionBorderWidth,
            "border-color": ag.sectionBorderColor,
            "border-style": ag.sectionBorderStyle
        });
        y.find(".form-design-section-head").css({
            "background-color": ag.sectionHeadBackColor,
            color: ag.sectionTitleFontColor,
            "border-width": "0 0 " + ag.sectionBorderWidth + " 0",
            "border-color": ag.sectionBorderColor,
            "border-style": ag.sectionBorderStyle,
            "font-size": ag.sectionTitleFontSize,
            "font-family": ag.sectionTitleFontFamily,
            "font-weight": ag.sectionTitleFontStyle == "bold" || ag.sectionTitleFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.sectionTitleFontStyle == "italic" || ag.sectionTitleFontStyle == "boldItalic" ? "italic" : "unset"
        });
        y.find(".add-new,.delete-field").css({
            "font-size": ag.fieldLabelInsertFontSize,
            color: ag.fieldLabelInsertFontColor,
            "font-family": ag.fieldLabelInsertFontFamily,
            "font-weight": ag.fieldLabelInsertFontStyle == "bold" || ag.fieldLabelInsertFontStyle == "boldItalic" ? "bold" : "normal",
            "font-style": ag.fieldLabelInsertFontStyle == "italic" || ag.fieldLabelInsertFontStyle == "boldItalic" ? "italic" : "unset"
        });
        if (ag.confirmButtonEnable != null) {
            var Y = y.find(".ravesh-button.confirm");
            Y.toggleClass("not-show", ag.confirmButtonEnable.toString().toLowerCase() == "false");
            Y.css({
                "background-color": ag.confirmButtonBackColor,
                color: ag.confirmButtonTextColor,
                "border-radius": ag.confirmButtonRadius + "px",
            })
        }
        A.css({
            "background-color": ag.wizardBackColor,
            "font-family": ag.wizardFontFamily
        });
        A.find(".box-wizard,.number-wizard").css({
            "background-color": ag.wizardColor,
            color: ag.wizardNumberColor
        });
        A.find(".title-wizard").css({
            color: ag.wizardTextColor
        });
        if (ag.cssLink != null && ag.cssLink != "") {
            $("#formExternalCSS").remove();
            $("<link>").attr({
                id: "formExternalCSS",
                type: "text/css",
                href: ag.cssLink,
                rel: "stylesheet"
            }).appendTo(X)
        }
        if (ag.cssLinkExtra != null) {
            $("link[id=formExternalCSSExtra]").remove();
            $.each(ag.cssLinkExtra, function(ah, ai) {
                $("<link>").attr({
                    id: "formExternalCSSExtra",
                    type: "text/css",
                    href: "https://formafzar.com/assets/extraCss/" + ai + ".css",
                    rel: "stylesheet"
                }).appendTo(X)
            })
        }
        if (ag.fieldSelectColor) {
            y.find("#styleTemplateForm").remove();
            y.append('<style id="styleTemplateForm">.form-field-toggle .ravesh-toggle-style-0 input:checked+.slider{background-color:' + ag.fieldSelectColor + ";border-color:" + ag.fieldSelectColor + "}.form-field-toggle .ravesh-toggle-style-0 input:focus+.slider{border-color:" + ag.fieldSelectColor + "}.ravesh-form-control input:checked ~ .cover .ravesh-form-control-indicator { background-color: " + ag.fieldSelectColor + "; }.ravesh-form-control:hover input:not([disabled]):checked ~ .cover .ravesh-form-control-indicator,.ravesh-form-control input:checked:focus ~ .cover .ravesh-form-control-indicator { background-color: " + ag.fieldSelectColor + "; }.form-design-field .form-input:focus,.ravesh-dropdown.active,.ravesh-dropdown-menu {border-color: " + ag.fieldSelectColor + " !important;}.ravesh-dropdown-menu .option:active, .ravesh-dropdown-menu .option:hover, .ravesh-dropdown-menu .option:hover .single-line {background-color: " + ag.fieldSelectColor + " !important;}.ravesh-date-picker .ui-datepicker-calendar .ui-state-default.ui-state-active {background-color: " + ag.fieldSelectColor + " !important;}.ravesh-time-picker .preview .hour:hover, .ravesh-time-picker .preview .min:hover, .ravesh-time-picker .preview .hour.active, .ravesh-time-picker .preview .min.active {color: " + ag.fieldSelectColor + ";}.ravesh-time-picker .clock .handle,.ravesh-time-picker .pm-btn.active, .ravesh-time-picker .am-btn.active,.ravesh-time-picker .clock .handle-bar {background-color: " + ag.fieldSelectColor + ";}.form-field-rangeslider input[type=range]:focus::-moz-range-thumb { background-color: " + ag.fieldSelectColor + " !important; border-color: " + ag.fieldSelectColor + " !important; }.form-field-rangeslider input[type=range]:focus::-webkit-slider-thumb { background-color: " + ag.fieldSelectColor + " !important; border-color: " + ag.fieldSelectColor + " !important; }.form-field-toggle .ravesh-toggle-style-1 .toggle-off, .form-field-toggle .ravesh-toggle-style-1.checked .toggle-on {background-color: " + ag.fieldSelectColor + ";}.form-field-booking .ravesh-booking .booking-content .item{border-color: " + ag.fieldSelectColor + ";color: " + ag.fieldSelectColor + ";}.form-field-booking .ravesh-booking .booking-content .item.active {background-color: " + ag.fieldSelectColor + " !important;border-color: " + ag.fieldSelectColor + " !important;color: #FFFFFF !important;}.ravesh-editor.active {border-color: " + ag.fieldSelectColor + " !important;}.form-field-picture .enabled .item input:focus + label,.form-field-picture .enabled .item input:active + label {border-color: " + ag.fieldSelectColor + " !important;}.form-field-picture .item.checked .check {background-color:" + ag.fieldSelectColor + " !important;}.ravesh-scale-rating .item:not(.disable) .number:hover,.ravesh-scale-rating .item.active .number{background: " + ag.fieldSelectColor + ";border-color: " + ag.fieldSelectColor + ";}</style>")
        }
    }
    function W(Z, Y) {
        if (typeof Y === "string") {
            Y = {
                content: Y
            }
        }
        var X = {
            content: "",
            textAlign: "justify",
            padding: 5,
            width: "auto"
        };
        Y = $.extend(X, Y);
        var aa;
        if (Y.content == "") {
            return Z
        }
        Z.mouseenter(function(ab) {
            aa = $("<div>").addClass("ravesh-tooltips").css({
                "text-align": Y.textAlign,
                padding: Y.padding,
                "min-width": Y.width
            }).html(Y.content.replace(/\\n/g, "<br/>").replace(/\n/g, "<br/>"));
            $("body").append(aa.hide());
            aa.css({
                "z-index": 2000,
                position: "absolute",
                top: Z.offset().top - aa.outerHeight() - 10,
                left: Z.offset().left - ((aa.outerWidth()) / 2) + (Z.outerWidth() / 2),
            }).hide().delay(100).fadeIn()
        }).mouseleave(function(ab) {
            if (aa) {
                aa.remove()
            }
        }).mousedown(function(ab) {
            if (aa) {
                aa.remove()
            }
        });
        return Z
    }
    function t(Y) {
        if (!Y.property) {
            return true
        }
        if (Y.property.limitTimeStatus) {
            var X = $("<div>").addClass("form-design-page").appendTo(v.getContainer().css({
                padding: 15
            }));
            if (Y.property.limitTimeStatus == "pending") {
                v.getFooter().hide();
                if (Y.property.showCountdownStart) {
                    X.append(f(Y.property.currentDateUTC, Y.property.dateStart, Y.property.lang))
                }
                X.append(Y.property.messageLimitDate);
                return false
            } else {
                if (Y.property.limitTimeStatus == "start") {
                    X.remove();
                    var Z = {
                        id: -1
                    };
                    var ab = g(Z, Y.property.currentDateUTC, Y.property.dateEnd, Y.property.lang, function(ac) {
                        if (ac && Y.property.autoSubmitIfTimeEnd) {
                            var ae = I.pages[I.pages.length - 1];
                            ae.setActivePage(ae);
                            $.each(I.pages, function(ag, ah) {
                                ah.container.hide()
                            });
                            var af = k ? ae.data.property.edit : ae.data.property.submit;
                            ae.container.after($("<div>").addClass("form-design-page").css({
                                "text-align": "center",
                                padding: "30px"
                            }).html(r("insert", "checkoutTime").replace(/\{0\}/g, af)));
                            v.getFooter().find(".ravesh-button").unbind();
                            v.getFooter().find(".ravesh-button.submit").click(function() {
                                O(null, true)
                            });
                            V()
                        } else {
                            var ad = new RaveshUI.MiniDialog();
                            ad.setContent($("<div>").css({
                                padding: 15
                            }).append(Y.property.messageLimitDate))
                        }
                    });
                    if (ab === false) {
                        return false
                    }
                    if (Y.property.showCountdownEnd) {
                        v.getToolbar().appendTo($("body").addClass("show-toolbar")).append(ab)
                    }
                    v.setOnSaveForm(function(ad, ae, ac) {
                        if (ad) {
                            ab.remove();
                            clearInterval(Z.id)
                        }
                    });
                    return true
                } else {
                    if (Y.property.limitTimeStatus == "end") {
                        v.getFooter().hide();
                        X.append(Y.property.messageLimitDate);
                        return false
                    } else {
                        if (Y.property.limitTimeStatus == "pendingTime") {
                            var aa = "formSubmissionTiming_" + Y.property.domain + "_" + Y.form.id;
                            localStorage.removeItem(aa);
                            v.getFooter().hide();
                            X.append(Y.property.messageLimitTime);
                            $("<a>").appendTo(X).attr("href", "#").text(Y.property.lang == "fa" ? "شــروع" : "Start").css({
                                background: "#4CAF50",
                                color: "#fff",
                                "text-decoration": "none",
                                padding: "10px",
                                "max-width": "100px",
                                display: "block",
                                "text-align": "center",
                                margin: "30px auto",
                                "border-radius": "4px",
                                "font-size": "16px"
                            }).click(function() {
                                v.setExtraParamForSave("startTimer", Y.property.limitTime);
                                v.saveForm();
                                v.setOnSaveForm(function(ad, ae, ac) {
                                    localStorage.setItem(aa, ae);
                                    location.reload()
                                });
                                return false
                            });
                            return false
                        }
                    }
                }
            }
        }
        return true
    }
    function f(Z, aa, ah) {
        var ak = 1000
          , ai = ak * 60
          , ae = ai * 60
          , ab = ae * 24;
        var X = $("<div>").addClass("ravesh-countdown").css({
            "max-width": "500px",
            overflow: "hidden",
            margin: "auto",
            "line-height": "1",
            padding: "70px 0"
        });
        var Y = function(ao) {
            var ap = $("<div>").css({
                "font-size": 50
            }).text(FormUtility.numberLocalize("00", ah));
            return {
                ui: $("<div>").css({
                    "float": "left",
                    width: "25%",
                    "text-align": "center"
                }).append(ap, $("<div>").css({
                    "font-size": 25
                }).text(ao)),
                setTime: function(aq) {
                    ap.text(aq)
                }
            }
        };
        var ac = Y(ah == "fa" ? "روز" : "DAYS");
        var af = Y(ah == "fa" ? "ساعت" : "HOURS");
        var aj = Y(ah == "fa" ? "دقیقه" : "MINUTES");
        var al = Y(ah == "fa" ? "ثانیه" : "SECONDS");
        X.append(ac.ui, af.ui, aj.ui, al.ui);
        if (new Date(aa) == "Invalid Date" || isNaN(new Date(aa))) {
            return X
        }
        var an = new Date().getTime() - new Date(Z).getTime();
        var ad = new Date(aa).getTime() + an;
        am();
        var ag = setInterval(am, ak);
        function am() {
            var ao = ad - new Date().getTime();
            if (ao <= 0) {
                clearInterval(ag);
                X.after($("<a>").attr("href", "#").text(ah == "fa" ? "شــروع" : "Start").css({
                    background: "#4CAF50",
                    color: "#fff",
                    "text-decoration": "none",
                    padding: "10px",
                    "max-width": "100px",
                    display: "block",
                    "text-align": "center",
                    margin: "84px auto",
                    "border-radius": "4px",
                    "font-size": "16px"
                }).hide().fadeIn().click(function() {
                    location.reload()
                }));
                X.remove();
                return false
            }
            ac.setTime(FormUtility.numberLocalize(Math.floor(ao / (ab)), ah));
            af.setTime(FormUtility.numberLocalize(Math.floor((ao % (ab)) / (ae)), ah));
            aj.setTime(FormUtility.numberLocalize(Math.floor((ao % (ae)) / (ai)), ah));
            al.setTime(FormUtility.numberLocalize(Math.floor((ao % (ai)) / ak), ah))
        }
        return X
    }
    function g(ai, ab, ac, aj, Y) {
        var am = 1000
          , ak = am * 60
          , ag = ak * 60
          , ad = ag * 24;
        var Z = $("<div>").addClass("ravesh-countdown-small").css({
            "min-width": 160
        });
        var aa = function(aq) {
            var ar = $("<div>").css({
                "font-size": 15
            }).text(FormUtility.numberLocalize("00", aj));
            return {
                ui: $("<div>").css({
                    "float": "left",
                    width: "25%",
                    "text-align": "center",
                    padding: "0 5px",
                    "box-sizing": "border-box"
                }).append(ar, $("<div>").css({
                    "font-size": 11,
                    "padding-top": 3
                }).text(aq)),
                setTime: function(at) {
                    ar.text(at)
                }
            }
        };
        var ae = aa(aj == "fa" ? "روز" : "DAYS");
        var ah = aa(aj == "fa" ? "ساعت" : "HOURS");
        var al = aa(aj == "fa" ? "دقیقه" : "MINUTES");
        var an = aa(aj == "fa" ? "ثانیه" : "SECONDS");
        Z.append(ae.ui, ah.ui, al.ui, an.ui);
        if (new Date(ac) == "Invalid Date" || isNaN(new Date(ac))) {
            return Z
        }
        var ap = new Date(new Date().toUTCString().slice(0, -4)).getTime() - new Date(ab).getTime();
        var af = new Date(ac).getTime() + ap;
        var X = ao(true);
        if (X) {
            ai.id = setInterval(ao, am);
            return Z.hide().delay(500).slideDown()
        } else {
            return false
        }
        function ao(at) {
            var ar = (af) - (new Date(new Date().toUTCString().slice(0, -4)).getTime());
            if (ar <= 0) {
                clearInterval(ai.id);
                Z.css({
                    "line-height": "29px"
                }).html(aj == "fa" ? "اتمام زمان ثبت فرم" : "It's time to end the form");
                Y(!at);
                return false
            }
            var aq = Math.floor(ar / (ad));
            if (aq != 0) {
                ae.setTime(FormUtility.numberLocalize(aq), aj)
            } else {
                Z.css({
                    "min-width": 120
                });
                ae.ui.remove();
                ah.ui.css("width", "33.33%");
                al.ui.css("width", "33.33%");
                an.ui.css("width", "33.33%")
            }
            ah.setTime(FormUtility.numberLocalize(Math.floor((ar % (ad)) / (ag)), aj));
            al.setTime(FormUtility.numberLocalize(Math.floor((ar % (ag)) / (ak)), aj));
            an.setTime(FormUtility.numberLocalize(Math.floor((ar % (ak)) / am), aj));
            return true
        }
    }
}
(function() {
    var c = {};
    c.isMobile = (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent));
    c.isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    function a(f, e) {
        if (!f) {
            return ""
        }
        str = f.toString();
        if (e == "en") {
            return str
        }
        var g = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        for (var d = 0; d <= 9; d++) {
            str = str.replace(new RegExp(d,"g"), g[d])
        }
        return str
    }
    c.TimePicker = function(H) {
        var N = this;
        var p = {
            lang: "en",
            width: "auto",
            showCancel: true,
            clockMode: "analog",
            selectedTime: "",
            onSelected: function() {},
            onComplete: function() {}
        };
        H = $.extend(true, p, H || {});
        N.getUI = function() {
            return l
        }
        ;
        var K = {
            en: {
                am: "AM",
                pm: "PM",
                cancel: "Cancel"
            },
            fa: {
                am: "قظ",
                pm: "بظ",
                cancel: "انصراف"
            }
        };
        var V = n(H.selectedTime);
        var F = false;
        var A = false;
        var g = {
            hour: V.hour,
            min: V.min
        };
        var e = $("body");
        var l = $("<div>").addClass("ravesh-time-picker dir-" + (H.lang == "fa" ? "rtl" : "ltr"));
        l.css({
            width: H.width
        });
        var Y = $("<div>").addClass("clock-containerDigital").appendTo(l);
        var aa = $("<input>").attr({
            type: "text",
            maxlength: 2
        }).addClass("timeHourDigital");
        var X = $("<span>").addClass("colon").text(":");
        var ac = $("<input>").attr({
            type: "text",
            maxlength: 2
        }).addClass("timeMinDigital");
        Y.append(aa, X, ac);
        aa.click(function() {
            $(this).select()
        });
        ac.click(function() {
            $(this).select()
        });
        ac.bind("paste", function(s) {
            s.preventDefault()
        });
        aa.bind("paste", function(s) {
            s.preventDefault()
        });
        aa.change(function() {
            q(true)
        });
        aa.focusin(function() {
            P(true)
        });
        ac.focusin(function() {
            P(true)
        });
        aa.keyup(function() {
            q(true)
        });
        aa.blur(function() {
            P(true)
        });
        ac.blur(function() {
            P(false)
        });
        function P(s) {
            var ae = r(aa.val());
            var af = ac.val();
            if (af == "" || ae == "") {
                H.onSelected("")
            } else {
                if (s) {
                    S(parseInt(V.isAm ? ae : ae - 12))
                } else {
                    T(parseInt(r(af)))
                }
            }
        }
        ac.change(function() {
            q(false)
        });
        ac.keyup(function() {
            q(false)
        });
        function r(ag) {
            var af = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
            var s = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
            for (var ae = 0; ae < 10; ae++) {
                ag = ag.replace(af[ae], ae).replace(s[ae], ae)
            }
            return ag
        }
        function q(s) {
            var ae;
            if (s) {
                ae = aa.val()
            } else {
                ae = ac.val()
            }
            ae = r(ae);
            if (s) {
                if (!(/^(2[0-3]|[01]?[0-9])$/.test(ae))) {
                    ae = ae.slice(0, -1)
                }
                if (ae >= 12) {
                    O(false)
                } else {
                    O(true)
                }
                aa.val(ae);
                if (ae != "") {
                    S(parseInt(V.isAm ? ae : ae - 12))
                } else {
                    H.onSelected("")
                }
            } else {
                if (!(/^([0-5]?[0-9])$/.test(ae))) {
                    ae = ae.slice(0, -1)
                }
                ac.val(ae);
                if (ae != "") {
                    T(parseInt(r(ae)))
                } else {
                    H.onSelected("")
                }
            }
        }
        var ad = $("<div>").addClass("preview").appendTo(l);
        var Z = $("<span>").addClass("hour");
        var ab = $("<span>").addClass("min");
        var W = $("<span>").addClass("colon").text(":");
        ad.append(Z, W, ab);
        Z.click(function() {
            U(false)
        });
        ab.click(function() {
            U(true)
        });
        var k = $("<div>").addClass("clock-container").appendTo(l);
        var j = $("<div>").addClass("clock").appendTo(k);
        var x = $("<div>").addClass("hour").appendTo(j);
        for (var y = 0; y < 12; y++) {
            var u = $("<div>").addClass("num").text(G(y == 0 ? 12 : y));
            u.css("transform", "rotate(" + (y * 30) + "deg) translateY(-80px) rotate(-" + (y * 30) + "deg)");
            x.append(u)
        }
        var w = $("<div>").addClass("handle-bar");
        var v = $("<div>").addClass("handle");
        x.append(w, v);
        var E = $("<div>").addClass("min").appendTo(j);
        var M = 0;
        for (var y = 0; y < 12; y++) {
            var B = $("<div>").addClass("num").text(G(M));
            B.css("transform", "rotate(" + (y * 30) + "deg) translateY(-78px) rotate(-" + (y * 30) + "deg)");
            E.append(B);
            M = M + 5
        }
        var D = $("<div>").addClass("handle-bar");
        var C = $("<div>").addClass("handle");
        E.append(D, C);
        if (H.showCancel) {
            var f = $("<span>").text(K[H.lang].cancel);
            l.append($("<div>").addClass("cancel").append(f));
            f.click(function() {
                H.onSelected("");
                H.onComplete()
            })
        }
        var d = $("<div>").addClass("am-btn").text(K[H.lang].am);
        var J = $("<div>").addClass("pm-btn").text(K[H.lang].pm);
        k.append(d, J);
        if (H.clockMode == "digital") {
            ad.hide();
            j.hide();
            k.addClass("digital");
            d.addClass("digital");
            J.addClass("digital")
        } else {
            Y.hide()
        }
        d.click(function() {
            O(true);
            Q()
        });
        J.click(function() {
            O(false);
            Q()
        });
        var z = true;
        O(V.isAm);
        U(false, true);
        Q();
        z = false;
        e.bind(c.isMobile ? "touchend" : "mouseup", function(s) {
            if (F) {
                if (!A) {
                    U(true)
                } else {
                    H.onComplete()
                }
            }
            F = false
        });
        e.bind("mousemove touchmove", function(s) {
            t(s)
        });
        j.bind("mousedown touchstart", function(s) {
            F = true;
            t(s)
        });
        function Q() {
            aa.val(G(V.isAm ? V.hour : V.hour + 12));
            ac.val(G(V.min))
        }
        function U(s, ae) {
            A = s;
            Z.toggleClass("active", !s);
            ab.toggleClass("active", s);
            if (ae) {
                x.toggle(!s);
                E.toggle(s)
            } else {
                if (s) {
                    x.stop(true).fadeOut()
                } else {
                    x.stop(true).fadeIn()
                }
                if (!s) {
                    E.stop(true).fadeOut()
                } else {
                    E.stop(true).fadeIn()
                }
            }
        }
        function O(s) {
            V.isAm = s;
            d.toggleClass("active", s);
            J.toggleClass("active", !s);
            S(V.hour);
            T(V.min);
            U(false)
        }
        function S(s) {
            V.hour = s == 12 ? 0 : s;
            R(w, v, V.hour, V.hour == 0 ? 12 : V.hour);
            Z.text(G(V.isAm ? V.hour : V.hour + 12));
            if (!z) {
                H.onSelected(o())
            }
            if (g.hour != V.hour) {
                g.hour = V.hour;
                window.navigator.vibrate(50)
            }
        }
        function T(s) {
            V.min = s == 60 ? 0 : s;
            R(D, C, V.min / 5, V.min == 60 ? 0 : V.min);
            ab.text(G(V.min));
            if (!z) {
                H.onSelected(o())
            }
            if (g.min != V.min) {
                g.min = V.min;
                window.navigator.vibrate(20)
            }
        }
        function R(af, ae, ah, ag) {
            var s = ah * 30;
            ae.text(G(ag)).css({
                transform: "rotate(" + (s).toFixed(20) + "deg) translateY(-78px) rotate(-" + (s).toFixed(20) + "deg)"
            });
            af.css({
                transform: "rotate(" + (s).toFixed(20) + "deg)"
            })
        }
        function t(ae) {
            if (!F) {
                return
            }
            var ai = Math.floor(ae.pageX)
              , aj = Math.floor(ae.pageY);
            if (ae.originalEvent && ae.originalEvent.targetTouches) {
                var ah = ae.originalEvent.targetTouches.item(0);
                ai = ah.pageX;
                aj = ah.pageY
            } else {
                ae.preventDefault()
            }
            var ag = k.offset();
            var s = {
                left: k.outerWidth() / 2 + ag.left,
                top: k.outerHeight() / 2 + ag.top
            };
            var af = Math.atan2(aj - s.top, ai - s.left) / Math.PI * 6 + 3;
            af += 12;
            af %= 12;
            if (A) {
                T(Math.round(af * 5))
            } else {
                S(Math.round(af))
            }
        }
        function o() {
            return I(V.isAm ? V.hour : V.hour + 12) + ":" + I(V.min)
        }
        function n(ag) {
            var ae = 0
              , af = 0;
            if (ag == "") {
                var s = new Date();
                ae = s.getHours();
                af = s.getMinutes()
            } else {
                ae = parseInt(ag.split(":")[0]);
                af = parseInt(ag.split(":")[1])
            }
            return {
                hour: ae > 12 ? ae - 12 : ae,
                min: af,
                isAm: ae < 12
            }
        }
        function G(s) {
            return a(I(s), H.lang)
        }
        function I(s) {
            return parseInt(s) < 10 && parseInt(s) >= 0 ? "0" + s.toString() : s.toString()
        }
    }
    ;
    c.DropDown = function(B) {
        var G = this;
        var o = {
            width: 180,
            maxHeight: 300,
            maxWidth: 300,
            dir: "ltr",
            allowSearch: true,
            arrow: true,
            selectText: true,
            searchById: false,
            createContent: j,
            ajaxUrl: "",
            getAjaxParam: function(R) {
                return {
                    key: R
                }
            },
            getAjaxParamPostExtra: true,
            options: [],
            emptyId: "",
            emptyOption: null,
            defaultId: "",
            defaultTitle: "",
            createOptionUI: l,
            createOptionUIBefore: n,
            onSelected: function(R) {},
            onClick: function() {}
        };
        B = $.extend(true, o, B || {});
        G.getUI = function() {
            return g
        }
        ;
        G.getInput = function() {
            return v
        }
        ;
        G.getSelectedOption = function() {
            return D
        }
        ;
        G.setDisable = H;
        G.setSelectedById = O;
        G.setSelected = N;
        G.setWidth = P;
        G.setOptions = K;
        G.showLoading = Q;
        G.hideLoading = s;
        G.setMenuPosition = I;
        G.addClass = d;
        G.removeClass = C;
        var u = "ravesh_" + Math.random().toString(36).substr(2, 10);
        var g = $("<div>").addClass("ravesh-dropdown dir-" + B.dir + " " + u).css({
            width: B.width
        });
        var v = $("<input>").attr({
            type: "text",
            readonly: !B.allowSearch
        }).appendTo(g);
        var z, e = [];
        var D = r(B.defaultId);
        if (B.defaultTitle != "") {
            D = {
                title: B.defaultTitle,
                id: B.defaultId
            }
        }
        var E = -1;
        var w = false;
        var p = false;
        var x = -1;
        v.val(D.title);
        if (B.arrow) {
            var f = $("<span>").addClass("arrow").appendTo(g);
            f.click(function() {
                if (v.attr("disabled")) {
                    return false
                }
                if (z == null) {
                    G.showMenu()
                } else {
                    G.hideMenu()
                }
            })
        } else {
            g.addClass("no-arrow")
        }
        v.focus(function(R) {
            if (B.allowSearch && B.selectText) {
                v.select()
            }
            G.showMenu();
            p = true;
            B.onClick()
        });
        v.click(function() {
            if (p) {
                p = false;
                return false
            }
            if (!B.allowSearch && g.hasClass("active")) {
                G.hideMenu()
            } else {
                G.showMenu();
                B.onClick()
            }
        });
        v.blur(function() {
            if (!w) {
                G.hideMenu()
            }
        });
        v.keyup(function(R) {
            if (R.keyCode == 40) {
                if (e.length - 1 > E) {
                    F(++E)
                }
            } else {
                if (R.keyCode == 38) {
                    if (E > 0) {
                        F(--E)
                    }
                } else {
                    if (R.keyCode == 13) {
                        if (E != -1) {
                            F(E);
                            G.hideMenu();
                            v.blur()
                        }
                    } else {
                        if (R.keyCode != 9) {
                            var S = v.val().trim().toLowerCase();
                            E = -1;
                            D = {};
                            if (B.ajaxUrl != "") {
                                q(S);
                                k(B.options)
                            } else {
                                if (B.options.length > 0) {
                                    k($.grep(B.options, function(T) {
                                        return T.title.toString().toLowerCase().indexOf(S) != -1 || (B.searchById && T.id.toString().indexOf(S) != -1)
                                    }))
                                } else {
                                    D = {
                                        id: S,
                                        title: S
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        G.showMenu = function() {
            if (z != null) {
                return false
            }
            z = $("<div>").addClass("ravesh-dropdown-menu open lang-" + B.lang + " " + u).attr("dir", B.dir).appendTo($("body"));
            z.css({
                "min-width": g.width(),
                "max-width": B.maxWidth,
                "max-height": B.maxHeight
            });
            q(null);
            k(B.options);
            g.addClass("active");
            $(document).bind("mousedown", t);
            if (!c.isMobile) {
                window.addEventListener("scroll", t, true);
                window.addEventListener("resize", t)
            } else {
                window.addEventListener("scroll", I);
                window.addEventListener("resize", I)
            }
            z.bind("mousewheel", A);
            z.bind("DOMMouseScroll", A);
            x = D.id
        }
        ;
        G.hideMenu = function(R) {
            w = true;
            v.blur();
            if (z == null) {
                return false
            }
            E = -1;
            w = false;
            g.removeClass("active");
            if (D.title == null) {
                var S = $.grep(B.options, function(T) {
                    return T.id == B.emptyId
                });
                if (S.length != 0) {
                    D = S[0]
                }
                if (B.emptyOption) {
                    D = B.emptyOption
                }
                if (B.ajaxUrl != "") {
                    B.options = []
                }
            }
            v.val(D.title);
            clearTimeout(G.ajaxTimeout);
            $(document).unbind("mousedown", t);
            window.removeEventListener("scroll", t);
            window.removeEventListener("resize", t);
            z.unbind("mousewheel", A);
            z.unbind("DOMMouseScroll", A);
            if (x != D.id) {
                B.onSelected(D)
            }
            if (R) {
                z.fadeOut(200, function() {
                    z.remove();
                    z = null
                })
            } else {
                z.remove();
                z = null
            }
        }
        ;
        function t(R) {
            if ($(R.target).hasClass(u) == false && $(R.target).parents("." + u).length == 0) {
                G.hideMenu()
            } else {
                w = true
            }
        }
        function I() {
            if (z == null) {
                return false
            }
            var S;
            var T;
            var R = g.outerHeight();
            var V;
            var Y = $(window).height();
            var W = z.outerHeight();
            var U;
            var X = 0;
            if (!c.isIos) {
                S = g[0].getBoundingClientRect().left;
                T = g[0].getBoundingClientRect().top;
                z.css({
                    position: "fixed"
                })
            } else {
                S = g.offset().left;
                T = g.offset().top
            }
            V = S;
            if (B.dir == "rtl") {
                V = S - z.width() + g.width();
                if (c.isIos) {
                    V = V - 2
                }
                if (V < 0) {
                    V = 0
                }
            }
            if (T + R + W <= Y) {
                U = true
            } else {
                if (T - W >= 0) {
                    U = false
                } else {
                    if (T > Y - (T + R)) {
                        X = T - 5;
                        U = false
                    } else {
                        X = Math.abs(T + R - Y) - 5;
                        U = true
                    }
                }
            }
            z.css({
                left: V
            });
            if (X > 0) {
                z.css({
                    "max-height": X
                });
                W = X
            }
            if (!U) {
                z.css({
                    left: V,
                    top: T - W - 3
                })
            } else {
                z.css({
                    left: V,
                    top: T + R + 3
                })
            }
        }
        function J() {
            if (!c.isIos) {
                var R = g[0].getBoundingClientRect();
                var S = R.left;
                if (B.dir == "rtl") {
                    S = R.left - z.width() + g.width()
                }
                if (R.top + g.outerHeight() + z.outerHeight() > $(window).height() && R.top - z.outerHeight() > 0) {
                    z.css({
                        position: "fixed",
                        left: S,
                        top: R.top - z.outerHeight() - 3
                    })
                } else {
                    z.css({
                        position: "fixed",
                        left: S,
                        top: R.top + g.outerHeight() + 3
                    })
                }
            } else {
                var S = g.offset().left;
                if (B.dir == "rtl") {
                    S = g.offset().left - z.width() + g.width() - 2
                }
                if (g.offset().top + g.outerHeight() + z.outerHeight() > $(window).height() && g.offset().top - z.outerHeight() > 0) {
                    z.css({
                        left: S,
                        top: g.offset().top - z.outerHeight() - 3
                    })
                } else {
                    z.css({
                        left: S,
                        top: g.offset().top + g.outerHeight() + 3
                    })
                }
            }
        }
        function q(R) {
            if (R != null) {
                B.options = []
            }
            if (B.ajaxUrl == "") {
                return false
            }
            if (B.options.length != 0) {
                return false
            }
            B.options = [{
                id: "ajaxLoading",
                title: ""
            }];
            clearTimeout(G.ajaxTimeout);
            G.ajaxTimeout = setTimeout(function() {
                FormUtility[B.getAjaxParamPostExtra ? "postExtra" : "post"](B.ajaxUrl, B.getAjaxParam(R || ""), function(T, U, S) {
                    B.options = B.emptyOption ? [B.emptyOption] : [];
                    if (T) {
                        B.options = B.options.concat(S);
                        k(B.options)
                    }
                    k(B.options)
                })
            }, R == null ? 10 : 800)
        }
        var y;
        function Q() {
            if (y == null) {
                y = $("<div>").addClass("loading").append($("<div>").addClass("spinner2 small"));
                g.append(y);
                v.attr("disabled", true);
                if (B.arrow) {
                    f.hide()
                }
            }
        }
        function s() {
            if (y != null) {
                y.remove();
                y = null;
                if (!g.hasClass("disabled")) {
                    v.attr("disabled", false)
                }
                if (B.arrow) {
                    f.show()
                }
            }
        }
        function P(R) {
            B.width = R;
            g.css("width", R)
        }
        function d(R) {
            g.addClass(R)
        }
        function C(R) {
            g.removeClass(R)
        }
        function H(R) {
            v.attr("disabled", R);
            g.toggleClass("disabled", R)
        }
        function k(S) {
            if (z == null) {
                return false
            }
            var R = B.createContent();
            z.toggle(S.length != 0 || R != "");
            z.html(R);
            e = [];
            $.each(S, function(T, U) {
                var W = B.createOptionUI(U);
                var V = $("<div>").addClass("option" + (U.id == D.id ? " selected" : "")).html(W);
                V.click(function() {
                    F(T);
                    G.hideMenu()
                });
                if (U.id == "ajaxLoading") {
                    V = $("<div>").addClass("ajaxLoading").append($("<div>").addClass("spinner2 small")).css({
                        padding: 15
                    })
                }
                z.append(B.createOptionUIBefore(U));
                z.append(V);
                if (W.outerWidth() >= z.outerWidth()) {
                    W.attr("title", U.title)
                }
                W.css("display", "block");
                e.push({
                    ui: V,
                    data: U
                });
                if (U.id == D.id) {
                    E = T;
                    M(V)
                }
            });
            I()
        }
        function l(R) {
            return $("<div>").addClass("single-line").text(R.title)
        }
        function n(R) {
            return ""
        }
        function j() {
            return ""
        }
        function F(R) {
            z.find(".selected").removeClass("selected");
            e[R].ui.addClass("selected");
            M(e[R].ui);
            var S = e[R].data;
            E = R;
            D = S;
            v.val(S.title)
        }
        function r(S) {
            var R = $.grep(B.options, function(T) {
                return T.id == S
            });
            return R.length > 0 ? R[0] : {}
        }
        function O(R) {
            D = r(R);
            v.val(D.title)
        }
        function N(S, R) {
            D = S;
            v.val(D.title);
            if (R) {
                B.onSelected(D)
            }
        }
        function K(T, S) {
            B.options = T;
            if (S) {
                return false
            }
            var R = $.grep(B.options, function(U) {
                return U.id == B.emptyId
            });
            if (R.length != 0) {
                D = R[0]
            }
            v.val(D.title)
        }
        function M(R) {
            var T = R[0].offsetTop;
            var S = R.outerHeight();
            if (T - z[0].scrollTop < 0) {
                z[0].scrollTop = T
            }
            if ((T + S) - z[0].scrollTop > z.height()) {
                z[0].scrollTop = (T + S) - z.height()
            }
        }
        function A(S) {
            var R = (S.type === "mousewheel") ? S.wheelDelta : S.detail * -40;
            if (R < 0 && (this.scrollHeight - this.offsetHeight - this.scrollTop) <= 0) {
                this.scrollTop = this.scrollHeight;
                S.preventDefault()
            } else {
                if (R > 0 && R > this.scrollTop) {
                    this.scrollTop = 0;
                    S.preventDefault()
                }
            }
        }
    }
    ;
    c.Menu = function(e, k) {
        var l = this;
        var g = "ravesh_" + Math.random().toString(36).substr(2, 10);
        var j;
        var d = {
            appendTo: $("body"),
            content: "",
            options: [],
            align: "left",
            verticalAlign: "bottom",
            removeAfterHide: true,
            cssClass: "",
            hideUnlessCssClass: [],
            marginTop: 4,
            onOpen: function() {}
        };
        k = $.extend(true, d, k || {});
        l.setOnOpen = function(n) {
            k.onOpen = n
        }
        ;
        l.getMenu = function() {
            return j
        }
        ;
        e.addClass("elem" + g);
        e.click(function(n) {
            if (e.hasClass("disable")) {
                return false
            }
            if (!e.hasClass("active")) {
                l.show()
            } else {
                l.hide()
            }
            n.stopPropagation();
            return false
        });
        l.show = function() {
            if (k.removeAfterHide || !j) {
                j = $("<div>").addClass("ravesh-menu open " + g + " " + k.cssClass).append(k.content);
                $.each(k.options, function(p, q) {
                    if (q.isLine) {
                        j.append($("<div>").addClass("line"))
                    } else {
                        if (q.isLink) {
                            var n = $("<a>").addClass("option" + (q.className ? " " + q.className : "")).append($("<span>").append(q.title), q.cssIcon ? $("<i>").css("color", q.iconColor).addClass("float-right " + q.cssIcon) : "");
                            n.attr({
                                href: q.href,
                                target: (q.target == null ? "_self" : q.target)
                            });
                            n.click(function() {
                                l.hide()
                            });
                            j.append(n)
                        } else {
                            var n = $("<div>").addClass("option" + (q.className ? " " + q.className : "")).append($("<span>").append(q.title), q.cssIcon ? $("<i>").css("color", q.iconColor).addClass("float-right " + q.cssIcon) : "");
                            n.click(function(o) {
                                q.callback(o);
                                l.hide()
                            });
                            j.append(n)
                        }
                    }
                });
                k.appendTo.append(j)
            } else {
                j.show()
            }
            e.addClass("active");
            l.refreshPosition();
            k.onOpen();
            $(document).bind("mousedown", f)
        }
        ;
        l.hide = function() {
            if (j) {
                if (k.removeAfterHide) {
                    j.remove()
                } else {
                    j.hide()
                }
            }
            e.removeClass("active");
            $(document).unbind("mousedown", f)
        }
        ;
        l.refreshPosition = function() {
            if (!j) {
                return false
            }
            var n = e.offset();
            var o = n.left;
            if (k.align == "right") {
                o = n.left - j.width() + e.outerWidth() - 2
            }
            if (k.align == "auto") {
                if (o > ($(window).width() / 2)) {
                    o = n.left - j.width() + e.outerWidth() - 2
                }
            }
            var p = n.top + e.outerHeight() + k.marginTop - k.appendTo.offset().top;
            if (k.verticalAlign == "top") {
                p = n.top - k.marginTop - j.height() - k.appendTo.offset().top
            }
            j.css({
                left: o - k.appendTo.offset().left,
                top: p
            })
        }
        ;
        l.setOptions = function(n) {
            k.options = n
        }
        ;
        function f(n) {
            if ($(n.target).parents(".elem" + g).length != 0 || $(n.target).hasClass("elem" + g)) {
                return false
            }
            for (var o = 0; o <= k.hideUnlessCssClass.length - 1; o++) {
                if ($(n.target).parents("." + k.hideUnlessCssClass[o]).length != 0 || $(n.target).hasClass(k.hideUnlessCssClass[o])) {
                    return
                }
            }
            if ($(n.target).parents("." + g).length == 0) {
                l.hide()
            }
        }
    }
    ;
    c.DrillDown = function(n) {
        var o = this;
        var j = {
            options: {},
            dir: "ltr",
            width: 180,
            getChildOptions: l,
            createOptionUI: g,
            onSelected: function(p) {},
            onlySelectChilds: false
        };
        n = $.extend(true, j, n || {});
        var e = $("<div>").addClass("ravesh-drill-down");
        var d = new Array();
        var k = new c.DropDown({
            dir: n.dir,
            width: n.width,
            onSelected: n.onSelected,
            allowSearch: false,
            createContent: function() {
                e.empty();
                d = new Array();
                f();
                return e
            }
        });
        o.getUI = k.getUI;
        o.setSelected = k.setSelected;
        o.getSelectedOption = k.getSelectedOption;
        o.setDisable = k.setDisable;
        o.setWidth = k.setWidth;
        o.addClass = k.addClass;
        o.removeClass = k.removeClass;
        function f(s) {
            if (s == null) {
                s = n.options
            }
            e.find(".ravesh-drill-down-panel").hide();
            d.push(s);
            if (e.find(".panel-num-" + s.id).show().length != 0) {
                return false
            }
            var t = $("<div>").addClass("ravesh-drill-down-panel panel-num-" + s.id).appendTo(e);
            var q = $("<div>").addClass("ravesh-drill-down-panel-head").appendTo(t);
            var p = $("<div>").addClass("ravesh-drill-down-panel-content").appendTo(t);
            var u = $("<div>").addClass("ravesh-drill-down-panel-title").text(s.title);
            $.each(d, function(v, w) {
                if (s == w) {
                    return false
                }
                var x = $("<a>").attr({
                    href: "#"
                }).addClass("ravesh-link ravesh-drill-down-breadcrumb").text(w.title);
                x.click(function() {
                    var z = new Array();
                    for (var y in d) {
                        if (w == d[y]) {
                            break
                        } else {
                            z.push(d[y])
                        }
                    }
                    d = z;
                    f(w);
                    return false
                });
                q.append(x);
                q.addClass("has-breadcrumb")
            });
            q.append(u);
            var r = $("<div>").css({
                "text-align": "center",
                padding: 10
            }).append($("<div>").addClass("spinner2 small")).appendTo(e);
            n.getChildOptions(s, function(v) {
                r.remove();
                $.each(v, function(w, x) {
                    p.append(n.createOptionUI(x))
                })
            })
        }
        function l(q, p) {
            p(q.childs)
        }
        function g(q) {
            var s = $("<div>").addClass("drill-down-option" + (q.hasChild ? " hasChild" : ""));
            var r = $("<a>").attr({
                href: "#"
            }).addClass("drill-down-option-title").text(q.title).appendTo(s);
            if (n.onlySelectChilds) {
                s.addClass("only-select-child");
                r.click(function() {
                    if (q.hasChild) {
                        f(q)
                    } else {
                        k.setSelected(q);
                        k.hideMenu()
                    }
                    return false
                });
                if (q.hasChild) {
                    $("<span>").addClass("drill-down-option-child").append($("<span>")).click(function() {
                        r.click()
                    }).appendTo(s)
                }
            } else {
                r.click(function() {
                    k.setSelected(q);
                    k.hideMenu();
                    return false
                });
                if (q.hasChild) {
                    var p = $("<a>").attr({
                        href: "#"
                    }).addClass("drill-down-option-child").append($("<span>")).appendTo(s);
                    p.click(function() {
                        f(q);
                        return false
                    })
                }
            }
            return s
        }
    }
    ;
    c.Editor = function(o) {
        var r = this;
        var p = {
            en: {
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                fontsize: "Font size",
                font: "Font",
                justifyright: "Justify right",
                justifycenter: "Justify center",
                justifyleft: "Justify left",
                color: "Color",
                forecolor: "Fore color",
                backgroundColor: "Background color",
                emoticon: "Emoticon",
                redo: "Redo",
                undo: "Undo",
                link: "Insert link",
                image: "Insert image",
                table: "Insert table",
                full: "Full Screen",
                html: "HTML",
                linkUrl: "URL",
                linkText: "Text",
                add: "Add",
                imageUrl: "Image url",
                math: "math formula",
                ok: "Ok",
                cancel: "Cancel"
            },
            fa: {
                bold: "ضخیم",
                italic: "خط کج",
                underline: "خط زیر",
                strikethrough: "خط رو",
                fontsize: "اندازه قلم",
                font: "قلم",
                justifyright: "راست چین",
                justifycenter: "وسط چین",
                justifyleft: "چپ چین",
                color: "رنگ",
                forecolor: "رنگ متن",
                backgroundColor: "رنگ زمینه",
                emoticon: "شکلک",
                redo: "برگشت به حالت بعد",
                undo: "برگشت به حالت قبل",
                link: "افزودن لینک",
                image: "افزودن تصویر",
                table: "افزودن جدول",
                full: "بزرگنمایی",
                restoreFull: "بازگشت به حالت قبل",
                html: "HTML",
                linkUrl: "آدرس اینترنتی",
                linkText: "متن لینک",
                add: "افزودن",
                imageUrl: "آدرس اینترنتی تصویر",
                math: "فرمول ریاضی",
                ok: "تایید",
                cancel: "انصراف"
            }
        };
        var l = {
            lang: "en",
            minHeight: 200,
            width: "auto",
            caller: "",
            onChange: function() {},
            onHtmlEditor: function(w) {},
            autoSetDirection: true,
            allowChangeFont: true,
            items: ["bold", "italic", "underline", "strikethrough", "split", "fontsize", "font", "split", "justifyright", "justifycenter", "justifyleft", "split", "color", "emoticon", "split", "redo", "undo"],
            advanceItem: true,
            advanceItems: ["split", "math", "split", "link", "image", "table", "split", "full", "html"],
            emoticon: ["😀", "😂", "😅", "😃", "😇", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🙄", "🤔", "😐", "😵", "🤑", "😲", "😩", "🙁", "😭", "🙂", "😬", "😱", "😨"],
            colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#cccccc", "#888888", "#000000"]
        };
        o = $.extend(true, l, o || {});
        if (!o.allowChangeFont) {
            o.items.splice(o.items.indexOf("font"), 1)
        }
        var e = $("<div>").addClass("ravesh-editor").attr("dir", o.lang == "fa" ? "rtl" : "ltr").css({
            width: o.width
        });
        var t = $("<div>").addClass("ravesh-editor-toolbar");
        var v = $("<div>").css("overflow", "hidden").appendTo(t);
        var s = $("<div>").addClass("ravesh-editor-subtoolbar").appendTo(t).hide();
        var f = $("<div>").addClass("ravesh-editor-content").css({
            "min-height": o.minHeight,
            "text-align": o.lang == "fa" ? "right" : "left"
        }).attr("contenteditable", true);
        var g = $("<textarea>").addClass("ravesh-editor-content-html").css({
            "min-height": o.minHeight
        }).attr({
            wrap: "off"
        });
        e.append(t, f, g);
        var u = {};
        r.getUI = function() {
            return e
        }
        ;
        r.val = function(y) {
            if (y != null) {
                f.html(y)
            } else {
                var w = "";
                if (e.hasClass("html-editor")) {
                    w = g.val()
                } else {
                    w = f.html()
                }
                var x = new RegExp("<[^>]*script?.>|<!--[\\s\\S]*?-->","g");
                if (w.match(x) != null) {
                    w = w.replace(x, "")
                }
                if (w.indexOf("ravesh-editor-html") == -1 && w != "" && o.autoSetDirection) {
                    w = '<div class="ravesh-editor-html" style="direction:' + (o.lang == "fa" ? "rtl" : "ltr") + '">\n' + w + "\n</div>\n"
                }
                return w
            }
        }
        ;
        r.insertHtml = n;
        r.setDisable = function(w) {
            f.attr("contenteditable", !w);
            e.toggleClass("disabled", w)
        }
        ;
        r.setSubToolbar = function(w) {
            s.html(w).show()
        }
        ;
        r.setOnHtmlEditor = function(w) {
            o.onHtmlEditor = w
        }
        ;
        r.setHeight = function(w) {
            f.css("min-height", w);
            g.css("min-height", w)
        }
        ;
        r.autoSetDirection = function(w) {
            o.autoSetDirection = w
        }
        ;
        var k = function() {
            var w = function(z, y) {
                if (z == "split") {
                    return $("<div>").addClass(z)
                } else {
                    var A = $("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: p[o.lang][z]
                    }).addClass("item " + z).append($("<div>"));
                    if (z == "undo" || z == "redo") {
                        A.addClass("disable")
                    }
                    u[z] = A;
                    A.click(y);
                    return A
                }
            };
            var x = o.items;
            if (o.advanceItem) {
                x = o.items.concat(o.advanceItems)
            }
            $.each(x, function(y, z) {
                v.append(w(z, function() {
                    if (e.hasClass("disabled") || u[z].hasClass("disable")) {
                        return false
                    }
                    if (e.hasClass("html-editor") && z != "html") {
                        return false
                    }
                    if (z == "undo" || z == "redo") {
                        f.focus();
                        document.execCommand(z, false);
                        u.redo.toggleClass("disable", !document.queryCommandEnabled("redo"));
                        u.undo.toggleClass("disable", !document.queryCommandEnabled("undo"));
                        o.onChange()
                    } else {
                        if (z == "emoticon") {
                            var Q = $("<div>").addClass("menu-emoticon");
                            var P = new j("emoticon",Q);
                            $.each(o.emoticon, function(W, Y) {
                                var X = $("<span>").text(Y).appendTo(Q);
                                X.click(function() {
                                    n(Y)
                                })
                            })
                        } else {
                            if (z == "color") {
                                var Q = $("<div>").addClass("menu-color");
                                var P = new j("color",Q);
                                var E = "forecolor";
                                var D = $("<div>").addClass("color-button active").text(p[o.lang].forecolor).click(function() {
                                    E = "forecolor";
                                    C.removeClass("active");
                                    D.addClass("active")
                                }).appendTo(Q);
                                var C = $("<div>").addClass("color-button").text(p[o.lang].backgroundColor).click(function() {
                                    E = "backcolor";
                                    C.addClass("active");
                                    D.removeClass("active")
                                }).appendTo(Q);
                                $.each(o.colors, function(W, Y) {
                                    var X = $("<span>").css({
                                        background: Y
                                    }).appendTo(Q);
                                    X.click(function() {
                                        P.close();
                                        q();
                                        document.execCommand(E, false, Y);
                                        o.onChange()
                                    })
                                })
                            } else {
                                if (z == "fontsize") {
                                    var Q = $("<div>").addClass("menu-fontsize");
                                    var P = new j("fontsize",Q);
                                    var T = [8, 10, 12, 14, 18, 24];
                                    $.each(T, function(X, Y) {
                                        var W = $("<div>").text(X + 1).css({
                                            "font-size": Y,
                                            "line-height": Y + 10 + "pt"
                                        }).appendTo(Q);
                                        W.click(function() {
                                            P.close();
                                            q();
                                            document.execCommand("styleWithCSS", false);
                                            document.execCommand("fontsize", false, X + 1);
                                            o.onChange()
                                        })
                                    })
                                } else {
                                    if (z == "font") {
                                        var Q = $("<div>").addClass("menu-font");
                                        var P = new j("font",Q);
                                        var I = [{
                                            id: "Times New Roman",
                                            title: "Times New Roman"
                                        }, {
                                            id: "tahoma",
                                            title: "Tahoma"
                                        }, {
                                            id: "arial",
                                            title: "Arial"
                                        }, {
                                            id: "georgia",
                                            title: "Georgia"
                                        }, {
                                            id: "impact",
                                            title: "Impact"
                                        }, {
                                            id: "verdona",
                                            title: "Verdona"
                                        }];
                                        if (o.lang == "fa") {
                                            if (formBuilder.isCRM) {
                                                I = [{
                                                    id: "IRANSansWeb",
                                                    title: "ایران سنس"
                                                }, {
                                                    id: "IRANSansWebFaNum",
                                                    title: "ایران سنس عدد فارسی"
                                                }, {
                                                    id: "BTitrBold",
                                                    title: "تیتر"
                                                }, {
                                                    id: "BKoodakBold",
                                                    title: "کودک"
                                                }, {
                                                    id: "BHoma",
                                                    title: "هما"
                                                }, {
                                                    id: "BYekan",
                                                    title: "یکان"
                                                }, {
                                                    id: "tahoma",
                                                    title: "تاهوما"
                                                }]
                                            } else {
                                                I = [{
                                                    id: "IRANSansWeb",
                                                    title: "ایران سنس"
                                                }, {
                                                    id: "IRANSansWebEnNum",
                                                    title: "ایران سنس عدد انگلیسی"
                                                }, {
                                                    id: "BTitrBold",
                                                    title: "تیتر"
                                                }, {
                                                    id: "BKoodakBold",
                                                    title: "کودک"
                                                }, {
                                                    id: "BHoma",
                                                    title: "هما"
                                                }, {
                                                    id: "BYekan",
                                                    title: "یکان"
                                                }, {
                                                    id: "tahoma",
                                                    title: "تاهوما"
                                                }]
                                            }
                                        }
                                        $.each(I, function(Y, X) {
                                            var W = $("<div>").text(X.title).css({
                                                "font-family": X.id,
                                                "line-height": "25pt",
                                                padding: "0px 5px"
                                            }).appendTo(Q);
                                            W.click(function() {
                                                P.close();
                                                q();
                                                document.execCommand("styleWithCSS", false);
                                                document.execCommand("fontName", false, X.id);
                                                o.onChange()
                                            })
                                        })
                                    } else {
                                        if (z == "link") {
                                            var Q = $("<div>").css("width", 250);
                                            var P = new j(z,Q);
                                            var S = window.getSelection().toString();
                                            var N = $("<input>").addClass("ravesh-input").attr({
                                                type: "text",
                                                placeholder: p[o.lang].linkUrl
                                            }).css({
                                                "margin-bottom": 5,
                                                width: "100%",
                                                direction: "ltr"
                                            });
                                            var M = $("<input>").addClass("ravesh-input").attr({
                                                type: "text",
                                                placeholder: p[o.lang].linkText
                                            }).css({
                                                "margin-bottom": 5,
                                                width: "100%",
                                                direction: "ltr"
                                            });
                                            var B = $("<button>").addClass("ravesh-button save").text(p[o.lang].add).css("margin", 0);
                                            if (S == "") {
                                                Q.append(N, "<br>", M, "<br>", B)
                                            } else {
                                                Q.append(N, "<br>", B)
                                            }
                                            B.click(function() {
                                                var W = N.val().trim()
                                                  , X = M.val().trim();
                                                if (W == "") {
                                                    N.focus();
                                                    return false
                                                }
                                                if (X == "" && S == "") {
                                                    M.focus();
                                                    return false
                                                }
                                                P.close();
                                                if (S == "") {
                                                    n('<a href="' + W + '" target="_blank">' + X + "</a>")
                                                } else {
                                                    q();
                                                    document.execCommand("createlink", false, W);
                                                    o.onChange()
                                                }
                                            })
                                        } else {
                                            if (z == "image") {
                                                show_fileManager(1, function(W, X, Y) {
                                                    n('<img src="' + (X == "relative" ? W.relative_url : W.url) + '" style="width:' + (Y ? Y + "px" : "100%") + ';max-width:100%"/>')
                                                }, {
                                                    changeWidth: true,
                                                    caller: o.caller
                                                })
                                            } else {
                                                if (z == "table") {
                                                    var Q = $("<div>").addClass("menu-table");
                                                    var P = new j(z,Q);
                                                    var A = new Array();
                                                    var V = $("<div>").addClass("size-hint").text("0 X 0").appendTo(Q);
                                                    var U = $("<div>").addClass("square-wrapper").appendTo(Q);
                                                    for (var J = 1; J <= 10; J++) {
                                                        for (var O = 1; O <= 10; O++) {
                                                            (function() {
                                                                var X = J
                                                                  , W = O
                                                                  , Y = $("<div>").addClass("square").appendTo(U);
                                                                A.push({
                                                                    row: X,
                                                                    col: W,
                                                                    square: Y
                                                                });
                                                                Y.mouseenter(function(aa) {
                                                                    var Z = $.grep(A, function(ab) {
                                                                        return ab.row <= X && ab.col <= W
                                                                    });
                                                                    $.each(Z, function(ab, ac) {
                                                                        ac.square.addClass("hover")
                                                                    });
                                                                    V.text(X + " X " + W)
                                                                }).mouseleave(function(Z) {
                                                                    U.find(".hover").removeClass("hover")
                                                                }).mousedown(function(Z) {
                                                                    P.close();
                                                                    n(F(X, W))
                                                                })
                                                            }
                                                            )()
                                                        }
                                                    }
                                                    function F(Z, W) {
                                                        var aa = '<table style="width:100%">\n';
                                                        for (var X = 1; X <= Z; X++) {
                                                            aa += "<tr>\n";
                                                            for (var Y = 1; Y <= W; Y++) {
                                                                aa += '<td style="border:solid 1px #ccc;">&nbsp;</td>\n'
                                                            }
                                                            aa += "</tr>\n"
                                                        }
                                                        aa += "</table>";
                                                        return aa
                                                    }
                                                } else {
                                                    if (z == "html") {
                                                        if (e.hasClass("html-editor")) {
                                                            if (f.html() != g.val()) {
                                                                r.val(g.val() || "");
                                                                o.onChange()
                                                            }
                                                            $.each(u, function(W, X) {
                                                                X.removeClass("disable")
                                                            });
                                                            e.find(".custom-icon").removeClass("disable");
                                                            f.focus();
                                                            o.onHtmlEditor(false);
                                                            e.removeClass("html-editor")
                                                        } else {
                                                            g.val(r.val());
                                                            $.each(u, function(W, X) {
                                                                if (W != "html") {
                                                                    X.addClass("disable")
                                                                }
                                                            });
                                                            e.find(".custom-icon").addClass("disable");
                                                            g.focus();
                                                            o.onHtmlEditor(true);
                                                            e.addClass("html-editor")
                                                        }
                                                    } else {
                                                        if (z == "full") {
                                                            if (e.hasClass("full-screen")) {
                                                                e.removeClass("full-screen");
                                                                u[z].attr("title", p[o.lang].full);
                                                                $("body").removeClass("overflowHidden")
                                                            } else {
                                                                e.addClass("full-screen");
                                                                g.css("top", t.outerHeight());
                                                                f.css("top", t.outerHeight());
                                                                u[z].attr("title", p[o.lang].restoreFull);
                                                                $("body").addClass("overflowHidden")
                                                            }
                                                        } else {
                                                            if (z == "math") {
                                                                var H = $("<div>").css({
                                                                    padding: "0 15px"
                                                                });
                                                                var G = RaveshUI.showDialog({
                                                                    title: p[o.lang].math,
                                                                    allowMaximum: true,
                                                                    minWidth: "90%",
                                                                    closeMethods: ["escape"]
                                                                });
                                                                G.addFooterButton(p[o.lang].ok, "submit float", R);
                                                                G.addFooterButton(p[o.lang].cancel, "float");
                                                                G.setContent(H);
                                                                var K = $('<iframe style="width:100%;height:500px" src="/Themes/resources/scripts/VisualMathEditor/VisualMathEditor.html"></iframe>');
                                                                H.append(K);
                                                                function R() {
                                                                    var Y = $(K[0].contentWindow.document);
                                                                    Y.find(".CodeMirror-linenumber").remove();
                                                                    var X = Y.find("#divMathTextInput")[0].innerText.trim();
                                                                    var W = K[0].contentWindow.getSVG();
                                                                    G.close();
                                                                    n('&nbsp;<div class="ravesh-math" style="display:inline-block;width:' + (W.width * 10) + "px;height:" + (W.height * 10) + 'px">' + W.svg + "</div>&nbsp;")
                                                                }
                                                            } else {
                                                                f.focus();
                                                                document.execCommand(z, false)
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return false
                }))
            })
        };
        k();
        var d = {};
        var j = function(y, w) {
            var x = this;
            if (!d[y]) {
                d[y] = new c.Menu(u[y],{
                    cssClass: "ravesh-editor-menu",
                    content: w.css("padding", 5),
                    marginTop: 0,
                    align: "auto",
                    removeAfterHide: false
                });
                d[y].show()
            } else {
                d[y].getMenu().html(w).css("padding", 5)
            }
            x.close = d[y].hide
        };
        function n(w) {
            q();
            document.execCommand("inserthtml", false, w);
            u.undo.removeClass("disable");
            o.onChange()
        }
        function q() {
            f.focus();
            if (r.rng) {
                if (window.getSelection) {
                    if ($.browser.mozilla) {
                        var w = f[0].childElementCount > 1 ? f[0].lastChild : f[0];
                        r.rng.setStart(w, 1);
                        r.rng.setEnd(w, 1)
                    }
                    r.sel.removeAllRanges();
                    r.sel.addRange(r.rng)
                } else {
                    r.rng.select()
                }
            }
        }
        f.focus(function() {
            clearTimeout(r.timerUnactive);
            e.addClass("active")
        });
        f.blur(function() {
            r.timerUnactive = setTimeout(function() {
                e.removeClass("active")
            }, 200);
            r.sel = (window.getSelection) ? window.getSelection() : document.selection;
            r.rng = (r.sel.rangeCount > 0) ? r.sel.getRangeAt(0) : (r.sel.createRange ? r.sel.createRange() : null)
        });
        f.keyup(function() {
            u.undo.removeClass("disable");
            o.onChange()
        })
    }
    ;
    c.Multiselect = function(l) {
        var n = this;
        var f = {
            lang: "en",
            width: 200,
            maxHeight: 250,
            createOption: function(o) {
                return $("<div>").css({
                    padding: "0 10px"
                }).text(o.Title)
            },
            cssClass: "",
            items: []
        };
        l = $.extend(true, f, l || {});
        var d = $("<div>").css({
            width: l.width
        }).addClass("ravesh-input ravesh-multi-selector " + l.cssClass);
        var j = $("<div>").css({
            width: l.width,
            position: "relative",
            "max-height": l.maxHeight
        }).addClass("ravesh-dropdown-menu");
        var g = $("<div>").addClass("spinner small").css({
            margin: "7px 0 0"
        }).hide().appendTo(d);
        n.getUI = function() {
            return d
        }
        ;
        n.showLoading = function() {
            g.show()
        }
        ;
        n.hideLoading = function() {
            g.hide()
        }
        ;
        n.getSelectedOptions = function() {
            var o = [];
            d.find(".item").each(function(p, q) {
                o.push($(q).attr("item"))
            });
            return o
        }
        ;
        n.setSelectedOptions = function(o) {
            $.each(o, function(p, q) {
                var r = $.grep(l.items, function(t) {
                    return t.Id == q
                });
                if (r.length > 0) {
                    d.append(e(r[0]))
                }
            })
        }
        ;
        var k = new RaveshUI.Menu(d,{
            content: j,
            marginTop: 0,
            align: l.lang == "fa" ? "right" : "left",
            removeAfterHide: false
        });
        var e = function(q) {
            var o = $("<i>").addClass("icon-close float-right");
            var p = $("<div>").addClass("item").attr("item", q.Id).append($("<span>").text(q.Title), o);
            o.click(function(r) {
                p.remove();
                k.refreshPosition();
                r.stopPropagation()
            });
            return p
        };
        n.setItems = function(o) {
            l.items = o;
            $.each(o, function(r, p) {
                var q = $("<div>").addClass("option").appendTo(j);
                q.append(l.createOption(p));
                q.click(function() {
                    if (d.find("[item=" + p.Id + "]").length > 0) {
                        return false
                    }
                    d.append(e(p));
                    k.refreshPosition()
                })
            });
            k.refreshPosition()
        }
    }
    ;
    c.MiniDialog = function() {
        var q = this;
        var n = function() {};
        q.close = d;
        q.showLoading = t;
        q.hideLoading = l;
        q.setContent = r;
        q.setTitle = s;
        q.getUI = function() {
            return j
        }
        ;
        q.setWidth = function(w) {
            j.css({
                width: w
            });
            return q
        }
        ;
        q.setOnClose = function(w) {
            n = w;
            return q
        }
        ;
        var e = $("<div>").addClass("ravesh-close-btn");
        var v = $("<div>").addClass("ravesh-title");
        var k = $("<div>").addClass("ravesh-header");
        k.append(e, v);
        var u = $("<div>").addClass("spinner-cover").append($("<div>").addClass("spinner2")).hide();
        var g = $("<div>").addClass("ravesh-content-scroll");
        var f = $("<div>").addClass("ravesh-content").css("overflow", "hidden").appendTo(g);
        var j = $("<div>").addClass("ravesh-mini-dialog rvc-comingIn");
        j.append(u, k, g);
        var o = $("<div>").addClass("ravesh-mini-dialog-overlay");
        o.append(j);
        $("body").append(o);
        window.addEventListener("resize", function(w) {
            p()
        });
        setInterval(p, 1000);
        function p() {
            if (f[0].clientHeight + 100 >= window.innerHeight) {
                g[0].style.height = (window.innerHeight - 100) + "px"
            } else {
                g[0].style.height = (f[0].clientHeight) + "px"
            }
        }
        function d() {
            n();
            o.fadeOut(function() {
                o.remove()
            });
            j.fadeOut(function() {
                j.remove()
            })
        }
        function r(w) {
            f.html(w)
        }
        function s(w) {
            v.text(w)
        }
        function t() {
            u.stop(true, true).fadeIn()
        }
        function l() {
            u.stop(true, true).fadeOut()
        }
        o.click(function(w) {
            if ($(w.target).hasClass("ravesh-mini-dialog-overlay")) {
                d()
            }
        });
        e.click(function() {
            d()
        })
    }
    ;
    c.selectTime = function(f) {
        f = $.extend(true, {
            dir: f.lang == "fa" ? "rtl" : "ltr",
            maxHeight: "none",
            width: f.width,
            defaultId: f.defaultValue,
            defaultTitle: a(f.defaultValue, f.lang),
            allowSearch: false,
            createContent: function() {
                var g = new c.TimePicker({
                    lang: f.lang,
                    width: "100%",
                    clockMode: f.clockMode,
                    selectedTime: e.getSelectedOption().id,
                    onSelected: function(j) {
                        e.setSelected(j)
                    },
                    onComplete: function() {
                        e.hideMenu(true)
                    }
                });
                return g.getUI()
            },
            onSelected: function(g) {
                if (!g) {
                    f.onSelected(g.id)
                }
            }
        }, f || {});
        var e = new c.DropDown(f);
        var d = e.setSelected;
        e.setSelected = function(g) {
            d({
                id: g,
                title: a(g, f.lang)
            })
        }
        ;
        e.setClockMode = function(g) {
            f.clockMode = g
        }
        ;
        e.getTimeNow = function() {
            var j = function(k) {
                return parseInt(k) < 10 && parseInt(k) >= 0 ? "0" + k.toString() : k.toString()
            };
            var g = new Date();
            h = g.getHours();
            m = g.getMinutes();
            return j(h) + ":" + j(m)
        }
        ;
        return e
    }
    ;
    c.selectYearMonth = function(v) {
        var y = this;
        v = $.extend(true, {
            lang: "en",
            width: "100%",
            format: "ym",
            minDate: "",
            maxDate: "",
            onSelected: function(B) {
                if (!B) {
                    v.onSelected(B)
                }
            }
        }, v || {});
        var x = v.lang == "en" ? "" : v.lang;
        var f = n(l());
        y.getUI = function() {
            return d
        }
        ;
        y.setWidth = function(B) {
            if (v.format == "ymd" && B.includes("px")) {
                B = parseInt(String(B).replace("px", "")) + 50 + "px"
            }
            d.css("width", B);
            return y
        }
        ;
        y.setDisable = function(B) {
            k.attr("disabled", B);
            j.attr("disabled", B);
            return y
        }
        ;
        y.setCurrentDate = function() {
            z();
            return y
        }
        ;
        y.setSelected = function(B) {
            z(B);
            return y
        }
        ;
        y.getSelectedOption = function() {
            return {
                id: e({
                    year: k.val(),
                    month: j.val(),
                    day: (v.format === "ymd" ? g.val() : 1)
                }),
                title: ""
            }
        }
        ;
        y.checkValid = function() {
            return true
        }
        ;
        var d = $("<div>").css({
            "max-width": "100%",
            display: "flex"
        });
        var k = $("<select>").addClass("ravesh-dropdown float-right");
        var j = $("<select>").addClass("ravesh-dropdown float-right");
        var g = $("<select>").addClass("ravesh-dropdown float-right");
        var A = (v.format === "ymd" ? 34 : 50);
        d.append(k.css({
            width: "calc(" + A + "% - 10px)"
        }), $("<div>").addClass("float-right").css({
            width: 10,
            height: 30
        }), j.css({
            width: "calc(" + A + "% - 7px)"
        }));
        if (v.format == "ymd") {
            d.append($("<div>").addClass("float-right").css({
                width: 10,
                height: 30
            }), g.css({
                width: "calc(" + A + "% - 25px)"
            }))
        }
        var t = parseInt(v.minDate.split("/")[v.lang == "en" ? 2 : 0], 10) || f.year - 100;
        var q = parseInt(v.maxDate.split("/")[v.lang == "en" ? 2 : 0], 10) || f.year + 50;
        k.append($("<option>").val("").text("").attr("selected", "selected"));
        for (i = f.year - 100; i <= f.year + 50; i++) {
            if (i < t || i > q) {
                continue
            }
            k.append($("<option>").val(i).text(a(i, v.lang)))
        }
        var u = $.datepicker.regional[x].monthNames;
        var s = parseInt(v.minDate.split("/")[v.lang == "en" ? 0 : 1], 10) || 0;
        var p = parseInt(v.maxDate.split("/")[v.lang == "en" ? 0 : 1], 10) || u.length;
        k.change(function(B) {
            var C = j.val();
            j.empty();
            j.append($("<option>").val("").text("").attr("selected", "selected"));
            $.each(u, function(D, E) {
                if ((k.val() == t && D < s - 1) || (k.val() == q && D > p - 1)) {
                    return true
                }
                j.append($("<option>").val(D + 1).text(E))
            });
            if (k.val() == "") {
                j.val("");
                g.val("")
            } else {
                j.val(C)
            }
            v.onSelected(y.getSelectedOption())
        });
        g.change(function(B) {
            v.onSelected(y.getSelectedOption())
        });
        var r = parseInt(v.minDate.split("/")[v.lang == "en" ? 1 : 2], 10) || 1;
        var o = parseInt(v.maxDate.split("/")[v.lang == "en" ? 1 : 2], 10) || 31;
        j.change(function(B) {
            var C = g.val();
            if (v.format == "ymd") {
                lastDay = 31;
                if (v.lang == "en") {
                    lastDay = new Date(k.val(),this.value,0).getDate()
                } else {
                    lastDay = (this.value <= 6 ? 31 : 30)
                }
                g.empty();
                g.append($("<option>").val("").text("").attr("selected", "selected"));
                for (i = 1; i <= lastDay; i++) {
                    if ((k.val() == t && this.value == s && i < r) || (k.val() == q && this.value == p && i > o)) {
                        continue
                    }
                    g.append($("<option>").val(i).text(a(i, v.lang)))
                }
                g.val(C)
            }
            v.onSelected(y.getSelectedOption())
        });
        k.change();
        if (v.format == "ymd") {
            j.change()
        }
        function z(B) {
            if (B == "" || B == null) {
                return false
            }
            if (B == "auto") {
                B = l()
            }
            var C = n(B);
            k.val(C.year).attr("selected", "selected");
            j.val(C.month).attr("selected", "selected");
            if (v.format == "ymd") {
                g.val(C.day).attr("selected", "selected")
            }
        }
        function n(C) {
            var B = C.split("/");
            if (v.lang == "fa") {
                return {
                    year: parseInt(B[0]),
                    month: parseInt(B[1]),
                    day: parseInt(B[2])
                }
            } else {
                return {
                    year: parseInt(B[2]),
                    month: parseInt(B[0]),
                    day: parseInt(B[1])
                }
            }
        }
        function e(B) {
            if (B.year == "" || B.month == "" || B.day == "") {
                return ""
            }
            if (v.lang == "fa") {
                return w(B.year) + "/" + w(B.month) + "/" + w(B.day)
            } else {
                return w(B.month) + "/" + w(B.day) + "/" + w(B.year)
            }
        }
        function l() {
            if (v.lang == "fa") {
                var B = new JalaliDate();
                return B.getFullDate()
            } else {
                var B = new Date();
                return w(B.getMonth() + 1) + "/" + w(B.getDate()) + "/" + B.getFullYear()
            }
        }
        function w(B) {
            var C = parseInt(B);
            return C < 10 ? "0" + C : C.toString()
        }
    }
    ;
    c.selectDate = function(k) {
        k = $.extend(true, {
            maxHeight: "none",
            defaultId: k.defaultValue,
            defaultTitle: k.defaultValue,
            createContent: function() {
                var v = k.lang == "en" ? "" : k.lang;
                var u = k.minDate == undefined ? null : k.minDate;
                var t = k.maxDate == undefined ? null : k.maxDate;
                var r = $("<div>").addClass("ravesh-date-picker");
                var s = {
                    regional: v,
                    minDate: u,
                    maxDate: t,
                    onSelect: function(y) {
                        g.setSelected(y);
                        g.hideMenu()
                    },
                    onChangeMonthYear: function() {
                        setTimeout(function() {
                            g.setMenuPosition();
                            q.find(".ui-datepicker-title").click(function() {
                                q.hide();
                                if (r.find(".ravesh-date-picker-month").length == 0) {
                                    w()
                                }
                                g.setMenuPosition();
                                return false
                            })
                        })
                    }
                };
                if (k.lang == "en") {
                    s.dateFormat = "mm/dd/yy"
                }
                r.datepicker(s);
                if (g.getSelectedOption().id != "") {
                    r.datepicker("setDate", g.getSelectedOption().id)
                }
                var q = r.find(".ui-datepicker");
                q.find(".ui-datepicker-title").click(function() {
                    q.hide();
                    if (r.find(".ravesh-date-picker-month").length == 0) {
                        w()
                    }
                    g.setMenuPosition();
                    return false
                });
                var o = j(g.getSelectedOption().id || "");
                var n = j(g.getCurrentDate());
                var p = o.year == 0 ? {
                    year: n.year,
                    month: n.month,
                    day: n.day
                } : {
                    year: o.year,
                    month: o.month,
                    day: o.day
                };
                function w() {
                    var y = {
                        container: $("<div>").addClass("ravesh-date-picker-month"),
                        head: $("<div>").addClass("ui-datepicker-header float-right"),
                        back: $("<span>").addClass("ui-datepicker-prev ui-corner-all").append($("<span>").addClass("ui-icon ui-icon-circle-triangle-e")),
                        title: $("<div>").addClass("ui-datepicker-title"),
                        next: $("<span>").addClass("ui-datepicker-next ui-corner-all").append($("<span>").addClass("ui-icon ui-icon-circle-triangle-w")),
                        content: $("<div>").addClass("float-right")
                    };
                    y.head.append(y.next, y.back, y.title);
                    y.container.append(y.head, y.content).appendTo(r);
                    y.title.text(a(p.year, k.lang));
                    y.title.click(function() {
                        y.container.remove();
                        x();
                        g.setMenuPosition()
                    });
                    y.back.click(function() {
                        p.year--;
                        y.title.text(a(p.year, k.lang));
                        z()
                    });
                    y.next.click(function() {
                        p.year++;
                        y.title.text(a(p.year, k.lang));
                        z()
                    });
                    function z() {
                        y.content.empty();
                        o = j(g.getSelectedOption().id || "");
                        var A = $.datepicker.regional[v].monthNames;
                        $.each(A, function(B, C) {
                            var D = $("<div>").addClass("month float-right").append($("<span>").text(C)).appendTo(y.content);
                            if (o.month == B + 1 && o.year == p.year) {
                                D.addClass("active")
                            }
                            if (n.month == B + 1 && n.year == p.year) {
                                D.addClass("current")
                            }
                            D.click(function() {
                                p.month = B + 1;
                                if (p.day > 29) {
                                    p.day = 29
                                }
                                r.datepicker("setDate", e(p));
                                g.setSelected(e(p));
                                y.container.remove();
                                q.show()
                            })
                        })
                    }
                    z()
                }
                function x() {
                    var A = {
                        container: $("<div>").addClass("ravesh-date-picker-year"),
                        head: $("<div>").addClass("ui-datepicker-header float-right"),
                        back: $("<span>").addClass("ui-datepicker-prev ui-corner-all").append($("<span>").addClass("ui-icon ui-icon-circle-triangle-e")),
                        title: $("<div>").addClass("ui-datepicker-title disable"),
                        next: $("<span>").addClass("ui-datepicker-next ui-corner-all").append($("<span>").addClass("ui-icon ui-icon-circle-triangle-w")),
                        content: $("<div>")
                    };
                    A.head.append(A.next, A.back, A.title);
                    A.container.append(A.head, A.content).appendTo(r);
                    A.back.click(function() {
                        z = z - 12;
                        y()
                    });
                    A.next.click(function() {
                        z = z + 12;
                        y()
                    });
                    var z = p.year - 6;
                    function y() {
                        A.content.empty();
                        A.title.text(a((z + 11) + " - " + z, k.lang));
                        for (var B = z; B < z + 12; B++) {
                            (function(C) {
                                var D = $("<div>").addClass("year float-right").append($("<span>").text(a(C, k.lang))).appendTo(A.content);
                                D.click(function() {
                                    p.year = C;
                                    r.datepicker("setDate", e(p));
                                    g.setSelected(e(p));
                                    A.container.remove();
                                    w()
                                })
                            }
                            )(B)
                        }
                    }
                    y()
                }
                return r
            },
            onSelected: function(n) {
                if (!n) {
                    k.onSelected(n.id)
                }
            }
        }, k || {});
        var g = new c.DropDown(k);
        g.checkValid = function() {
            return d(g.getSelectedOption().id || "")
        }
        ;
        g.setCurrentDate = function() {
            g.setSelected(g.getCurrentDate())
        }
        ;
        g.getCurrentDate = function() {
            if (k.lang == "fa") {
                var n = new JalaliDate();
                return n.getFullDate()
            } else {
                var n = new Date();
                return l(n.getMonth() + 1) + "/" + l(n.getDate()) + "/" + n.getFullYear()
            }
        }
        ;
        g.getGregorianDate = function() {
            var o = g.getSelectedOption().id;
            if (o == null || o == "") {
                return ""
            }
            if (k.lang == "fa") {
                var n = new JalaliDate(o);
                return n.getGregorianDate()
            } else {
                return o
            }
        }
        ;
        g.setLang = function(n) {
            k.lang = n
        }
        ;
        g.setMinDate = function(n) {
            k.minDate = n
        }
        ;
        g.setMaxDate = function(n) {
            k.maxDate = n
        }
        ;
        var f = g.setSelected;
        g.setSelected = function(n) {
            f({
                id: n,
                title: n
            })
        }
        ;
        function d(n) {
            if (k.lang == "fa") {
                return (/^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/).test(n)
            } else {
                return (/^\d{2}[./-]\d{2}[./-]\d{4}$/).test(n)
            }
        }
        function j(o) {
            if (o == "" || !d(o)) {
                return {
                    year: 0,
                    month: 0,
                    day: 0
                }
            }
            var n = o.split("/");
            if (k.lang == "fa") {
                return {
                    year: parseInt(n[0]),
                    month: parseInt(n[1]),
                    day: parseInt(n[2])
                }
            } else {
                return {
                    year: parseInt(n[2]),
                    month: parseInt(n[0]),
                    day: parseInt(n[1])
                }
            }
        }
        function e(n) {
            if (k.lang == "fa") {
                return l(n.year) + "/" + l(n.month) + "/" + l(n.day)
            } else {
                return l(n.month) + "/" + l(n.day) + "/" + l(n.year)
            }
        }
        function l(n) {
            var o = parseInt(n);
            return o < 10 ? "0" + o : o.toString()
        }
        return g
    }
    ;
    c.getUserList = function(d, e, f) {
        if (!f) {
            f = "email"
        }
        if (!e) {
            e = ""
        }
        var g = window;
        if (g.rvcUsersLoader == null) {
            g.rvcUsersLoaderCallbacks = new Array();
            g.rvcUsersIsLoading = {};
            g.rvcUsers = {};
            g.rvcUsersLoader = function(j, k, l) {
                if (g.rvcUsers["_" + k + l]) {
                    j(g.rvcUsers["_" + k + l])
                } else {
                    if (!g.rvcUsersIsLoading["_" + k + l]) {
                        g.rvcUsersIsLoading["_" + k + l] = true;
                        g.rvcUsersLoaderCallbacks.push([j, k, l]);
                        FormUtility.postExtra("/pages/FormBuilderService.aspx/getUsers_", {
                            group: k,
                            mode: l
                        }, function(o, p, n) {
                            if (o) {
                                g.rvcUsers["_" + k + l] = n;
                                $.each(g.rvcUsersLoaderCallbacks, function(q, r) {
                                    if (r[1] == k && r[2] == l) {
                                        r[0](g.rvcUsers["_" + k + l])
                                    }
                                })
                            }
                        })
                    } else {
                        g.rvcUsersLoaderCallbacks.push([j, k, l])
                    }
                }
            }
        }
        g.rvcUsersLoader(d, e, f)
    }
    ;
    c.selectUser = function(f) {
        var d = {
            options: [],
            defaultTitle: "",
            defaultId: "",
            group: "",
            searchById: true,
            createOptionUI: function(g) {
                var j = $("<div>").addClass("picture-and-detail").css({
                    "min-width": 200,
                    "line-height": 1
                });
                if (g.picture == "") {
                    j.append($("<div>").addClass("picture float-right").append($("<i>").addClass("icon-user")))
                } else {
                    j.append($("<img>").addClass("picture float-right").attr("src", g.picture))
                }
                j.append($("<div>").addClass("title").text(g.title));
                if (g.detail != null && g.detail != "") {
                    j.append($("<div>").addClass("detail").text(g.detail))
                } else {
                    j.append($("<div>").addClass("detail").text(g.id == "" ? "Username" : g.id))
                }
                return j
            }
        };
        f = $.extend(true, d, f || {});
        var e = new c.DropDown(f);
        e.setSelectedById = function(g) {
            if (g == "") {
                e.setSelected({
                    id: "",
                    title: f.defaultTitle
                });
                return false
            }
            e.setSelected({
                id: g,
                title: ""
            });
            c.getUserList(function(k) {
                var j = $.grep(k, function(l) {
                    return l.id == g
                });
                e.setSelected({
                    id: g,
                    title: (j.length > 0) ? j[0].title : "",
                    userId: (j.length > 0) ? j[0].userId : 0
                })
            }, f.group)
        }
        ;
        e.setSelectedByUserId = function(g) {
            if (g == "" || g == 0) {
                e.setSelected({
                    id: "",
                    title: f.defaultTitle
                });
                return false
            }
            c.getUserList(function(k) {
                var j = $.grep(k, function(l) {
                    return l.userId == g
                });
                e.setSelected({
                    id: (j.length > 0) ? j[0].id : "",
                    title: (j.length > 0) ? j[0].title : "",
                    userId: (j.length > 0) ? j[0].userId : g
                })
            }, f.group)
        }
        ;
        e.showLoading();
        c.getUserList(function(j) {
            e.hideLoading();
            var g = [{
                id: "",
                userId: 0,
                title: f.defaultTitle,
                picture: "",
                detail: ""
            }].concat(j);
            e.setOptions(g);
            if (f.defaultId != "") {
                e.setSelectedById(f.defaultId)
            }
        }, f.group);
        return e
    }
    ;
    c.selectMultiUser = function(l) {
        var n = this;
        var f = {
            lang: "en",
            width: 200,
            height: 250,
            createOption: function(o) {
                return $("<div>").text(o.title)
            },
            items: [],
            onSelected: function(o) {
                return o
            }
        };
        l = $.extend(true, f, l || {});
        var d = $("<div>").css({
            width: l.width
        }).addClass("ravesh-input ravesh-multi-selector");
        var j = $("<div>").css({
            width: l.width,
            position: "relative",
            "max-height": l.height
        }).addClass("ravesh-dropdown-menu");
        var g = $("<div>").addClass("spinner small").css({
            margin: "7px 0 0"
        }).hide().appendTo(d);
        n.getUI = function() {
            return d
        }
        ;
        n.showLoading = function() {
            g.show()
        }
        ;
        n.hideLoading = function() {
            g.hide()
        }
        ;
        n.getSelectedOptions = function() {
            var o = [];
            d.find(".item").each(function(p, q) {
                o.push($(q).attr("item"))
            });
            return o
        }
        ;
        n.setSelectedOptions = function(o) {
            $.each(o, function(p, q) {
                var r = $.grep(l.items, function(t) {
                    return t.id == q
                });
                if (r.length > 0) {
                    d.append(e(r[0]))
                }
            })
        }
        ;
        var k = new RaveshUI.Menu(d,{
            content: j,
            marginTop: 0,
            align: l.lang == "fa" ? "right" : "left",
            removeAfterHide: false
        });
        var e = function(q) {
            var o = $("<i>").addClass("icon-close float-right");
            var p = $("<div>").addClass("item").attr("item", q.id).append($("<span>").text(q.title), o);
            o.click(function(r) {
                p.remove();
                k.refreshPosition();
                r.stopPropagation()
            });
            return p
        };
        n.setItems = function(o) {
            l.items = o;
            $.each(o, function(r, p) {
                var q = $("<div>").addClass("option").appendTo(j);
                q.append(l.createOption(p));
                q.click(function() {
                    if (d.find("[item=" + p.id + "]").length > 0) {
                        return false
                    }
                    if (p.id < 0) {
                        l.onSelected(p);
                        k.hide();
                        return
                    }
                    d.append(e(p));
                    k.refreshPosition()
                })
            });
            k.refreshPosition()
        }
    }
    ;
    c.AjaxDrillDown = function(f) {
        var g = f.url;
        var j = window;
        if (j.rvcAjaxDrillDownLoader == null) {
            j.rvcAjaxDrillDownLoaderCallbacks = new Array();
            j.rvcAjaxDrillDown = {};
            j.rvcAjaxDrillDownIsLoading = {};
            j.rvcAjaxDrillDownLoader = function(l, k) {
                if (j.rvcAjaxDrillDown[l]) {
                    k(j.rvcAjaxDrillDown[l])
                } else {
                    if (!j.rvcAjaxDrillDownIsLoading[l]) {
                        j.rvcAjaxDrillDownIsLoading[l] = true;
                        j.rvcAjaxDrillDownLoaderCallbacks.push([l, k]);
                        FormUtility.postExtra(l, "", function(o, p, n) {
                            if (o) {
                                j.rvcAjaxDrillDown[l] = n;
                                $.each(j.rvcAjaxDrillDownLoaderCallbacks, function(q, r) {
                                    if (r[0] == l) {
                                        r[1](j.rvcAjaxDrillDown[l])
                                    }
                                })
                            }
                        })
                    } else {
                        j.rvcAjaxDrillDownLoaderCallbacks.push([l, k])
                    }
                }
            }
        }
        var d = {
            defaultTitle: "",
            defaultTitleGroup: "",
            getChildOptions: function(l, k) {
                if (l.id != 0) {
                    k(l.childs);
                    return
                }
                j.rvcAjaxDrillDownLoader(g, function(n) {
                    k([{
                        id: "",
                        title: f.defaultTitle
                    }].concat(n.childs))
                })
            }
        };
        f = $.extend(true, d, f || {});
        f.options = {
            id: 0,
            title: f.defaultTitleGroup,
            childs: []
        };
        var e = new c.DrillDown(f);
        e.setSelectedById = function(k) {
            if (k == "") {
                e.setSelected({
                    id: "",
                    title: f.defaultTitle
                });
                return false
            }
            j.rvcAjaxDrillDownLoader(g, function(l) {
                var o = "";
                var n = function(p) {
                    for (var q in p) {
                        if (o != "") {
                            return
                        }
                        if (p[q].id == k) {
                            o = p[q].title;
                            return
                        }
                        if (p[q].childs) {
                            n(p[q].childs)
                        }
                    }
                };
                n(l.childs);
                e.setSelected({
                    id: k,
                    title: o
                })
            })
        }
        ;
        return e
    }
    ;
    c.selectCustomerGroup = function(d) {
        d.url = "/pages/FormBuilderService.aspx/getCustomerGroup_";
        return c.AjaxDrillDown(d)
    }
    ;
    c.selectUserGroupSupport = function(d) {
        d.url = "/pages/FormBuilderService.aspx/getUserSupportGroup_";
        return c.AjaxDrillDown(d)
    }
    ;
    c.selectUserGroupSupportAllow = function(d) {
        d.url = "/pages/FormBuilderService.aspx/getAllowUserSupportGroup_";
        return c.AjaxDrillDown(d)
    }
    ;
    c.selectCustomer = function(f) {
        var d = {
            defaultTitle: "",
            detail: "",
            searchById: true,
            advanceSearch: "",
            ajaxUrl: "../pages/FormBuilderService.aspx/searchCustomer_",
            createOptionUI: function(g) {
                var j = $("<div>").addClass("picture-and-detail").css({
                    "min-width": 200
                });
                if (g.picture == "") {
                    j.append($("<div>").addClass("picture float-right").append($("<i>").addClass("icon-user")))
                } else {
                    j.append($("<img>").addClass("picture float-right").attr("src", g.picture))
                }
                j.append($("<div>").addClass("title").text(g.title));
                j.append($("<div>").addClass("detail").text(g.detail));
                return j
            },
            createContent: function() {
                if (f.advanceSearch == "") {
                    return ""
                }
                var g = $("<div>").text(f.advanceSearch).addClass("ravesh-link").css({
                    padding: "10px 2px",
                    "text-align": "center"
                });
                g.click(function() {
                    e.hideMenu()
                });
                return g
            }
        };
        f = $.extend(true, d, f || {});
        f.emptyOption = {
            id: "",
            title: f.defaultTitle,
            detail: f.detail,
            picture: ""
        };
        var e = new RaveshUI.DropDown(f);
        e.setSelectedById = function(g) {
            if (g == "") {
                e.setSelected({
                    id: "",
                    title: f.defaultTitle
                });
                return false
            }
            e.showLoading();
            FormUtility.postExtra("/pages/FormBuilder/services/FormService_.asmx/getCustomerById_", {
                id: g
            }, function(k, l, j) {
                e.hideLoading();
                if (k) {
                    if (j.title == "") {
                        e.setSelected({
                            id: "",
                            title: f.defaultTitle
                        })
                    } else {
                        e.setSelected(j)
                    }
                }
            })
        }
        ;
        return e
    }
    ;
    c.selectProductGroup = function(f) {
        var g = window;
        if (g.rvcProductGroupLoader == null) {
            g.rvcProductGroupLoaderCallbacks = new Array();
            g.rvcProductGroupLoader = function(j) {
                if (g.rvcProductGroup) {
                    j(g.rvcProductGroup)
                } else {
                    if (!g.rvcProductGroupIsLoading) {
                        g.rvcProductGroupIsLoading = true;
                        g.rvcProductGroupLoaderCallbacks.push(j);
                        FormUtility.postExtra("/pages/FormBuilderService.aspx/getProductGroup_", "", function(l, n, k) {
                            if (l) {
                                g.rvcProductGroup = k;
                                $.each(g.rvcProductGroupLoaderCallbacks, function(o, p) {
                                    p(g.rvcProductGroup)
                                })
                            }
                        })
                    } else {
                        g.rvcProductGroupLoaderCallbacks.push(j)
                    }
                }
            }
        }
        var d = {
            defaultTitle: "",
            defaultTitleGroup: "",
            getChildOptions: function(k, j) {
                if (k.id != 0) {
                    j(k.childs);
                    return
                }
                g.rvcProductGroupLoader(function(l) {
                    j([{
                        id: "",
                        title: f.defaultTitle
                    }].concat(l.childs))
                })
            }
        };
        f = $.extend(true, d, f || {});
        f.options = {
            id: 0,
            title: f.defaultTitleGroup,
            childs: []
        };
        var e = new c.DrillDown(f);
        e.setSelectedById = function(j) {
            if (j == "") {
                e.setSelected({
                    id: "",
                    title: f.defaultTitle
                });
                return false
            }
            g.rvcProductGroupLoader(function(k) {
                var n = "";
                var l = function(o) {
                    for (var p in o) {
                        if (n != "") {
                            return
                        }
                        if (o[p].id == j) {
                            n = o[p].title;
                            return
                        }
                        if (o[p].childs) {
                            l(o[p].childs)
                        }
                    }
                };
                l(k.childs);
                e.setSelected({
                    id: j,
                    title: n
                })
            })
        }
        ;
        return e
    }
    ;
    c.selectProduct = function(f) {
        var d = {
            defaultTitle: "",
            detail: "",
            price: "",
            searchById: true,
            advanceSearch: "",
            ajaxUrl: "../pages/FormBuilderService.aspx/searchProduct_",
            createOptionUI: function(g) {
                var j = $("<div>").addClass("option-product");
                if (g.picture == "") {
                    j.append($("<div>").addClass("picture float-right").append($("<i>").addClass("icon-product")))
                } else {
                    j.append($("<img>").addClass("picture float-right").attr("src", g.picture))
                }
                j.append($("<div>").addClass("title").text(g.title + (g.id ? "(" + g.id + ")" : "")).attr("title", g.title));
                j.append($("<div>").addClass("detail").text(g.group));
                j.append($("<div>").addClass("price").text(g.id == "" ? g.price : FormUtility.spiltWithComma(g.price)));
                return j
            },
            createContent: function() {
                if (f.advanceSearch == "") {
                    return ""
                }
                var g = $("<div>").text(f.advanceSearch).addClass("ravesh-link").css({
                    padding: "10px 2px",
                    "text-align": "center"
                });
                g.click(function() {
                    e.hideMenu()
                });
                return g
            }
        };
        f = $.extend(true, d, f || {});
        f.emptyOption = {
            id: "",
            title: f.defaultTitle,
            group: f.detail,
            picture: "",
            price: f.price
        };
        var e = new RaveshUI.DropDown(f);
        return e
    }
    ;
    c.selectSales = function(f) {
        var d = {
            defaultTitle: "",
            detail: "",
            price: "",
            createDate: "",
            searchById: true,
            advanceSearch: "",
            ajaxUrl: "../pages/FormBuilderService.aspx/searchSales_",
            createOptionUI: function(g) {
                var j = $("<div>").addClass("option-sales");
                j.append($("<div>").addClass("title").text(g.title + (g.percent != "" && g.percent != 0 ? "(" + g.percent + "%)" : "")).attr("title", g.title));
                j.append($("<div>").addClass("detail").text(g.createDate));
                j.append($("<div>").addClass("price").text(g.id == "" ? g.price : FormUtility.spiltWithComma(g.price)));
                return j
            },
            createContent: function() {
                if (f.advanceSearch == "") {
                    return ""
                }
                var g = $("<div>").text(f.advanceSearch).addClass("ravesh-link").css({
                    padding: "10px 2px",
                    "text-align": "center"
                });
                g.click(function() {
                    e.hideMenu()
                });
                return g
            }
        };
        f = $.extend(true, d, f || {});
        f.emptyOption = {
            id: "",
            title: f.defaultTitle,
            percent: "",
            createDate: f.createDate,
            price: f.price
        };
        var e = new RaveshUI.DropDown(f);
        return e
    }
    ;
    c.selectTafzily = function(f) {
        var d = {
            defaultTitle: "",
            searchById: true,
            detail: "",
            ajaxUrl: "../pages/FormBuilderService.aspx/searchTafzily_",
            createOptionUI: function(g) {
                var j = $("<div>").addClass("picture-and-detail").css({
                    "min-width": 200
                });
                j.append($("<div>").addClass("picture float-right").append($("<i>").addClass("icon-dollar")));
                j.append($("<div>").addClass("title").text(g.title));
                j.append($("<div>").addClass("detail").text(g.detail));
                return j
            },
            createContent: function() {
                return ""
            }
        };
        f = $.extend(true, d, f || {});
        f.emptyOption = {
            id: 0,
            title: f.defaultTitle,
            detail: f.detail,
            picture: ""
        };
        var e = new RaveshUI.DropDown(f);
        e.setSelectedById = function(g) {
            if (g == "" || g == 0) {
                e.setSelected({
                    id: 0,
                    title: f.defaultTitle
                });
                return false
            }
            e.showLoading();
            FormUtility.postExtra("/pages/FormBuilder/services/FormService_.asmx/getTafziliById_", {
                id: g
            }, function(k, l, j) {
                e.hideLoading();
                if (k) {
                    if (j.title == "") {
                        e.setSelected({
                            id: 0,
                            title: f.defaultTitle
                        })
                    } else {
                        e.setSelected(j)
                    }
                }
            })
        }
        ;
        return e
    }
    ;
    c.selectFactor = function(f) {
        var d = {
            defaultTitle: "",
            detail: "",
            price: "",
            searchById: true,
            advanceSearch: "",
            ajaxUrl: "../pages/FormBuilderService.aspx/searchFactor_",
            createOptionUI: function(g) {
                var j = $("<div>").addClass("option-sales");
                j.append($("<div>").addClass("title").text(g.title).attr("title", g.title));
                j.append($("<div>").addClass("detail").text(g.customer));
                j.append($("<div>").addClass("price").text(g.id == "" ? g.price : FormUtility.spiltWithComma(g.price)));
                return j
            },
            createContent: function() {
                if (f.advanceSearch == "") {
                    return ""
                }
                var g = $("<div>").text(f.advanceSearch).addClass("ravesh-link").css({
                    padding: "10px 2px",
                    "text-align": "center"
                });
                g.click(function() {
                    e.hideMenu()
                });
                return g
            }
        };
        f = $.extend(true, d, f || {});
        f.emptyOption = {
            id: "",
            title: f.defaultTitle,
            price: f.price,
            customer: f.detail
        };
        var e = new RaveshUI.DropDown(f);
        return e
    }
    ;
    c.getFormList = function(e, d) {
        var f = window;
        if (f.rvcFormsLoader == null) {
            f.rvcFormsLoaderCallbacks = new Array();
            f.rvcForms = {};
            f.rvcFormsIsLoading = {};
            f.rvcFormsLoader = function(j, g) {
                if (f.rvcForms["_" + j]) {
                    g(f.rvcForms["_" + j])
                } else {
                    if (!f.rvcFormsIsLoading["_" + j]) {
                        f.rvcFormsIsLoading["_" + j] = true;
                        f.rvcFormsLoaderCallbacks.push([j, g]);
                        FormUtility.postExtra("/pages/FormBuilder/services/FormService_.asmx/getFormList_", {
                            custCode: j
                        }, function(l, n, k) {
                            if (l) {
                                f.rvcForms["_" + j] = k[0];
                                $.each(f.rvcFormsLoaderCallbacks, function(o, p) {
                                    if (p[0] == j) {
                                        p[1](f.rvcForms["_" + j])
                                    }
                                })
                            }
                        })
                    } else {
                        f.rvcFormsLoaderCallbacks.push([j, g])
                    }
                }
            }
        }
        f.rvcFormsLoader(e, d)
    }
    ;
    c.clearFormList = function() {
        window.rvcFormsLoader = null
    }
    ;
    c.selectForm = function(f) {
        var d = {
            options: [],
            defaultTitle: "",
            defaultId: "",
            custCode: 0,
            getOnlyIsPublic: false,
            createOptionUI: function(g) {
                var j = $("<div>").addClass("picture-and-detail").css({
                    "min-width": 250
                });
                j.append($("<div>").addClass("picture float-right").css({
                    background: "#" + g.color,
                    color: "#fff"
                }).append($("<i>").addClass("icon-list-alt")));
                if (f.custCode != 0) {
                    j.append($("<div>").addClass("title").css({
                        "margin-top": g.formValueCount == 0 ? 18 : 12
                    }).append($("<span>").text(g.title), (g.formValueCount == 0 ? "" : $("<div>").addClass("detail").css({
                        color: "#DD4B39"
                    }).text(g.formValueCount))))
                } else {
                    j.append($("<div>").addClass("title").css({
                        "margin-top": 18
                    }).text(g.title))
                }
                return j
            }
        };
        f = $.extend(true, d, f || {});
        var e = new c.DropDown(f);
        e.setSelectedById = function(g) {
            if (g == "") {
                e.setSelected({
                    id: g,
                    title: f.defaultTitle,
                    color: "bbb"
                });
                return false
            }
            c.getFormList(f.custCode, function(k) {
                var j = $.grep(k, function(l) {
                    return l.id == g
                });
                if (j.length > 0) {
                    e.setSelected(j[0])
                }
            })
        }
        ;
        e.showLoading();
        c.getFormList(f.custCode, function(g) {
            e.hideLoading();
            var j = g;
            if (f.getOnlyIsPublic) {
                j = $.grep(j, function(l) {
                    return l.isPublic
                })
            }
            var k = [{
                id: "",
                title: f.defaultTitle,
                color: "bbb"
            }].concat(j);
            e.setOptions(k);
            if (f.defaultId != "") {
                e.setSelectedById(f.defaultId)
            }
        });
        e.setSelectedDefault = function() {
            c.getFormList(f.custCode, function(g) {
                e.hideLoading();
                $.each(g, function(j, k) {
                    if (k.isDefault) {
                        e.setSelected(k, true)
                    }
                })
            })
        }
        ;
        return e
    }
    ;
    c.selectFormField = function(f) {
        var d = {
            defaultTitle: "please select",
            formNum: "number",
            formId: "",
            fieldId: "",
            ajaxUrl: "/pages/FormBuilder/services/FormService_.asmx/searchFormValueParam_",
            getAjaxParam: function(g) {
                return {
                    key: g,
                    formId: f.formId,
                    fieldId: f.fieldId
                }
            },
            createOptionUI: function(g) {
                var j = f.formNum + " " + g.id.split("_")[0];
                var k = $("<div>").addClass("title-and-detail");
                if (g.id == "") {
                    k.append($("<div>").addClass("title").text(g.title).css("margin-top", 16))
                } else {
                    k.append($("<div>").addClass("title").text(g.title));
                    k.append($("<div>").addClass("detail").text(g.custName != "" ? g.custName + " - " + j : j))
                }
                return k
            }
        };
        f = $.extend(true, d, f || {});
        f.emptyOption = {
            id: "",
            title: f.defaultTitle
        };
        var e = new c.DropDown(f);
        return e
    }
    ;
    c.selectCustomerDialog = function(f, d) {
        var k = $("#HFlang").val();
        var o = {
            fa: {
                selectCustomer: "انتخاب مشتری",
                search: "جستجو",
                view: "مشاهده",
                select: "انتخاب"
            },
            en: {
                selectCustomer: "Select customer",
                search: "Search",
                view: "View",
                select: "Select"
            }
        };
        var n = o[k];
        var g = RaveshUI.showDialog({
            title: n.selectCustomer,
            icon: "icon-user-circle",
            width: 450
        });
        var p = $("<div>").addClass("customer-quick-search-dialog-head");
        var q = $("<i>").addClass("icon-search float-right");
        var r = $("<input>").attr("input", "text").attr("placeholder", n.search);
        p.append(q, r);
        g.setSubHead(p);
        p.click(function() {
            r.focus()
        });
        var e = $("<div>").addClass("customer-quick-search-dialog");
        var s = $("<table>").appendTo(e);
        var l = $("<div>").addClass("search-loading").append($("<div>").addClass("spinner")).appendTo(e);
        g.setContent(e);
        var t;
        r.keyup(function(u) {
            clearTimeout(t);
            t = setTimeout(j, 800)
        });
        j();
        function j() {
            l.show();
            FormUtility.postExtra("../pages/FormBuilderService.aspx/searchCustomer_", {
                key: r.val().trim(),
                group: f ? f : 0,
                rnd: $("#HFRnd").val()
            }, function(v, w, u) {
                l.hide();
                if (!v) {
                    return false
                }
                s.empty();
                $.each(u, function(A, B) {
                    var z = $("<a>").addClass("ravesh-button").attr({
                        href: "#"
                    }).text(n.view).click(function() {
                        customer_Show_Info(B.id, B.title);
                        return false
                    });
                    var y = $("<a>").addClass("ravesh-button save").attr({
                        href: "#"
                    }).text(n.select).click(function() {
                        if (d) {
                            d(B)
                        }
                        g.close();
                        return false
                    });
                    var x = c.makeAvatar({
                        picture: B.picture,
                        title: B.title,
                        id: B.id,
                        size: 50
                    }).css("cursor", "pointer").click(function() {
                        z.click();
                        return false
                    });
                    s.append($("<tr>").append($("<td>").css({
                        width: 80,
                        "text-align": "center",
                        padding: "10px 0"
                    }).append(x), $("<td>").append($("<div>").addClass("title").text(B.title), $("<div>").addClass("detail").text(B.detail)), $("<td>").css({
                        width: 70
                    }).append(z), $("<td>").css({
                        width: 70
                    }).append(y)))
                })
            })
        }
    }
    ;
    c.selectTicketDialog = function(d) {
        var j = $("#HFlang").val();
        var n = {
            fa: {
                selectTicket: "انتخاب تیکت",
                search: "جستجو",
                view: "مشاهده",
                select: "انتخاب",
                id: "تیکت شماره&zwnj;ی"
            },
            en: {
                selectTicket: "Select ticket",
                search: "Search",
                view: "View",
                select: "Select",
                id: "id:"
            }
        };
        var l = n[j];
        var f = RaveshUI.showDialog({
            title: l.selectTicket,
            icon: "icon-shield-alt",
            width: 500
        });
        var o = $("<div>").addClass("customer-quick-search-dialog-head");
        var p = $("<i>").addClass("icon-search float-right");
        var q = $("<input>").attr("input", "text").attr("placeholder", l.search);
        o.append(p, q);
        f.setSubHead(o);
        o.click(function() {
            q.focus()
        });
        var e = $("<div>").addClass("customer-quick-search-dialog");
        var r = $("<table>").appendTo(e);
        var k = $("<div>").addClass("search-loading").append($("<div>").addClass("spinner")).appendTo(e);
        f.setContent(e);
        var s;
        q.keyup(function(t) {
            clearTimeout(s);
            s = setTimeout(g, 800)
        });
        g();
        function g() {
            k.show();
            FormUtility.postExtra("../WebServices/get_info.asmx/searchTicket_", {
                key: q.val().trim()
            }, function(u, v, t) {
                k.hide();
                if (!u) {
                    return false
                }
                r.empty();
                $.each(t, function(z, A) {
                    var y = $("<a>").addClass("ravesh-button").attr({
                        href: "#"
                    }).text(l.view).click(function() {
                        show_ticket(A.id, A.subject);
                        return false
                    });
                    var x = $("<a>").addClass("ravesh-button save").attr({
                        href: "#"
                    }).text(l.select).click(function() {
                        if (d) {
                            d(A)
                        }
                        f.close();
                        return false
                    });
                    var w = c.makeAvatar({
                        picture: A.customerPicture,
                        title: A.customerName,
                        id: A.customerCode,
                        size: 50
                    }).css("cursor", "pointer").click(function() {
                        customer_Show_Info(A.customerCode, A.customerName);
                        return false
                    });
                    var B = $("<div>").addClass("title").text(A.subject).css("cursor", "pointer").click(function() {
                        customer_Show_Info(A.customerCode, A.customerName);
                        return false
                    });
                    r.append($("<tr>").append($("<td>").css({
                        width: 80,
                        "text-align": "center",
                        padding: "10px 0"
                    }).append(w), $("<td>").append(B, $("<div>").addClass("detail").text(A.customerName)), $("<td>").append($("<div>").css({
                        "line-height": 2,
                        color: "#888"
                    }).html(l.id + " " + a(A.id, j)), $("<div>").css({
                        color: "#888"
                    }).text(a(A.createDateTime))), $("<td>").css({
                        width: 70
                    }).append(y), $("<td>").css({
                        width: 70
                    }).append(x)))
                })
            })
        }
    }
    ;
    c.makeAvatar = function(j) {
        var e = {
            id: 0,
            picture: "",
            size: 40,
            title: "",
            colors: ["#cc90e2", "#80d066", "#ecd074", "#6fb1e4", "#e57979", "#f98bae", "#73cdd0", "#fba76f"],
            radius: true
        };
        j = $.extend(true, e, j || {});
        j.title = a(j.title, $("#HFlang").val());
        var g = j.title.toString().toUpperCase().split(" ");
        var f = "";
        if (g.length == 1) {
            f = g[0] ? g[0].charAt(0) : "?"
        } else {
            f = g[0].charAt(0) + "&zwnj;" + g[1].charAt(0)
        }
        var d = j.id == 0 ? j.colors[f.charCodeAt(0) % j.colors.length] : j.colors[j.id % j.colors.length];
        if (j.picture != "" && j.picture.indexOf("noimage.jpg") == -1) {
            return $("<img>").attr({
                src: j.picture,
                title: j.title
            }).css({
                width: j.size,
                height: j.size,
                "background-color": d,
                "border-radius": j.radius ? "50%" : "0"
            })
        } else {
            return $("<span>").attr({
                title: j.title
            }).append(f).css({
                width: j.size,
                height: j.size,
                "background-color": d,
                "line-height": j.size + "px",
                "font-size": (j.size / 3) + "px",
                overflow: "hidden",
                display: "inline-block",
                color: "#fff",
                "text-align": "center",
                "text-transform": "uppercase",
                "user-select": "none",
                "border-radius": j.radius ? "50%" : "0"
            })
        }
    }
    ;
    if (window.RaveshUI == null) {
        window.RaveshUI = c
    } else {
        for (var b in c) {
            window.RaveshUI[b] = c[b]
        }
    }
}
)();
function CreateFormUtility() {
    this.getQueryStrings = function(a, d) {
        if (!d) {
            d = window.location.href
        } else {
            d = d
        }
        a = a.replace(/[\[\]]/g, "\\$&");
        var b = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)")
          , c = b.exec(d);
        if (!c) {
            return null
        }
        if (!c[2]) {
            return ""
        }
        return decodeURIComponent(c[2].replace(/\+/g, " "))
    }
    ;
    this.numberLocalize = function(e, b) {
        if (b == null) {
            b = $("#HFlang").val()
        }
        if (b == null || b == "en") {
            return e
        }
        var d = e.toString();
        var c = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        for (var a = 0; a <= 9; a++) {
            d = d.replace(new RegExp(a,"g"), c[a])
        }
        return d
    }
    ;
    this.randomId = function(a) {
        return (a ? a : "id") + Math.random().toString(36).substr(2, 10)
    }
    ;
    this.isInteger = function(a) {
        return !isNaN(parseInt(a)) && isFinite(a)
    }
    ;
    this.spiltWithComma = function(c) {
        if (c != undefined && c != null) {
            c = c.toString();
            var b = "";
            if (c.indexOf(".") != -1) {
                b = c.substr(c.indexOf("."), c.length);
                c = c.substr(0, c.indexOf("."))
            }
            c = c.replace(/,/gi, "");
            var a = c.substr(0, c.length % 3);
            c = c.substr(c.length % 3, c.length);
            for (i = 0; i < c.length; i = i + 3) {
                a += "," + c.substr(i, 3)
            }
            if (a.charAt(0) == ",") {
                a = a.substr(1, a.length)
            }
            return a + b
        } else {
            return ""
        }
    }
    ;
    this.convertGregorianToJalali = function(a) {
        if (a == null || a == "") {
            return ""
        }
        var b = new JalaliDate(new Date(a));
        return b.getFullDate()
    }
    ;
    this.convertGregorianToJalaliObj = function(a) {
        if (a == null || a == "") {
            return ""
        }
        return new JalaliDate(new Date(a))
    }
    ;
    this.getJalaliStartEndMonth = function(a) {
        if (a == null || a == "") {
            return ""
        }
        var c = new JalaliDate(new Date(a));
        c.setDate(1);
        var d = new Date(c.getFullDateGregorian());
        if (c.getMonth() == 11) {
            c.setYear(c.getFullYear() + 1);
            c.setMonth(0)
        } else {
            c.setMonth(c.getMonth() + 1)
        }
        var b = new Date(c.getFullDateGregorian());
        b.setDate(b.getDate() - 1);
        return {
            start: this.formatGregorianDash(d),
            end: this.formatGregorianDash(b)
        }
    }
    ;
    this.padNumber = function(a) {
        var b = parseInt(a);
        return b < 10 ? "0" + b : b.toString()
    }
    ;
    this.formatGregorian = function(a) {
        return this.padNumber(a.getMonth() + 1) + "/" + this.padNumber(a.getDate()) + "/" + a.getFullYear()
    }
    ;
    this.formatGregorianDash = function(a) {
        return a.getFullYear() + "-" + this.padNumber(a.getMonth() + 1) + "-" + this.padNumber(a.getDate())
    }
    ;
    this.formatTime = function(a) {
        return this.padNumber(a.getHours()) + ":" + this.padNumber(a.getMinutes())
    }
    ;
    this.convertJalaliToGregorian = function(b) {
        var a = this.convertStrToJalali(b);
        if (a == null || a == "") {
            return ""
        }
        return a.getFullDateGregorian()
    }
    ;
    this.convertStrToJalali = function(b) {
        if (b == null || b == "") {
            return ""
        }
        var a = b.split("/");
        return new JalaliDate(parseInt(a[0]),parseInt(a[1]) - 1,parseInt(a[2]))
    }
    ;
    this.getCurrentDate = function(a) {
        if (a == "fa") {
            var b = new JalaliDate();
            return b.getFullDate()
        } else {
            return this.formatGregorian(new Date())
        }
    }
    ;
    this.getCurrentDateStr = function(a) {
        if ((a == null && $("#HFlang").val() == "fa") || a == "fa") {
            moment.loadPersian({
                usePersianDigits: true,
                dialect: "persian-modern"
            });
            return moment().format("dddd jD jMMMM jYYYY")
        } else {
            moment.locale("en");
            return moment().format("dddd, MMMM D, YYYY")
        }
    }
    ;
    this.convertDate = function(b, c, a) {
        if (a == null) {
            a = parseInt($("#HFTimeZone").val()) || 0
        }
        if ((c == null && $("#HFlang").val() == "fa") || c == "fa") {
            moment.loadPersian({
                usePersianDigits: true,
                dialect: "persian-modern"
            })
        } else {
            moment.locale("en")
        }
        var d = moment(b, "MM/DD/YYYY HH:mm").add(a, "m");
        return d
    }
    ;
    this.convertPersianNumber = function(c) {
        c = c.toString();
        var d = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        var a = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        for (var b = 0; b < 10; b++) {
            c = c.replace(d[b], b).replace(a[b], b)
        }
        return c
    }
    ;
    this.getCurrentTime = function() {
        var b = function(c) {
            return parseInt(c) < 10 && parseInt(c) >= 0 ? "0" + c.toString() : c.toString()
        };
        var a = new Date();
        h = a.getHours();
        m = a.getMinutes();
        return b(h) + ":" + b(m)
    }
    ;
    this.shuffleArray = function(b) {
        var a = $.extend(true, [], b);
        var c = a.length, e, d;
        while (0 !== c) {
            d = Math.floor(Math.random() * c);
            c -= 1;
            e = a[c];
            a[c] = a[d];
            a[d] = e
        }
        return a
    }
    ;
    this.loadMap = function(a) {
        var b = window;
        if (b.frmViewMapLoader == null) {
            b.frmViewMapArrayLoader = new Array();
            b.frmViewMapLoader = function(c) {
                if (typeof window.L === "object" && window.L.map) {
                    c()
                } else {
                    if (!b.frmViewMapIsLoading) {
                        b.frmViewMapIsLoading = true;
                        b.frmViewMapArrayLoader.push(c);
                        $("head").append('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" type="text/css" />');
                        $.getScript("https://unpkg.com/leaflet@1.7.1/dist/leaflet.js", function() {
                            $.each(b.frmViewMapArrayLoader, function(d, e) {
                                e()
                            })
                        })
                    } else {
                        b.frmViewMapArrayLoader.push(c)
                    }
                }
            }
        }
        b.frmViewMapLoader(function() {
            a()
        })
    }
    ;
    this.postExtra = function(d, b, a) {
        var c = {
            token: [$("#HFdomain").val(), $("#HFUserCode").val(), $("#HFcodeDU").val()],
            data: b
        };
        $.ajax({
            type: "POST",
            url: d,
            data: JSON.stringify(c),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(e) {
                if (a) {
                    a(e.d.status == 1, e.d.message, e.d.data)
                }
            },
            error: function(e) {
                if (a) {
                    a(false, "", "")
                }
            }
        })
    }
    ;
    this.post = function(c, b, a) {
        $.ajax({
            type: "POST",
            url: c,
            data: b,
            success: function(d) {
                if (a) {
                    a(d.status == 1, d.message, d.data)
                }
            },
            error: function(d) {
                if (a) {
                    a(false, "", "")
                }
            }
        })
    }
    ;
    this.postForm = function(e, b, a, c) {
        var d = new XMLHttpRequest();
        d.onreadystatechange = function() {
            if (d.readyState == 4 && d.status == 200) {
                var f = JSON.parse(d.responseText);
                if (a) {
                    a(f.status == 1, f.message, f.data)
                }
            }
        }
        ;
        d.upload.onprogress = function(f) {
            if (f.lengthComputable) {
                var g = parseInt((f.loaded / f.total) * 100);
                if (c) {
                    c(g)
                }
            }
        }
        ;
        d.addEventListener("error", function() {
            if (a) {
                a(false, "", "")
            }
        });
        d.open("POST", e);
        d.send(b)
    }
}
var FormUtility = new CreateFormUtility();
function QrCodeScanner(e, g, a) {
    var b = $("<div>").css({
        padding: "0 15px 15px",
        width: 300
    });
    var k = FormUtility.randomId();
    var j = $("<div>").attr({
        id: k
    }).css({
        width: 300
    }).appendTo(b);
    var l = $("<div>").appendTo(b);
    var d = null;
    var c = new RaveshUI.MiniDialog();
    c.setContent(b);
    c.setTitle(e == "fa" ? "اسکن" : "Scan");
    c.setWidth("auto");
    c.setOnClose(function() {
        if (d != null) {
            d.clear()
        }
    });
    if (window.onOpenedMiniDialog) {
        onOpenedMiniDialog(c)
    }
    c.showLoading();
    f(function() {
        c.hideLoading();
        var o = [];
        if (g == "qrcode") {
            o = [Html5QrcodeSupportedFormats.QR_CODE]
        } else {
            o = [Html5QrcodeSupportedFormats.AZTEC, Html5QrcodeSupportedFormats.CODABAR, Html5QrcodeSupportedFormats.CODE_39, Html5QrcodeSupportedFormats.CODE_93, Html5QrcodeSupportedFormats.CODE_128, Html5QrcodeSupportedFormats.DATA_MATRIX, Html5QrcodeSupportedFormats.MAXICODE, Html5QrcodeSupportedFormats.ITF, Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8, Html5QrcodeSupportedFormats.PDF_417, Html5QrcodeSupportedFormats.RSS_14, Html5QrcodeSupportedFormats.RSS_EXPANDED, Html5QrcodeSupportedFormats.UPC_A, Html5QrcodeSupportedFormats.UPC_E, Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION]
        }
        d = new Html5QrcodeScanner(k,{
            fps: 10,
            qrbox: 250,
            formatsToSupport: o,
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
            lang: e,
            showTorchButtonIfSupported: true
        });
        d.render(function(q, p) {
            a(q);
            c.close()
        })
    });
    function f(o) {
        var p = window;
        if (p.frmScanQrLoader == null) {
            p.frmScanQrArrayLoader = new Array();
            p.frmScanQrLoader = function(q) {
                if (window.Html5QrcodeScanner) {
                    q()
                } else {
                    if (!p.frmScanQrIsLoading) {
                        p.frmScanQrIsLoading = true;
                        p.frmScanQrArrayLoader.push(q);
                        n();
                        $.getScript("/Themes/resources/scripts/html5-qrcode.min.js", function() {
                            $.each(p.frmScanQrArrayLoader, function(r, s) {
                                s()
                            })
                        })
                    } else {
                        p.frmScanQrArrayLoader.push(q)
                    }
                }
            }
        }
        p.frmScanQrLoader(function() {
            o()
        })
    }
    function n() {
        css = 'button.html5-qrcode-element,select.html5-qrcode-element,button.scanapp-button {appearance: none;background-color: #FAFBFC;border: 1px solid rgba(27, 31, 35, 0.15);border-radius: 6px;box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;box-sizing: border-box;color: #24292E;cursor: pointer;display: inline-block;font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";font-size: 14px;font-weight: 500;line-height: 20px;list-style: none;padding: 6px 16px;position: relative;transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);user-select: none;-webkit-user-select: none;touch-action: manipulation;vertical-align: middle;white-space: nowrap;word-wrap: break-word;margin-bottom: 5px;}button.html5-qrcode-element:hover,select.html5-qrcode-element:hover,button.scanapp-button:hover {background-color: #F3F4F6;text-decoration: none;transition-duration: 0.1s;}';
        $("<style>").text(css).appendTo($("body"))
    }
}
function QrCodeScannerInputs(d, c, a, b, e) {
    var g = $("<div>").css({
        margin: "10px -5px 5px"
    }).hide();
    var f = {
        fa: {
            clear: "پاکسازی",
            qrCode: "اسکن کیوآرکد",
            barCode: "اسکن بارکد",
        },
        en: {
            clear: "Clear",
            qrCode: "Scan QR Code",
            barCode: "Scan Bar Code",
        }
    };
    f = f[d];
    if (a.property.required_qrcode) {
        b.attr("readonly", true);
        $("<input>").attr({
            type: "submit",
            value: f.clear
        }).addClass("ravesh-button").click(function() {
            b.val("");
            e();
            return false
        }).appendTo(g.show())
    }
    if (a.property.qrcode) {
        $("<input>").attr({
            type: "submit",
            value: f.qrCode
        }).addClass("ravesh-button").click(function() {
            if (c) {
                appMng.showQrCode(a.id, function(j) {
                    b.val(j);
                    e()
                })
            } else {
                QrCodeScanner(d, "qrcode", function(j) {
                    b.val(j);
                    e()
                })
            }
            return false
        }).appendTo(g.show())
    }
    if (a.property.barcode) {
        $("<input>").attr({
            type: "submit",
            value: f.barCode
        }).addClass("ravesh-button").click(function() {
            if (c) {
                appMng.showBarCode(a.id, function(j) {
                    b.val(j);
                    e()
                })
            } else {
                QrCodeScanner(d, "barcode", function(j) {
                    b.val(j);
                    e()
                })
            }
            return false
        }).appendTo(g.show())
    }
    return g
}
createInsertFieldUI("attachment", function(f) {
    var j = this;
    j.needConfirm = true;
    var d = $("<div>").addClass("ravesh-file-upload form-input");
    var g = null;
    var k;
    var b;
    var a = "";
    var e;
    var l = window.webkitURL || window.URL;
    j.setOption = function() {
        var r = {
            width: "medium",
            defaultValue: "",
            fileType: "image",
            fileLength: "1mb",
            allowCropPicture: false,
            aspectWidth: "",
            aspectHeight: "",
            resizeWidth: "",
            resizeHeight: ""
        };
        f.property = $.extend(true, r, f.property);
        a = (function() {
            switch (f.property.fileType) {
            case "image":
                return "image/*";
            case "sound":
                return "audio/*";
            case "recordAudio":
                return "audio/*";
            case "video":
                return "video/*";
            case "pdf":
                return "application/pdf"
            }
            return ""
        }
        )();
        if (f.property.fileType == "recordAudio") {
            d.empty().css({
                "text-align": "unset"
            });
            b = new c();
            b.setOnRecordListener(function(x) {
                g = x
            });
            d.append(b.getUI());
            j.setFileName = function(x, y) {
                g = x;
                b.setFile(x)
            }
        } else {
            var u = FormUtility.randomId("file");
            d.empty().attr("id", u).css({
                "text-align": "center"
            });
            var t = $("<div>").addClass("upload-icon");
            var s = $("<span>").addClass("drag-here").text(j.getFrmRes("insert", "dragFile"));
            var q = $("<a>").attr({
                href: "#"
            }).text(j.getFrmRes("insert", "selectFile"));
            var p = $("<a>").attr({
                href: "#",
                target: "_blank"
            }).text(j.getFrmRes("insert", "view")).hide();
            var n = $("<span>").addClass("btn-cancel ravesh-button").css({
                "margin-top": 7
            }).text(j.getFrmRes("insert", "cancel")).hide();
            var o = $("<span>").addClass("btn-crop ravesh-button submit").css({
                "margin-top": 7
            }).text(j.getFrmRes("insert", "ok")).hide();
            var v = $("<img>").hide();
            k = $("<input>").attr({
                type: "file",
                accept: a
            }).hide();
            d.append(t, v, s, o, n, "&nbsp;", q, k, p);
            if (j.isApp) {
                s.remove();
                t.remove();
                p.remove();
                q.addClass("ravesh-button float-right");
                n.addClass("ravesh-button float-right")
            }
            d.bind("dragover", function(x) {
                if (f.property.disable) {
                    return false
                }
                x.stopPropagation();
                x.preventDefault();
                d.addClass("active")
            });
            d.bind("drop", function(x) {
                if (f.property.disable) {
                    return false
                }
                x.stopPropagation();
                x.preventDefault();
                d.removeClass("active");
                var y = x.originalEvent.dataTransfer.files;
                j.setFileName(y[0])
            });
            q.click(function() {
                if (f.property.disable) {
                    return false
                }
                if (!j.isApp) {
                    k.click()
                } else {
                    appMng.showInput(f.id, "", function(y, x) {
                        j.setFileName(y, x)
                    })
                }
                return false
            });
            t.click(function() {
                q.click()
            });
            n.click(function() {
                if (f.property.disable) {
                    return false
                }
                j.setFileName(null);
                k.val("");
                if (e) {
                    e.destroy()
                }
                o.hide()
            });
            o.click(function() {
                var x = e.getCroppedCanvas();
                x.toBlob(function(y) {
                    g = y;
                    e.destroy();
                    v.attr({
                        src: l.createObjectURL(y)
                    });
                    j.toggleError(false)
                }, e.fileType, 0.8);
                o.hide()
            });
            k.change(function() {
                if (f.property.disable) {
                    return false
                }
                j.setFileName(k[0].files[0])
            });
            j.setFileName = function(y, C) {
                p.hide();
                n.hide();
                v.hide();
                s.show();
                q.show();
                t.show();
                if (y == null) {
                    g = null;
                    j.toggleError(false)
                } else {
                    g = y;
                    q.hide();
                    n.show();
                    s.hide();
                    if (y.name) {
                        var x = j.checkValid();
                        j.toggleError(x, x);
                        if (f.property.fileType == "image" && x === false) {
                            if (f.property.allowCropPicture) {
                                v.attr({
                                    src: l.createObjectURL(y)
                                }).show();
                                v[0].addEventListener("load", z);
                                var A = {
                                    autoCropArea: 0.8,
                                    toggleDragModeOnDblclick: false,
                                    zoomOnWheel: true,
                                    viewMode: 1
                                };
                                if (f.property.aspectWidth != "" && f.property.aspectHeight != "") {
                                    A.aspectRatio = parseInt(f.property.aspectWidth) / parseInt(f.property.aspectHeight)
                                }
                                e = new Cropper(v[0],A);
                                e.fileType = y.type;
                                g = null;
                                function z() {
                                    l.revokeObjectURL(v.src);
                                    t.hide();
                                    o.show();
                                    v[0].removeEventListener("load", z)
                                }
                            } else {
                                var B = new FileReader();
                                B.onload = function(D) {
                                    v.attr("src", D.target.result).show();
                                    t.hide()
                                }
                                ;
                                B.readAsDataURL(y)
                            }
                        }
                    } else {
                        p.attr("href", C).show();
                        if (f.property.fileType == "image") {
                            v.attr("src", C).show();
                            t.hide()
                        }
                    }
                }
                j.onChange()
            }
            ;
            var w = function() {
                d.removeClass("active");
                if ($("#" + u).length == 0) {
                    $(window).unbind("dragover", w)
                }
            };
            $(window).bind("dragover", w)
        }
    }
    ;
    j.getUI = function() {
        j.setOption();
        return d
    }
    ;
    j.setWidth = function(n, o) {
        d.css({
            width: o,
            "max-width": "100%"
        })
    }
    ;
    j.setDisable = function(n) {
        d.toggleClass("disabled", n);
        if (k) {
            k.attr("disabled", n)
        }
        if (b) {
            b.setDisable(n)
        }
    }
    ;
    j.setValue = function(n) {
        j.setFileName(n.value, n.title)
    }
    ;
    j.getValue = function() {
        return {
            title: "",
            value: g || "",
            number: 0
        }
    }
    ;
    j.checkValid = function() {
        if (g == null) {
            return false
        }
        if (g.type == null) {
            return false
        }
        if (f.property.fileType == "pdf") {
            if (!g.type == "application/pdf") {
                return j.getFrmRes("insert", "fileExtensionNotValid")
            }
        } else {
            if (!g.type.match(a.replace("/", "."))) {
                return j.getFrmRes("insert", "fileExtensionNotValid")
            }
        }
        var n = parseInt(f.property.fileLength.replace("kb", "").replace("mb", "")) * 1024;
        if (f.property.fileLength.indexOf("mb") != -1) {
            n *= 1024
        }
        if (g.size > n) {
            return j.getFrmRes("insert", "fileSizeNotValid").replace("{0}", f.property.fileLength.replace("kb", " " + frmRes.insert.kilobyte).replace("mb", " " + frmRes.insert.megabyte))
        }
        return false
    }
    ;
    function c() {
        var o = this;
        var C = function(H) {};
        var p = null;
        var n = null;
        var B = null;
        var x = "";
        dataArray = [];
        var z = false;
        o.getUI = function() {
            return w
        }
        ;
        o.setOnRecordListener = function(H) {
            C = H;
            return o
        }
        ;
        o.setFile = D;
        o.setDisable = function(H) {
            z = H
        }
        ;
        var y = FormUtility.randomId("id_");
        var w = $("<div>").attr({
            id: y
        }).addClass("float-right").css({
            width: "100%"
        });
        var u = $("<button>").addClass("btn-record float-right").append($("<span>")).appendTo(w);
        var v = $("<button>").addClass("btn-stop float-right").append($("<span>")).hide().appendTo(w);
        var t = $("<button>").addClass("btn-play float-right").append($("<span>")).hide().appendTo(w);
        var r = $("<button>").addClass("btn-pause float-right").append($("<span>"), $("<span>")).hide().appendTo(w);
        var G = $("<div>").addClass("timer").addClass("timer").appendTo(w);
        var s = $("<div>").addClass("btn-place").appendTo(w);
        var A = $("<span>").css({
            color: "#888"
        }).text(j.getFrmRes("insert", "recordAudio")).appendTo(s);
        var q = $("<a>").attr({
            href: "#"
        }).text(j.getFrmRes("insert", "clear")).hide().appendTo(s);
        E(0);
        var F = setInterval(function() {
            if ($("#" + y).length == 0) {
                if (B) {
                    B.stop()
                }
                clearInterval(F)
            }
        }, 2000);
        u.click(function() {
            if (z) {
                return false
            }
            navigator.mediaDevices.getUserMedia({
                audio: true
            }).then(function(I) {
                B = new MediaRecorder(I);
                B.start();
                var H = new Audio();
                if ("srcObject"in H) {
                    H.srcObject = I
                } else {
                    H.src = window.URL.createObjectURL(I)
                }
                H.onloadedmetadata = function(J) {
                    H.muted = true;
                    H.play()
                }
                ;
                H.addEventListener("timeupdate", function() {
                    E(H.currentTime)
                });
                B.onstop = function(J) {
                    H.pause();
                    p = new Blob(dataArray,{
                        type: "audio/mp3;"
                    });
                    C(p);
                    dataArray = [];
                    if (I) {
                        $.each(I.getTracks(), function(K, M) {
                            M.stop()
                        })
                    }
                    B = null
                }
                ;
                B.ondataavailable = function(J) {
                    dataArray.push(J.data)
                }
                ;
                u.hide();
                v.show();
                t.hide();
                r.hide();
                A.css({
                    color: "#888"
                }).text(j.getFrmRes("insert", "recordingAudio"))
            }).catch(function(H) {
                A.css({
                    color: "#F44336"
                }).text(j.getFrmRes("insert", "needMicrophonePermission"))
            });
            return false
        });
        v.click(function() {
            if (z) {
                return false
            }
            B.stop();
            u.hide();
            v.hide();
            t.show();
            r.hide();
            A.hide();
            q.show();
            return false
        });
        t.click(function() {
            if (n == null) {
                var H = "";
                if (p != null) {
                    H = window.URL.createObjectURL(p)
                }
                if (x != "") {
                    H = x
                }
                if (H == "") {
                    return false
                }
                n = new Audio(H);
                n.addEventListener("playing", function() {
                    if (!n) {
                        return false
                    }
                    t.hide();
                    r.show()
                });
                n.addEventListener("pause", function() {
                    if (!n) {
                        return false
                    }
                    t.show();
                    r.hide()
                });
                n.addEventListener("timeupdate", function() {
                    if (!n) {
                        return false
                    }
                    E(n.currentTime)
                })
            }
            n.play();
            u.hide();
            v.hide();
            t.hide();
            r.show();
            return false
        });
        r.click(function() {
            if (!n) {
                return false
            }
            n.pause();
            u.hide();
            v.hide();
            t.show();
            r.hide();
            return false
        });
        q.click(function() {
            if (z) {
                return false
            }
            if (n) {
                n.pause()
            }
            p = null;
            n = null;
            B = null;
            dataArray = [];
            x = "";
            E(0);
            u.show();
            v.hide();
            t.hide();
            r.hide();
            A.show();
            q.hide();
            A.css({
                color: "#888"
            }).text(j.getFrmRes("insert", "recordAudio"));
            C(p);
            return false
        });
        function D(H) {
            x = H;
            u.hide();
            v.hide();
            t.show();
            r.hide();
            A.hide();
            q.show()
        }
        function E(J) {
            J = parseInt(J);
            var I = J % 60;
            var H = Math.floor(J / 60);
            G.text(FormUtility.numberLocalize((H < 10 ? "0" + H : H) + ":" + (I < 10 ? "0" + I : I), j.getFrmSetting("lang")))
        }
    }
});
createInsertFieldUI("booking", function(d) {
    var e = this;
    e.needConfirm = true;
    var b = $("<div>");
    var a;
    e.setOption = function() {
        var f = {
            width: "large",
            lang: e.getFrmSetting("lang"),
            approveRule: "{}",
            options: e.getFrmSetting("lang") == "fa" ? '{"serviceTime":30,"restTime":10,"maxSelectService":"1","serviceNumber":"1","dateType":"fa","workTimes":[[["09:00","17:00"]],[["09:00","17:00"]],[["09:00","17:00"]],[["09:00","17:00"]],[],[],[["09:00","17:00"]]],"periodType":"infinity","periodRollingDay":"30","periodRangeStartDay":"","periodRangeEndDay":"","selectServiceBeforeTime":"1","selectServiceBeforeTimeType":"hour","offTimes":[]}' : '{"serviceTime":30,"restTime":10,"maxSelectService":"1","serviceNumber":"1","dateType":"en","workTimes":[[],[["09:00","17:00"]],[["09:00","17:00"]],[["09:00","17:00"]],[["09:00","17:00"]],[["09:00","17:00"]],[]],"periodType":"infinity","periodRollingDay":"30","periodRangeStartDay":"","periodRangeEndDay":"","selectServiceBeforeTime":"1","selectServiceBeforeTimeType":"hour","offTimes":[]}'
        };
        d.property = $.extend(f, d.property);
        var g = JSON.parse(d.property.options);
        a = new c(g);
        a.getUI().appendTo(b.empty());
        a.setOnChangeListener(function() {
            e.toggleError(false);
            e.onChange()
        })
    }
    ;
    e.getUI = function() {
        e.setOption();
        return b
    }
    ;
    e.setWidth = function(f, g) {
        b.css("width", g)
    }
    ;
    e.setDisable = function(f) {
        a.setDisable(f)
    }
    ;
    e.setValue = function(f) {
        a.setValue(f)
    }
    ;
    e.getValue = function() {
        var f = a.getValue();
        f.isDate = true;
        f.lang = d.property.lang;
        return f
    }
    ;
    function c(w) {
        var f = this;
        var v = function() {};
        var y = null;
        var s = false;
        f.getUI = function() {
            return j
        }
        ;
        f.setOnChangeListener = function(B) {
            v = B
        }
        ;
        f.setDisable = function(B) {
            s = B;
            j.toggleClass("disabled", B);
            n.datepicker(B ? "disable" : "enable")
        }
        ;
        f.getValue = function() {
            if (y) {
                y.title = q(y.value.split(","), w.dateType);
                y.number = w.serviceNumber;
                return y
            } else {
                return A.getValue()
            }
        }
        ;
        f.setValue = function(C) {
            y = C;
            j.addClass("selected-date-mode");
            var B = $("<button>").addClass("ravesh-button dark").text(e.getFrmRes("insert", "reSelect"));
            x.empty().show().append($("<div>").addClass("selected-date").text(q(y.value.split(","), w.dateType)), B);
            B.click(function() {
                if (s) {
                    return false
                }
                j.removeClass("selected-date-mode");
                x.hide();
                y = null;
                v();
                return false
            })
        }
        ;
        var l = new Date(e.getFrmSetting("currentDate"));
        var j = $("<div>").addClass("ravesh-booking lang-" + w.dateType).attr({
            dir: w.dateType == "fa" ? "rtl" : "ltr"
        });
        var z = $("<div>").addClass("ravesh-date-picker").appendTo(j);
        var n = $("<div>").addClass("ravesh-date-picker").hide().appendTo(j);
        var x = $("<div>").addClass("ravesh-date-selected").hide().appendTo(j);
        function k(G) {
            var N = this;
            z.empty();
            var J = $("<div>").addClass("ui-datepicker-header").appendTo(z);
            var D = $("<div>").addClass("ui-datepicker-next").appendTo(J).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-w"));
            var E = $("<div>").addClass("ui-datepicker-prev").appendTo(J).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-e"));
            var C = $("<div>").addClass("ui-datepicker-title").appendTo(J);
            var F = $("<div>").addClass("booking-content").appendTo(z);
            var M = $("<div>").addClass("loading").append($("<div>").addClass("spinner")).hide().appendTo(F);
            N.getValue = function() {
                var O = "";
                $.each(B, function(P, Q) {
                    if (Q.elem.hasClass("active")) {
                        O = Q.date;
                        return false
                    }
                });
                if (O != "" && z.css("display") != "none") {
                    return {
                        title: q(O, w.dateType),
                        value: O[0] + "," + O[1] + ",1",
                        number: w.serviceNumber
                    }
                } else {
                    return {
                        title: "",
                        value: "",
                        number: 0
                    }
                }
            }
            ;
            var I = new Date(G);
            var H = p(I, w.dateType);
            C.text(H);
            if (w.dateType == "fa") {
                var K = new JalaliDate(I);
                n.datepicker("setDate", K.getFullDate())
            } else {
                n.datepicker("setDate", I)
            }
            E.toggleClass("ui-state-disabled", I <= l);
            D.click(function() {
                if (s) {
                    return false
                }
                I.setDate(I.getDate() + 1);
                A = new k(I);
                v()
            });
            E.click(function() {
                if (s) {
                    return false
                }
                if (I <= l) {
                    return false
                }
                I.setDate(I.getDate() - 1);
                A = new k(I);
                v()
            });
            C.click(function() {
                if (s) {
                    return false
                }
                z.hide();
                n.show();
                v()
            });
            setTimeout(g);
            var B = [];
            M.show();
            r(FormUtility.formatGregorian(I), function(P, O) {
                M.hide();
                if (!P) {
                    return false
                }
                if (O.length == 0) {
                    var Q = (w.dateType == "fa" ? "زمانی برای انتخاب در تاریخ {0} وجود ندارد!" : "There is no time to book on {0}!").replace("{0}", "<b>" + H + "</b>");
                    F.addClass("disable").append($("<div>").addClass("no-time").html(Q))
                }
                $.each(O, function(R, S) {
                    var U = parseInt(S[2]) >= parseInt(w.maxSelectService);
                    var T = $("<div>").addClass("item").toggleClass("disabled", U).text(FormUtility.numberLocalize(FormUtility.formatTime(new Date(S[0])) + " " + (w.dateType == "fa" ? "تا" : "to") + " " + FormUtility.formatTime(new Date(S[1])), w.dateType)).appendTo($("<div>").addClass("cover").appendTo(F)).click(function() {
                        if (s || U) {
                            return false
                        }
                        if (T.hasClass("active")) {
                            $.each(B, function(V, W) {
                                W.elem.removeClass("active")
                            })
                        } else {
                            $.each(B, function(V, W) {
                                W.elem.removeClass("active")
                            });
                            T.addClass("active")
                        }
                        v()
                    });
                    B.push({
                        date: S,
                        elem: T
                    })
                })
            })
        }
        var o = {
            minDate: l,
            regional: w.dateType == "fa" ? "fa" : "",
            onSelect: function(B) {
                A = new k(w.dateType == "fa" ? FormUtility.convertJalaliToGregorian(B) : B);
                z.show();
                n.hide();
                v()
            },
            onChangeMonthYear: function() {
                setTimeout(g)
            },
            beforeShowDay: function(B) {
                var D = true;
                var E = w.dateType == "fa" ? B.getGregorianDate() : B;
                var C = B.getDay();
                if (w.workTimes && w.workTimes.length > 0 && w.workTimes[C].length == 0) {
                    D = false
                }
                if (E < l) {
                    D = false
                }
                var F = new Date(E);
                F.setHours(23, 59);
                $.each(w.offTimes, function(H, I) {
                    var J = new Date(I[0]);
                    var G = new Date(I[1]);
                    if (E >= J && F <= G) {
                        D = false;
                        return false
                    }
                });
                return [D, "", ""]
            }
        };
        if (w.periodType == "rolling") {
            var t = new Date(l);
            t.setDate(t.getDate() + parseInt(w.periodRollingDay));
            o.maxDate = t
        } else {
            if (w.periodType == "range") {
                o.minDate = new Date(w.periodRangeStartDay);
                o.maxDate = new Date(w.periodRangeEndDay)
            }
        }
        if (w.selectServiceBeforeTimeType == "day" && w.selectServiceBeforeTime != 0) {
            var u = new Date(l);
            u.setDate(u.getDate() + parseInt(w.selectServiceBeforeTime));
            if (o.minDate < u) {
                o.minDate = u
            }
        }
        if (w.dateType == "fa") {
            o.minDate = FormUtility.convertGregorianToJalali(o.minDate);
            if (o.maxDate) {
                o.maxDate = FormUtility.convertGregorianToJalali(o.maxDate)
            }
        }
        n.datepicker(o);
        var A = new k(w.dateType == "fa" ? n.datepicker("getDate").getGregorianDate() : n.datepicker("getDate"));
        function r(C, B) {
            var D = e.getFrmSetting("serverUrl") + e.getFrmSetting("domain") + "/form/getBooking";
            FormUtility.post(D, {
                date: C,
                formId: e.getFrmSetting("id"),
                fieldId: d.id
            }, function(F, G, E) {
                B(F, E)
            })
        }
        function p(C, E) {
            if (E == "fa") {
                var B = new Date(C);
                var D = new JalaliDate((B.getMonth() + 1) + "/" + B.getDate() + "/" + B.getFullYear());
                return $.datepicker.regional.fa.dayNames[D.getDay()] + " " + FormUtility.numberLocalize(D.getDate(), "fa") + " " + $.datepicker.regional.fa.monthNames[D.getMonth()]
            } else {
                var B = new Date(C);
                return $.datepicker.regional[""].dayNames[B.getDay()] + ", " + B.getDate() + " " + $.datepicker.regional[""].monthNames[B.getMonth()]
            }
        }
        function q(B, C) {
            return p(B[0], C) + " " + FormUtility.numberLocalize(FormUtility.formatTime(new Date(B[0])) + " " + (w.dateType == "fa" ? "تا" : "to") + " " + FormUtility.formatTime(new Date(B[1])), C)
        }
        function g() {
            n.find(".ui-datepicker-title").click(function() {
                if (s) {
                    return false
                }
                z.show();
                n.hide();
                v()
            })
        }
        g()
    }
});
createInsertFieldUI("checkbox", function(b) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var a = new Array();
    c.setOption = function() {
        var e = {
            style: 1,
            defaultValue: "",
            list: [{
                id: 0,
                isDefault: false,
                items: [{
                    id: 1,
                    title: c.getFrmRes("design", "option1"),
                    number: 0,
                    order: 1
                }, {
                    id: 2,
                    title: c.getFrmRes("design", "option2"),
                    number: 0,
                    order: 2
                }, {
                    id: 3,
                    title: c.getFrmRes("design", "option3"),
                    number: 0,
                    order: 3
                }]
            }]
        };
        b.property = $.extend(false, e, b.property);
        c.defaultList = b.property.list[0].isDefault ? e.list[0] : b.property.list[0];
        c.container.empty();
        a = [];
        var d = b.property.defaultValue.split(",");
        var f = function(k) {
            return d.indexOf(k.toString()) != -1
        };
        var j = FormUtility.randomId("name");
        var g = b.property.list[0].items;
        if (b.property.randomSort && b.property.randomSort.toString().toLowerCase() == "true") {
            g = FormUtility.shuffleArray(g)
        }
        $.each(g, function(l, o) {
            var n = FormUtility.randomId();
            var k = $("<input>").attr({
                id: n,
                name: j,
                value: o.id,
                type: "checkbox",
                checked: f(o.id)
            });
            var p = $("<label>").css({
                display: "block"
            }).addClass("ravesh-form-control ravesh-form-control-checkbox type-" + c.formType).attr("for", n).append(k, $("<div>").addClass("cover").append($("<span>").text(o.title), $("<div>").addClass("ravesh-form-control-indicator")));
            c.container.append($("<div>").addClass("item").append(p));
            k.change(function() {
                c.onChange();
                c.toggleError(false)
            });
            a.push([k, o])
        });
        c.container.find("input").attr("disabled", b.property.disable || false);
        c.setStyle = function() {
            for (var k = 0; k <= 4; k++) {
                c.container.removeClass("style-" + k)
            }
            c.container.addClass("style-" + b.property.style)
        }
        ;
        c.setStyle()
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setDisable = function(d) {
        c.container.find("input").attr("disabled", d)
    }
    ;
    c.setValue = function(d) {
        c.container.find("input[value=" + d.value + "]").attr("checked", true)
    }
    ;
    c.getValue = function() {
        var d = new Array();
        $.each(a, function(f, e) {
            if (e[0].is(":checked")) {
                d.push({
                    title: e[1].title,
                    value: e[1].id,
                    number: e[1].number
                })
            }
        });
        return d
    }
    ;
    c.checkValid = function() {
        var e = parseInt(b.property.min || 0);
        var d = parseInt(b.property.max || 0);
        if (e > 0) {
            if (c.getValue().length < e) {
                return c.getFrmRes("insert", "minNumberSelect").replace("{0}", b.property.min)
            }
        }
        if (d > 0) {
            if (c.getValue().length > d) {
                return c.getFrmRes("insert", "maxNumberSelect").replace("{0}", b.property.max)
            }
        }
    }
});
createInsertFieldUI("customer", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "medium",
            customerGroup: "",
        };
        a.property = $.extend(false, d, a.property);
        c.container.empty();
        if (!c.isApp) {
            b = RaveshUI.selectCustomer({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                detail: c.getFrmRes("insert", "customer"),
                getAjaxParam: function(e) {
                    return {
                        key: e,
                        group: a.property.customerGroup == "" ? 0 : a.property.customerGroup,
                        rnd: $("#HFRnd").val()
                    }
                },
                onSelected: function() {
                    c.toggleError(false);
                    c.onChange()
                }
            })
        } else {
            b = new RaveshUI.DropDown({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                allowSearch: false,
                arrow: false,
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, "", function(f, e) {
                        b.setSelected({
                            id: f,
                            title: e
                        });
                        c.toggleError(false);
                        c.onChange()
                    })
                }
            })
        }
        c.container.append(b.getUI())
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        if (d.title) {
            b.setSelected({
                id: d.value,
                title: d.title,
                number: d.number
            })
        } else {
            b.setSelectedById(d.value)
        }
    }
    ;
    c.getValue = function() {
        var d = b.getSelectedOption();
        return {
            title: d.id == "" ? "" : d.title,
            value: d.id,
            number: d.number
        }
    }
});
createInsertFieldUI("date", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "small",
            defaultValue: "",
            lang: c.getFrmSetting("lang")
        };
        a.property = $.extend(d, a.property);
        var j = function() {
            var k = c.checkValid();
            c.toggleError(k != null, k);
            c.onChange()
        };
        c.container.empty();
        var e = "";
        var g = a.property.minDate;
        var f = a.property.maxDate;
        if (a.property.RollingDay) {
            g = new Date(c.getFrmSetting("currentDate"));
            f = new Date(c.getFrmSetting("currentDate"));
            f.setDate(g.getDate() + (parseInt(a.property.RollingDay) - 1));
            if (a.property.lang == "fa") {
                g = FormUtility.convertGregorianToJalali(g);
                f = FormUtility.convertGregorianToJalali(f)
            } else {
                g = g.toLocaleDateString();
                f = f.toLocaleDateString()
            }
        }
        if (a.property.mode == "ym" || a.property.mode == "ymd") {
            b = new RaveshUI.selectYearMonth({
                lang: a.property.lang,
                format: a.property.mode,
                minDate: g,
                maxDate: f,
                onSelected: function(k) {
                    c.onChange()
                }
            })
        } else {
            if (!c.isApp) {
                b = RaveshUI.selectDate({
                    allowSearch: g || f ? false : RaveshUI.isMobile ? false : true,
                    dir: c.getFrmSetting("dir"),
                    minDate: g,
                    maxDate: f,
                    lang: a.property.lang,
                    onSelected: function(k) {
                        var l = c.checkValid();
                        c.toggleError(l != null, l);
                        c.onChange()
                    }
                })
            } else {
                b = RaveshUI.selectDate({
                    dir: c.getFrmSetting("dir"),
                    lang: a.property.lang,
                    minDate: g,
                    maxDate: f,
                    arrow: false,
                    allowSearch: false,
                    createContent: function() {
                        return ""
                    },
                    onClick: function() {
                        b.hideMenu();
                        appMng.showInput(a.id, b.getSelectedOption().id || "", function(k) {
                            b.setSelected(k);
                            j()
                        })
                    }
                });
                e = $("<div>").css({
                    margin: "10px -5px 5px"
                });
                $("<input>").attr({
                    type: "submit",
                    value: c.getFrmRes("insert", "clear")
                }).addClass("ravesh-button").click(function() {
                    if (a.property.disable) {
                        return false
                    }
                    b.setSelected("");
                    j();
                    return false
                }).appendTo(e);
                $("<input>").attr({
                    type: "submit",
                    value: c.getFrmRes("insert", "currentDate")
                }).addClass("ravesh-button").click(function() {
                    if (a.property.disable) {
                        return false
                    }
                    b.setCurrentDate();
                    j();
                    return false
                }).appendTo(e)
            }
        }
        b.setDisable(a.property.disable || false);
        c.container.append(b.getUI(), e);
        if (a.property.defaultValue == "auto") {
            if (a.property.mode == "ym" || a.property.mode == "ymd") {
                b.setSelected("auto")
            } else {
                b.setCurrentDate()
            }
        } else {
            if (a.property.defaultValue != "" || a.property.defaultValue != null) {
                b.setSelected(a.property.defaultValue)
            }
        }
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        if (a.property.lang == "fa") {
            b.setSelected(FormUtility.convertGregorianToJalali(d.value))
        } else {
            b.setSelected(d.value)
        }
    }
    ;
    c.getValue = function() {
        var d = (b.getSelectedOption().id || "").trim();
        return {
            title: "",
            value: d,
            number: 0,
            isDate: true,
            lang: a.property.lang
        }
    }
    ;
    c.checkValid = function() {
        if (b.getSelectedOption().id == null || b.getSelectedOption().id.trim() == "") {
            return null
        }
        if (!b.checkValid()) {
            return c.getFrmRes("insert", "dateNotValid")
        }
    }
});
createInsertFieldUI("dependList", function(c) {
    var g = this;
    g.needConfirm = true;
    g.container = $("<div>");
    var a = new Array();
    var d = {};
    var e;
    g.setOption = function() {
        var k = {
            style: 2,
            defaultValue: "",
            width: "medium",
            hiddenTitle: true,
            list: [{
                id: 0,
                isDefault: true,
                levels: [{
                    id: 1,
                    title: g.getFrmRes("design", "option1")
                }, {
                    id: 2,
                    title: g.getFrmRes("design", "option2")
                }]
            }]
        };
        c.property = $.extend(true, k, c.property);
        e = g.getFrmSetting("serverUrl") + g.getFrmSetting("domain") + "/form/getParam";
        var j = function(p, q) {
            var l = $("<div>");
            var n = $("<div>").addClass("content-cover2");
            var t = $("<span>").addClass("title-str").text(q.title);
            var r = $("<span>").addClass("required").css("color", "red").text(" * ");
            var s = $("<div>").addClass("title2").append(r, t);
            var v = $("<div>");
            var u = $("<div>").addClass("wrapper2").append(v);
            var o = new RaveshUI.DropDown({
                dir: g.getFrmSetting("dir"),
                allowSearch: true,
                options: p == 0 ? b(c.property.list[0].items) : b(),
                onSelected: function(y) {
                    var w = c.property.list[0].levels.length - 1;
                    if (p == w) {
                        g.toggleError(false);
                        g.onChange();
                        return false
                    }
                    if (y.id == "") {
                        $.each(a, function(z, A) {
                            if (z > p) {
                                A.setOptions(b())
                            }
                        })
                    } else {
                        $.each(a, function(z, A) {
                            if (z > p + 1) {
                                A.setOptions(b())
                            }
                        });
                        var x = "param_" + y.id;
                        if (d[x] == null) {
                            a[p + 1].showLoading();
                            FormUtility.post(e, {
                                listId: c.property.list[0].id,
                                parentId: y.id
                            }, function(A, B, z) {
                                a[p + 1].hideLoading();
                                if (A) {
                                    d[x] = z;
                                    a[p + 1].setOptions(b(z));
                                    if (a[p + 1].getSelectedOption().number == 0) {
                                        g.toggleError(false);
                                        g.onChange()
                                    }
                                }
                            })
                        } else {
                            a[p + 1].setOptions(b(d[x]))
                        }
                    }
                    g.toggleError(false);
                    g.onChange()
                }
            });
            v.append(o.getUI());
            o.levelTitle = q.title;
            a.push(o);
            n.append(s, u);
            return l.append(n)
        };
        g.container.empty();
        a = new Array();
        $.each(c.property.list[0].levels, function(n, o) {
            g.container.append(j(n, o))
        });
        g.setStyle = function() {
            for (var l = 0; l <= 3; l++) {
                g.container.removeClass("style-" + (l + 1))
            }
            g.container.addClass("style-" + c.property.style)
        }
        ;
        g.setStyle()
    }
    ;
    function b(j) {
        var k = [{
            id: "",
            title: g.getFrmRes("insert", "pleaseSelect"),
            number: 0
        }];
        return k.concat(j || [])
    }
    var f = 0;
    g.getUI = function() {
        g.setOption();
        return g.container
    }
    ;
    g.setWidth = function(j, k) {
        $.each(a, function(l, n) {
            n.setWidth(k)
        })
    }
    ;
    g.setDisable = function(j) {
        $.each(a, function(k, l) {
            l.setDisable(j)
        })
    }
    ;
    g.setValue = function(l) {
        var j = a[f];
        j.setSelected({
            id: l.value,
            title: l.title,
            number: l.number
        });
        var k = a[f + 1];
        if (!k) {
            return false
        }
        k.showLoading();
        FormUtility.post(e, {
            listId: c.property.list[0].id,
            parentId: j.getSelectedOption().id
        }, function(o, p, n) {
            k.hideLoading();
            if (o) {
                k.setOptions(b(n), true)
            }
        });
        f++
    }
    ;
    g.getValue = function() {
        var j = new Array();
        $.each(a, function(k, l) {
            var n = l.getSelectedOption();
            j.push({
                title: n.id == "" ? "" : n.title,
                value: n.id,
                number: n.number
            })
        });
        return j
    }
    ;
    g.checkValid = function() {
        if (c.property.required) {
            for (var j = 0; j <= a.length - 1; j++) {
                var k = a[j].getSelectedOption().id || "";
                if (k == "") {
                    return g.getFrmRes("insert", "required") + "(" + a[j].levelTitle + ")"
                }
            }
        }
    }
});
createInsertFieldUI("editor", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "large",
            min: 0,
            max: 1000,
            height: 180
        };
        a.property = $.extend(d, a.property);
        b = new RaveshUI.Editor({
            lang: c.getFrmSetting("lang"),
            advanceItem: false,
            allowChangeFont: false,
            width: "100%",
            minHeight: parseInt(a.property.height),
            onChange: function() {
                c.toggleError(false);
                c.onChange()
            }
        });
        c.container.empty().append(b.getUI())
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        c.container.css({
            width: e
        })
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        b.val(d.value)
    }
    ;
    c.getValue = function() {
        return {
            title: "",
            value: b.val().trim(),
            number: 0
        }
    }
    ;
    c.checkValid = function() {
        var d = b.getUI().text();
        if (d.length < parseInt(a.property.min)) {
            return c.getFrmRes("insert", "minCharacter").replace("{0}", a.property.min)
        }
        if (d.length > parseInt(a.property.max)) {
            return c.getFrmRes("insert", "maxCharacter").replace("{0}", a.property.max)
        }
    }
});
createInsertFieldUI("email", function(a) {
    var b = this;
    b.needConfirm = true;
    b.container = $("<div>");
    b.setOption = function() {
        var c = {
            width: "medium",
            placeholder: ""
        };
        a.property = $.extend(c, a.property);
        b.input = $("<input>").attr({
            type: "email",
            placeholder: a.property.placeholder,
            maxLength: 255
        }).addClass("form-input").css({
            direction: "ltr",
            "text-align": "left"
        }).appendTo(b.container.empty());
        if (a.property.rememberMe) {
            b.input.attr("id", a.type + "_" + a.id)
        }
        b.container.append(QrCodeScannerInputs(b.getFrmSetting("lang"), b.isApp, a, b.input, function() {
            b.input.blur()
        }));
        b.input.keyup(function() {
            b.toggleError(false);
            b.onChange()
        });
        b.input.blur(function() {
            var d = b.checkValid();
            b.toggleError(d != null, d)
        })
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setWidth = function(c, d) {
        b.input.css("width", d)
    }
    ;
    b.setDisable = function(c) {
        b.input.attr("disabled", c)
    }
    ;
    b.setValue = function(c) {
        b.input.val(c.value)
    }
    ;
    b.getValue = function() {
        return {
            title: "",
            value: b.input.val().trim(),
            number: 0
        }
    }
    ;
    b.checkValid = function() {
        var c = b.input.val().trim();
        if (c != "") {
            if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(c.toLowerCase())) {
                return b.getFrmRes("insert", "emailNotValid")
            }
        }
    }
});
createInsertFieldUI("factor", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "medium",
            factorType: "3"
        };
        a.property = $.extend(false, d, a.property);
        c.container.empty();
        if (!c.isApp) {
            b = RaveshUI.selectFactor({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                detail: c.getFrmRes("insert", "customer"),
                price: c.getFrmRes("insert", "price"),
                getAjaxParam: function(e) {
                    return {
                        key: e,
                        factorType: a.property.factorType
                    }
                },
                onSelected: function() {
                    c.toggleError(false);
                    c.onChange()
                }
            })
        } else {
            b = new RaveshUI.DropDown({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                allowSearch: false,
                arrow: false,
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, "", function(g, f, e) {
                        b.setSelected({
                            id: g,
                            title: f,
                            price: e
                        });
                        c.toggleError(false);
                        c.onChange()
                    })
                }
            })
        }
        c.container.append(b.getUI())
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        b.setSelected({
            id: d.value,
            title: d.title,
            price: d.number
        })
    }
    ;
    c.getValue = function() {
        var d = b.getSelectedOption();
        return {
            title: d.id == "" ? "" : d.title,
            value: d.id,
            number: parseInt(d.price) || 0
        }
    }
});
createInsertFieldUI("formfield", function(a) {
    var d = this;
    d.needConfirm = true;
    d.container = $("<div>");
    var b;
    d.setOption = function() {
        var e = {
            width: "medium",
            formId: "",
            fieldId: "",
            fieldType: "",
            defaultValue: ""
        };
        a.property = $.extend(false, e, a.property);
        if (!d.isApp) {
            b = new RaveshUI.DropDown({
                dir: d.getFrmSetting("dir"),
                defaultTitle: d.getFrmRes("insert", "pleaseSelect"),
                emptyOption: {
                    id: "",
                    title: d.getFrmRes("insert", "pleaseSelect")
                },
                onSelected: function() {
                    d.toggleError(false);
                    d.onChange();
                    c(b.getSelectedOption().id)
                },
                ajaxUrl: d.getFrmSetting("serverUrl") + d.getFrmSetting("domain") + "/form/searchFormValueParam",
                getAjaxParamPostExtra: false,
                getAjaxParam: function(f) {
                    return {
                        userCode: $("#HFUserCode").val() || "",
                        key: f,
                        forFormId: d.getFrmSetting("id"),
                        forFieldId: a.id,
                        formId: a.property.formId,
                        fieldId: a.property.fieldId
                    }
                },
                createOptionUI: function(f) {
                    var g = d.getFrmRes("insert", "formNum") + " " + f.id.split("_")[0];
                    var j = $("<div>").addClass("title-and-detail");
                    if (f.id == "") {
                        j.append($("<div>").addClass("title").text(f.title).css("margin-top", 16))
                    } else {
                        j.append($("<div>").addClass("title").text(f.title));
                        j.append($("<div>").addClass("detail").text(f.custName != "" ? f.custName + " - " + g : g))
                    }
                    return j
                }
            })
        } else {
            b = new RaveshUI.DropDown({
                dir: d.getFrmSetting("dir"),
                defaultTitle: d.getFrmRes("insert", "pleaseSelect"),
                allowSearch: false,
                arrow: false,
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, "", function(g, f) {
                        b.setSelected({
                            id: g,
                            title: f
                        });
                        d.toggleError(false);
                        d.onChange();
                        c(g)
                    })
                }
            })
        }
        d.container.empty().append(b.getUI())
    }
    ;
    function c(f) {
        if (f == "" || !f) {
            return false
        }
        if (a.property.defaultValue == "" || a.property.defaultValue == "[]") {
            return false
        }
        if (b.showLoading) {
            b.showLoading()
        }
        var e = f.split("_")[0];
        FormUtility.post(d.getFrmSetting("serverUrl") + d.getFrmSetting("domain") + "/form/getFormValueFieldForm", {
            formValueId: e,
            userCode: $("#HFUserCode").val() || "",
            forFormId: d.getFrmSetting("id"),
            forFieldId: a.id,
            formId: a.property.formId,
            fieldId: a.property.fieldId
        }, function(j, k, g) {
            if (b.hideLoading) {
                b.hideLoading()
            }
            if (j) {
                d.setFieldValue(g)
            }
        })
    }
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setWidth = function(e, f) {
        b.setWidth(f)
    }
    ;
    d.setDisable = function(e) {
        b.setDisable(e)
    }
    ;
    d.setValue = function(e) {
        b.setSelected({
            id: e.value,
            title: e.title,
            number: e.number
        })
    }
    ;
    d.getValue = function() {
        var e = b.getSelectedOption();
        return {
            title: e.id == "" ? "" : e.title,
            value: e.id,
            number: e.number || 0
        }
    }
});
createInsertFieldUI("formule", function(data) {
    var that = this;
    var finalNumber = 0;
    that.container = $("<div>");
    that.content = $("<div>").appendTo(that.container);
    var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var i, a = 1, s = arguments.length; a < s; a++) {
                for (var n in i = arguments[a]) {
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            return t
        }
        ).apply(this, arguments)
    }
    ;
    var CountUp = function() {
        function t(t, i, a) {
            var s = this;
            this.target = t,
            this.endVal = i,
            this.options = a,
            this.version = "2.0.7",
            this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: ""
            },
            this.finalEndVal = null,
            this.useEasing = !0,
            this.countDown = !1,
            this.error = "",
            this.startVal = 0,
            this.paused = !0,
            this.count = function(t) {
                s.startTime || (s.startTime = t);
                var i = t - s.startTime;
                s.remaining = s.duration - i,
                s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (i / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i / s.duration),
                s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal,
                s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)),
                s.printValue(s.frameVal),
                i < s.duration ? s.rAF = requestAnimationFrame(s.count) : null !== s.finalEndVal ? s.update(s.finalEndVal) : s.callback && s.callback()
            }
            ,
            this.formatNumber = function(t) {
                var i, a, n, e, r, o = t < 0 ? "-" : "";
                if (i = Math.abs(t).toFixed(s.options.decimalPlaces),
                n = (a = (i += "").split("."))[0],
                e = a.length > 1 ? s.options.decimal + a[1] : "",
                s.options.useGrouping) {
                    r = "";
                    for (var l = 0, h = n.length; l < h; ++l) {
                        0 !== l && l % 3 == 0 && (r = s.options.separator + r),
                        r = n[h - l - 1] + r
                    }
                    n = r
                }
                return s.options.numerals && s.options.numerals.length && (n = n.replace(/[0-9]/g, function(t) {
                    return s.options.numerals[+t]
                }),
                e = e.replace(/[0-9]/g, function(t) {
                    return s.options.numerals[+t]
                })),
                o + s.options.prefix + n + e + s.options.suffix
            }
            ,
            this.easeOutExpo = function(t, i, a, s) {
                return a * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i
            }
            ,
            this.options = __assign(__assign({}, this.defaults), a),
            this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
            this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
            this.startVal = this.validateValue(this.options.startVal),
            this.frameVal = this.startVal,
            this.endVal = this.validateValue(i),
            this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
            this.resetDuration(),
            this.options.separator = String(this.options.separator),
            this.useEasing = this.options.useEasing,
            "" === this.options.separator && (this.options.useGrouping = !1),
            this.el = "string" == typeof t ? document.getElementById(t) : t,
            this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
        }
        return t.prototype.determineDirectionAndSmartEasing = function() {
            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > t;
            var i = t - this.startVal;
            if (Math.abs(i) > this.options.smartEasingThreshold) {
                this.finalEndVal = t;
                var a = this.countDown ? 1 : -1;
                this.endVal = t + a * this.options.smartEasingAmount,
                this.duration = this.duration / 2
            } else {
                this.endVal = t,
                this.finalEndVal = null
            }
            this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
        }
        ,
        t.prototype.start = function(t) {
            this.error || (this.callback = t,
            this.duration > 0 ? (this.determineDirectionAndSmartEasing(),
            this.paused = !1,
            this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
        }
        ,
        t.prototype.pauseResume = function() {
            this.paused ? (this.startTime = null,
            this.duration = this.remaining,
            this.startVal = this.frameVal,
            this.determineDirectionAndSmartEasing(),
            this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
            this.paused = !this.paused
        }
        ,
        t.prototype.reset = function() {
            cancelAnimationFrame(this.rAF),
            this.paused = !0,
            this.resetDuration(),
            this.startVal = this.validateValue(this.options.startVal),
            this.frameVal = this.startVal,
            this.printValue(this.startVal)
        }
        ,
        t.prototype.update = function(t) {
            cancelAnimationFrame(this.rAF),
            this.startTime = null,
            this.endVal = this.validateValue(t),
            this.endVal !== this.frameVal && (this.startVal = this.frameVal,
            this.finalEndVal || this.resetDuration(),
            this.finalEndVal = null,
            this.determineDirectionAndSmartEasing(),
            this.rAF = requestAnimationFrame(this.count))
        }
        ,
        t.prototype.printValue = function(t) {
            var i = this.formattingFn(t);
            "INPUT" === this.el.tagName ? this.el.value = i : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i
        }
        ,
        t.prototype.ensureNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        }
        ,
        t.prototype.validateValue = function(t) {
            var i = Number(t);
            return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: " + t,
            null)
        }
        ,
        t.prototype.resetDuration = function() {
            this.startTime = null,
            this.duration = 1000 * Number(this.options.duration),
            this.remaining = this.duration
        }
        ,
        t
    }();
    that.setOption = function() {
        var defaultProperty = {
            style: 0,
            width: "medium",
            defaultValue: "",
            prefix: "",
            suffix: "",
            numberWithCommas: true,
            fixDecimal: false,
            counter: true
        };
        data.property = $.extend(defaultProperty, data.property);
        formatNumber(0);
        that.setStyle()
    }
    ;
    var lastNumber = 0;
    function formatNumber(inputVal) {
        if (data.property.style == -1) {
            inputVal = ""
        }
        if (inputVal == null) {
            inputVal = ""
        }
        inputVal = inputVal.toString();
        if (data.property.counter) {
            var countupOpt = {
                duration: lastNumber == inputVal ? 0 : 1,
                useGrouping: data.property.numberWithCommas,
                prefix: (data.property.prefix != "" ? data.property.prefix + " " : ""),
                suffix: " " + data.property.suffix
            };
            lastNumber = inputVal;
            if (inputVal.indexOf(".") >= 0) {
                var decimalPosition = inputVal.indexOf(".");
                var decimal = FormUtility.numberLocalize(inputVal.substring(decimalPosition + 1), that.getFrmSetting("lang"));
                countupOpt.suffix = "." + decimal + " " + data.property.suffix;
                inputVal = inputVal.substring(0, decimalPosition)
            }
            if (that.getFrmSetting("lang") == "fa") {
                countupOpt.numerals = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
            }
            var countup = new CountUp(that.content[0],inputVal,countupOpt);
            countup.start()
        } else {
            var result = getFormatString(inputVal);
            that.content.html(result.html);
            lastNumber = inputVal
        }
    }
    function getFormatString(inputVal) {
        var result = "";
        inputVal = inputVal.toString();
        var splitNumber = function(n) {
            var isNegative = n.indexOf("-") == 0;
            if (data.property.numberWithCommas) {
                return (isNegative ? "-" : "") + n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            } else {
                return (isNegative ? "-" : "") + n.replace(/\D/g, "")
            }
        };
        if (inputVal.indexOf(".") >= 0) {
            inputVal = parseFloat(inputVal).toFixed(2).toString();
            var decimalPosition = inputVal.indexOf(".");
            var leftSide = inputVal.substring(0, decimalPosition);
            var rightSide = inputVal.substring(decimalPosition + 1);
            leftSide = splitNumber(leftSide);
            result = leftSide + "." + rightSide
        } else {
            result = splitNumber(inputVal)
        }
        return {
            text: (data.property.prefix != "" ? data.property.prefix + " " : "") + FormUtility.numberLocalize(result, that.getFrmSetting("lang")) + " " + data.property.suffix,
            html: (data.property.prefix != "" ? data.property.prefix + " " : "") + '<span style="direction:ltr">' + FormUtility.numberLocalize(result, that.getFrmSetting("lang")) + "</span> " + data.property.suffix
        }
    }
    function getNumber(fieldsParams, fields, groupNum, loopCount) {
        if (loopCount > 60) {
            throw ("Maximum call stack")
        }
        var formule = data.property.defaultValue.trim();
        var fixDecimal = data.property.fixDecimal || false;
        var formuleField = $.grep(fields, function(s) {
            return s.data.id.toString() == data.id && s.sectionUI.data.group == groupNum
        });
        if (formuleField.length == 0) {
            return false
        } else {
            formuleField = formuleField[0]
        }
        var fns = [{
            name: "YearDiff",
            regex: /YearDiff\( field[_]\S* , field[_]\S* \)/g
        }, {
            name: "MonthDiff",
            regex: /MonthDiff\( field[_]\S* , field[_]\S* \)/g
        }, {
            name: "DayDiff",
            regex: /DayDiff\( field[_]\S* , field[_]\S* \)/g
        }, {
            name: "TimeDiff",
            regex: /TimeDiff\( field[_]\S* , field[_]\S* \)/g
        }];
        $.each(fns, function(f, fn) {
            var fnStrs = formule.match(fn.regex) || [];
            $.each(fnStrs, function(fs, fnStr) {
                if (fn.name == "YearDiff" || fn.name == "MonthDiff" || fn.name == "DayDiff") {
                    var argumans = fnStr.replace(fn.name, "").replace("(", "").replace(")", "").replace(/ /g, "").replace(/field[_]/g, "").trim().split(",");
                    var dateParam1 = getParamsByFieldId(argumans[0]);
                    var dateParam2 = getParamsByFieldId(argumans[1]);
                    if (!dateParam1 || !dateParam2) {
                        formule = formule.replace(fnStr, 0);
                        return
                    }
                    dateParam1 = dateParam1.params;
                    dateParam2 = dateParam2.params;
                    if (dateParam1[0].value.trim() == "" || dateParam2[0].value.trim() == "") {
                        formule = formule.replace(fnStr, 0);
                        return
                    }
                    var diffrent = 0, date1, date2, diffBy = dateParam1[0].lang;
                    if (diffBy == "fa") {
                        date1 = dateParam1[0].lang == "fa" ? FormUtility.convertStrToJalali(dateParam1[0].value) : FormUtility.convertGregorianToJalaliObj(dateParam1[0].value);
                        date2 = dateParam2[0].lang == "fa" ? FormUtility.convertStrToJalali(dateParam2[0].value) : FormUtility.convertGregorianToJalaliObj(dateParam2[0].value)
                    } else {
                        date1 = new Date(dateParam1[0].lang == "fa" ? FormUtility.convertJalaliToGregorian(dateParam1[0].value) : dateParam1[0].value);
                        date2 = new Date(dateParam2[0].lang == "fa" ? FormUtility.convertJalaliToGregorian(dateParam2[0].value) : dateParam2[0].value)
                    }
                    if (fn.name == "YearDiff") {
                        diffrent = date1.getFullYear() - date2.getFullYear()
                    }
                    if (fn.name == "MonthDiff") {
                        diffrent = (date1.getMonth() + 12 * date1.getFullYear()) - (date2.getMonth() + 12 * date2.getFullYear())
                    }
                    if (fn.name == "DayDiff") {
                        diffrent = Math.round((date1.getTime() - date2.getTime()) / (24 * 3600 * 1000))
                    }
                    formule = formule.replace(fnStr, diffrent)
                } else {
                    if (fn.name == "TimeDiff") {
                        var argumans = fnStr.replace(fn.name, "").replace("(", "").replace(")", "").replace(/ /g, "").replace(/field[_]/g, "").trim().split(",");
                        var timeParam1 = getParamsByFieldId(argumans[0]);
                        var timeParam2 = getParamsByFieldId(argumans[1]);
                        if (!timeParam1 || !timeParam2) {
                            formule = formule.replace(fnStr, 0);
                            return
                        }
                        timeParam1 = timeParam1.params;
                        timeParam2 = timeParam2.params;
                        if (timeParam1[0].value.trim() == "" || timeParam2[0].value.trim() == "") {
                            formule = formule.replace(fnStr, 0);
                            return
                        }
                        var diffrent = Math.round((new Date("2020/01/01 " + timeParam1[0].value).getTime() - new Date("2020/01/01 " + timeParam2[0].value).getTime()) / 60000);
                        formule = formule.replace(fnStr, diffrent)
                    }
                }
            })
        });
        var result = "";
        var arrFormule = formule.split(" ");
        $.each(arrFormule, function(s, str) {
            if (str.indexOf("field_") != -1) {
                var fieldId = str.replace("field_", "");
                var params = getParamsByFieldId(fieldId);
                if (params) {
                    var sumNumber = 0;
                    $.each(params.params, function(p, param) {
                        if (params.field.data.type == "formule") {
                            sumNumber += parseFloat(param.getNumber(fieldsParams, fields, param.groupNum, ++loopCount))
                        } else {
                            sumNumber += parseFloat(param.number)
                        }
                    });
                    result += sumNumber.toString()
                } else {
                    result += "0"
                }
            } else {
                result += str
            }
            result += " "
        });
        function getParamsByFieldId(fieldId) {
            if (fieldId == "current_date") {
                return {
                    params: [{
                        value: that.getFrmSetting("currentDate"),
                        lang: "en"
                    }],
                    field: {
                        data: {
                            type: "date"
                        }
                    }
                }
            }
            if (fieldId == "current_time") {
                return {
                    params: [{
                        value: FormUtility.getCurrentTime(),
                        lang: "en"
                    }],
                    field: {
                        data: {
                            type: "time"
                        }
                    }
                }
            }
            var field = $.grep(fields, function(s) {
                return s.data.id.toString() == fieldId
            });
            if (field.length == 0) {
                return false
            } else {
                field = field[0]
            }
            var params = $.grep(fieldsParams, function(s) {
                return s.fieldId.toString() == fieldId
            });
            if (params.length == 0) {
                return false
            } else {
                if (formuleField.sectionUI.data.property.allowDuplicate && formuleField.sectionUI.data.id == field.sectionUI.data.id) {
                    params = $.grep(params, function(s) {
                        return s.fieldId.toString() == fieldId && s.groupNum == groupNum
                    })
                }
                return {
                    params: params,
                    field: field
                }
            }
        }
        var resultNumber = eval(result);
        if (resultNumber == null) {
            resultNumber = 0
        }
        if (fixDecimal) {
            resultNumber = resultNumber.toFixed()
        }
        return resultNumber
    }
    that.setStyle = function() {
        that.container.removeClass("form-input").removeClass("form-text-style");
        that.content.show().css({
            "font-size": "unset"
        });
        that.container.find(".is-hidden-formule").remove();
        if (data.property.style == -1) {
            that.content.hide();
            that.container.append($("<div>").addClass("is-hidden-formule").append($("<i>").addClass("icon-info"), $("<span>").html(that.getFrmRes("design", "formuleStyle0Detail").replace(/\\n/g, "<br>"))))
        } else {
            if (data.property.style == 0) {
                that.container.addClass("form-input")
            } else {
                if (data.property.style == 1) {
                    that.container.addClass("form-text-style");
                    that.content.css({
                        "font-size": "13px"
                    })
                } else {
                    if (data.property.style == 2) {
                        that.container.addClass("form-text-style");
                        that.content.css({
                            "font-size": "16px"
                        })
                    } else {
                        if (data.property.style == 3) {
                            that.container.addClass("form-text-style");
                            that.content.css({
                                "font-size": "20px"
                            })
                        }
                    }
                }
            }
        }
    }
    ;
    that.setNumber = function() {
        formatNumber(0)
    }
    ;
    that.getUI = function() {
        that.setOption();
        return that.container
    }
    ;
    that.setWidth = function(mode, width) {
        that.container.css("width", width)
    }
    ;
    that.setValue = function(value) {}
    ;
    that.setDisable = function(enable) {}
    ;
    that.getValue = function() {
        return {
            title: finalNumber,
            value: finalNumber.toString(),
            number: finalNumber,
            getNumber: getNumber
        }
    }
    ;
    that.onChangeForm = function(fieldsParams, fields, groupNum) {
        finalNumber = 0;
        try {
            finalNumber = getNumber(fieldsParams, fields, groupNum, 0);
            var paramFormule = $.grep(fieldsParams, function(s) {
                return s.fieldId == data.id && s.groupNum == groupNum
            });
            if (paramFormule.length > 0) {
                paramFormule[0].title = getFormatString(finalNumber).text;
                paramFormule[0].value = finalNumber.toString()
            }
        } catch (e) {
            finalNumber = 0;
            console.error(e)
        }
        formatNumber(finalNumber);
        that.runRule()
    }
});
createInsertFieldUI("label", function(a) {
    var b = this;
    b.container = $("<div>");
    b.setOption = function() {
        var c = {
            hiddenTitle: false,
        };
        a.property = $.extend(c, a.property);
        if (!a.property.defaultValue) {
            a.property.requiredRichTitle = true;
            b.container.hide()
        }
        if (!a.property.detail) {
            a.property.noDetail = true
        }
        b.container.css({
            "line-height": 1.7
        }).html(a.property.defaultValue)
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setDisable = function(c) {}
    ;
    b.setValue = function(c) {
        b.container.html(c.value).toggle(c.value)
    }
    ;
    b.getValue = function() {
        return {
            title: "",
            value: "",
            number: 0
        }
    }
});
createInsertFieldUI("list", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "medium",
            defaultValue: "",
            allowSearch: false,
            list: [{
                id: 0,
                isDefault: false,
                items: [{
                    id: 1,
                    title: c.getFrmRes("design", "option1"),
                    number: 0,
                    order: 1
                }, {
                    id: 2,
                    title: c.getFrmRes("design", "option2"),
                    number: 0,
                    order: 2
                }, {
                    id: 3,
                    title: c.getFrmRes("design", "option3"),
                    number: 0,
                    order: 3
                }]
            }]
        };
        a.property = $.extend(false, d, a.property);
        c.defaultList = a.property.list[0].isDefault ? d.list[0] : a.property.list[0];
        c.container.empty();
        var e = {
            dir: c.getFrmSetting("dir"),
            defaultId: a.property.defaultValue,
            allowSearch: a.property.allowSearch,
            onSelected: function() {
                c.toggleError(false);
                c.onChange()
            },
            options: (function() {
                var f = [{
                    id: "",
                    title: c.getFrmRes("insert", "pleaseSelect"),
                    number: 0
                }];
                return f.concat(a.property.list[0].items)
            }
            )(),
        };
        if (c.isApp) {
            e.arrow = false;
            e.allowSearch = false;
            e.onClick = function() {
                b.hideMenu();
                appMng.showInput(a.id, "", function(f) {
                    b.setSelectedById(f);
                    c.toggleError(false);
                    c.onChange()
                })
            }
        }
        if (a.property.allowSearch || c.isApp) {
            b = new RaveshUI.DropDown(e)
        } else {
            b = $("<select>").addClass("ravesh-dropdown");
            $.each([{
                id: "",
                title: c.getFrmRes("insert", "pleaseSelect"),
                number: 0
            }].concat(a.property.list[0].items), function(f, g) {
                $("<option>").val(g.id).text(g.title).data("number", g.number).appendTo(b)
            });
            b.getUI = function() {
                return b
            }
            ;
            b.setWidth = function(f) {
                return b.css({
                    width: f
                })
            }
            ;
            b.setDisable = function(f) {
                return b.attr({
                    disabled: f
                })
            }
            ;
            b.setSelectedById = function(f) {
                return b.val(f).attr({
                    selected: "selected"
                })
            }
            ;
            b.getSelectedOption = function() {
                var f = b.find(":selected");
                return {
                    id: f.val(),
                    title: f.text(),
                    number: parseFloat(f.data("number"))
                }
            }
            ;
            b.change(function() {
                c.toggleError(false);
                c.onChange()
            });
            if (e.defaultId != "") {
                b.setSelectedById(e.defaultId)
            }
        }
        c.container.append(b.getUI())
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        b.setSelectedById(d.value);
        if (b.getSelectedOption().id == null) {
            b.setSelectedById("")
        }
    }
    ;
    c.getValue = function() {
        var d = b.getSelectedOption();
        if (d.id == null || d.id == "") {
            return {
                title: "",
                value: "",
                number: 0
            }
        } else {
            return {
                title: d.title,
                value: d.id,
                number: d.number
            }
        }
    }
});
createInsertFieldUI("map", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    c.mapContainer = $("<div>").css("position", "relaytive");
    c.messageElem = $("<div>").hide();
    c.container.append(c.mapContainer, $("<div>").addClass("map-overlay"), c.messageElem);
    var b;
    c.setOption = function() {
        var d = {
            defaultValue: "35.73305784070924,51.440477370492545",
            height: 300,
            requestLocation: true,
            viewMode: false
        };
        a.property = $.extend(true, d, a.property);
        var f = window;
        if (f.frmMapLoader == null) {
            f.frmMapLoader = function(j, l) {
                var k = this;
                var g = {
                    viewMode: false
                };
                l = $.extend(g, l || {});
                k.load = function(n) {
                    FormUtility.loadMap(n)
                }
                ;
                k.initMap = function(o) {
                    k.map = L.map(j[0]).setView([o[0], o[1]], 16);
                    var p = setInterval(function() {
                        var q = j.innerWidth();
                        if (q != 0) {
                            k.map._onResize();
                            clearInterval(p)
                        }
                    }, 1000);
                    new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
                        maxZoom: 18
                    }).addTo(k.map);
                    if (l.viewMode) {
                        k.map.dragging.disable();
                        k.map.zoomControl.disable();
                        k.map.scrollWheelZoom.disable();
                        k.map.doubleClickZoom.disable();
                        k.marker = L.marker([o[0], o[1]], {
                            clickable: false,
                            draggable: false
                        }).addTo(k.map)
                    } else {
                        k.marker = L.marker([o[0], o[1]], {
                            clickable: true,
                            draggable: true
                        }).addTo(k.map);
                        k.map.on("drag zoom", function(r) {
                            var q = k.map.getCenter();
                            k.marker.setLatLng(q)
                        });
                        k.map.on("click", function(q) {
                            k.marker.setLatLng(q.latlng);
                            k.map.panTo(k.marker.getLatLng())
                        });
                        k.marker.on("dragend", function(q) {
                            k.map.panTo(k.marker.getLatLng())
                        });
                        L.Control.Button = L.Control.extend({
                            options: {
                                position: "topleft"
                            },
                            onAdd: function(s) {
                                var r = L.DomUtil.create("div", "leaflet-bar leaflet-control");
                                var q = L.DomUtil.create("a", "leaflet-control-button", r);
                                q.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="padding: 5px;color: #444;cursor: pointer;" xml:space="preserve"><g><path fill="currentColor" d="M68.23,13.49c10.44,1.49,19.79,6.36,26.91,13.48c7.29,7.29,12.23,16.93,13.58,27.68h14.17v13.58h-14.39 c-1.62,10.13-6.42,19.2-13.36,26.13c-7.11,7.11-16.47,11.99-26.91,13.48v15.04H54.65v-15.04c-10.44-1.49-19.79-6.36-26.9-13.48 c-6.94-6.94-11.74-16-13.36-26.13H0V54.65h14.16c1.35-10.75,6.29-20.39,13.58-27.68c7.11-7.11,16.46-11.99,26.9-13.48V0h13.58 V13.49L68.23,13.49z M61.44,35.41c13.95,0,25.25,11.31,25.25,25.25c0,13.95-11.31,25.25-25.25,25.25 c-13.95,0-25.25-11.31-25.25-25.25C36.19,46.72,47.49,35.41,61.44,35.41L61.44,35.41z M89,33.11c-7.05-7.05-16.8-11.42-27.56-11.42 c-10.76,0-20.51,4.36-27.56,11.42c-7.05,7.05-11.42,16.8-11.42,27.56c0,10.76,4.36,20.51,11.42,27.56 c7.05,7.05,16.8,11.42,27.56,11.42c10.76,0,20.51-4.36,27.56-11.42c7.05-7.05,11.42-16.8,11.42-27.56 C100.41,49.9,96.05,40.16,89,33.11L89,33.11z"/></g></svg>';
                                L.DomEvent.disableClickPropagation(q);
                                L.DomEvent.on(q, "click", function() {
                                    k.setCurrentPosition()
                                });
                                r.title = "Title";
                                return r
                            },
                            onRemove: function(q) {},
                        });
                        var n = new L.Control.Button();
                        n.addTo(k.map)
                    }
                    setTimeout(function() {
                        k.map._onResize()
                    }, 500)
                }
                ;
                k.setPosition = function(n) {
                    var o = L.latLng(n[0], n[1]);
                    k.marker.setLatLng(o);
                    k.map.panTo(o)
                }
                ;
                k.setCurrentPosition = function() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(n) {
                            k.setPosition([n.coords.latitude, n.coords.longitude])
                        }, function(n) {
                            if (n.code == n.PERMISSION_DENIED) {
                                c.messageElem.show().css({
                                    color: "red"
                                }).text(c.getFrmSetting("lang") == "fa" ? "از مرورگر خود دسترسی به موقعیت مکانی را فعال کنید" : "Enable location permissopn from your browser");
                                setTimeout(function() {
                                    c.messageElem.hide()
                                }, 5000)
                            }
                        })
                    }
                }
                ;
                k.getPosition = function() {
                    if (!k.marker) {
                        return []
                    }
                    var n = k.marker.getLatLng();
                    return [n.lat, n.lng]
                }
            }
        }
        c.mapContainer.empty();
        var e = $("<div>").appendTo(c.mapContainer);
        b = new f.frmMapLoader(e,{
            viewMode: a.property.viewMode
        });
        c.setPosition = function() {
            b.setPosition(a.property.defaultValue.split(","))
        }
        ;
        b.load(function() {
            b.initMap(a.property.defaultValue.split(","));
            if (a.property.requestLocation && !c.noloadCurrentPos) {
                b.setCurrentPosition()
            }
        });
        c.setHeight = function() {
            e.css({
                "z-index": 0,
                position: "relaytive",
                height: a.property.height,
                background: "#f2f2f2"
            })
        }
        ;
        c.setHeight()
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {}
    ;
    c.setDisable = function(d) {
        c.container.toggleClass("disabled", d)
    }
    ;
    c.setValue = function(d) {
        c.noloadCurrentPos = true;
        b.load(function() {
            b.setPosition(d.value.split(","))
        })
    }
    ;
    c.getValue = function() {
        return {
            title: "",
            value: a.property.viewMode ? "" : b.getPosition().join(","),
            number: 0
        }
    }
});
createInsertFieldUI("matrix", function(b) {
    var d = this;
    d.needConfirm = true;
    d.container = $("<div>");
    var a = new Array();
    d.setOption = function() {
        var e = {
            inputType: "radio",
            style: "border",
            defaultValue: "",
            list: [{
                id: 0,
                isDefault: false,
                items: [{
                    id: 3,
                    title: d.getFrmRes("design", "row1"),
                    number: 0,
                    order: 1
                }, {
                    id: 4,
                    title: d.getFrmRes("design", "row2"),
                    number: 0,
                    order: 2
                }, {
                    id: 5,
                    title: d.getFrmRes("design", "row3"),
                    number: 0,
                    order: 3
                }]
            }, {
                id: 0,
                isDefault: false,
                items: [{
                    id: 6,
                    title: d.getFrmRes("design", "column1"),
                    number: 0,
                    order: 1
                }, {
                    id: 7,
                    title: d.getFrmRes("design", "column2"),
                    number: 0,
                    order: 2
                }, {
                    id: 8,
                    title: d.getFrmRes("design", "column3"),
                    number: 0,
                    order: 3
                }]
            }]
        };
        b.property = $.extend(false, e, b.property);
        d.defaultList1 = b.property.list[0].isDefault ? e.list[0] : b.property.list[0];
        d.defaultList2 = b.property.list[1].isDefault ? e.list[1] : b.property.list[1];
        d.createTable = function() {
            var n = $("<table>").addClass(b.property.style);
            a = [];
            var l = b.property.list[0].items;
            var g = b.property.list[1].items;
            var f = b.property.defaultValue.split(",");
            var j = function(p) {
                return f.indexOf(p) != -1
            };
            var o = $("<tr>").append($("<td>"));
            $.each(g, function(p, q) {
                o.append($("<td>").text(q.title).addClass("column-title"))
            });
            n.append(o);
            var k = FormUtility.randomId("name");
            $.each(l, function(p, q) {
                var s = $("<tr>").append($("<td>").text(q.title).addClass("row-title"));
                if (b.property.inputType == "radio") {
                    k = FormUtility.randomId("name")
                }
                $.each(g, function(r, t) {
                    var u = FormUtility.randomId();
                    var v = $("<input>").attr({
                        id: u,
                        name: k,
                        type: b.property.inputType,
                        checked: j(q.id + "_" + t.id)
                    });
                    var x = $("<td>").appendTo(s);
                    if (b.property.inputType == "text") {
                        v.addClass("ravesh-input");
                        x.append(v)
                    } else {
                        v.val(q.id + "_" + t.id);
                        var w = $("<label>").addClass("ravesh-form-control no-text ravesh-form-control-" + b.property.inputType).attr("for", u).append(v, $("<div>").addClass("cover").append($("<div>").addClass("ravesh-form-control-indicator")));
                        x.append(w)
                    }
                    v.change(function() {
                        if (d.onChange) {
                            d.toggleError(false);
                            d.onChange()
                        }
                        s.removeClass("error")
                    });
                    x.hover(function() {
                        n.find("td:nth-child(" + (r + 2) + ")").toggleClass("hover")
                    });
                    a.push([v, q, t, s])
                });
                n.append(s)
            });
            return n
        }
        ;
        d.container.empty();
        d.container.append(d.createTable());
        d.container.find("input").attr("disabled", b.property.disable)
    }
    ;
    var c = false;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setDisable = function(e) {
        d.container.find("input").attr("disabled", e)
    }
    ;
    d.setValue = function(e) {
        if (!c) {
            d.container.find("input").attr("checked", false);
            c = true
        }
        d.container.find("input[value=" + e.value + "]").attr("checked", true)
    }
    ;
    d.getValue = function() {
        var e = new Array();
        $.each(a, function(g, f) {
            if (f[0].is(":checked")) {
                e.push({
                    title: f[1].title + " | " + f[2].title,
                    value: f[1].id + "_" + f[2].id,
                    number: f[1].number * f[2].number
                })
            }
        });
        return e
    }
    ;
    d.checkValid = function() {
        if (b.property.required) {
            var e = true;
            var f = b.property.list[0].items;
            $.each(f, function(g, j) {
                var k = $.grep(a, function(l) {
                    return l[1].id == j.id
                });
                if ($.grep(k, function(l) {
                    return l[0].is(":checked")
                }).length == 0) {
                    e = false;
                    k[0][3].addClass("error")
                } else {
                    k[0][3].removeClass("error")
                }
            });
            if (!e) {
                return d.getFrmRes("insert", "required")
            }
        }
    }
});
createInsertFieldUI("mobile", function(a) {
    var b = this;
    b.needConfirm = true;
    b.container = $("<div>");
    b.setOption = function() {
        var c = {
            width: "medium"
        };
        a.property = $.extend(c, a.property);
        b.input = $("<input>").attr({
            type: "tel",
            maxlength: 15
        }).css({
            direction: "ltr",
            "text-align": "left"
        }).addClass("form-input").appendTo(b.container.empty());
        if (a.property.rememberMe) {
            b.input.attr("id", a.type + "_" + a.id)
        }
        b.container.append(QrCodeScannerInputs(b.getFrmSetting("lang"), b.isApp, a, b.input, function() {
            b.input.blur()
        }));
        b.input.keyup(function(d) {
            b.toggleError(false);
            b.onChange()
        });
        b.input.blur(function() {
            var d = b.checkValid();
            b.toggleError(d != null, d);
            b.onChange()
        })
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setWidth = function(c, d) {
        b.input.css("width", d)
    }
    ;
    b.setDisable = function(c) {
        b.input.attr("disabled", c)
    }
    ;
    b.setValue = function(c) {
        b.input.val(c.value)
    }
    ;
    b.getValue = function() {
        var e = b.input.val().trim();
        var f = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        var c = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        for (var d = 0; d < 10; d++) {
            e = e.replace(f[d], d).replace(c[d], d)
        }
        return {
            title: "",
            value: e,
            number: 0
        }
    }
    ;
    b.checkValid = function() {
        var c = b.input.val().trim();
        if (c != "" && c.length < 10) {
            return b.getFrmRes("insert", "mobileNotValid")
        }
    }
    ;
    b.checkValid = function() {
        var c = b.getValue().value;
        if (c != "") {
            if (b.getFrmSetting("lang") == "fa") {
                if (!(/^(\+98|0)?9\d{9}$/).test(c)) {
                    return b.getFrmRes("insert", "mobileNotValid")
                }
            } else {
                if (c.length < 10) {
                    return b.getFrmRes("insert", "mobileNotValid")
                }
            }
        }
    }
});
createInsertFieldUI("multiline", function(a) {
    var b = this;
    b.needConfirm = true;
    b.container = $("<div>");
    b.setCounter = function() {
        if (!a.property.showCounter) {
            return false
        }
        b.counter.text(FormUtility.numberLocalize(b.textarea.val().trim().length + " / " + a.property.max, b.getFrmSetting("lang")))
    }
    ;
    b.setOption = function() {
        var c = {
            width: "medium",
            defaultValue: "",
            placeholder: "",
            min: 0,
            max: 1000,
            rows: 4,
            showCounter: false
        };
        a.property = $.extend(c, a.property);
        b.counter = $("<div>").css({
            direction: "ltr",
            padding: "5px 0 3px"
        }).toggle(a.property.showCounter);
        if (b.textarea) {
            b.textarea.remove()
        }
        b.textarea = $("<textarea>").attr({
            placeholder: a.property.placeholder,
            rows: a.property.rows,
            value: a.property.defaultValue,
            maxLength: a.property.max
        }).addClass("form-input");
        b.textarea.keyup(function() {
            b.toggleError(false);
            b.onChange();
            b.setCounter()
        });
        b.textarea.blur(function() {
            var d = b.checkValid();
            b.toggleError(d != null, d);
            b.onChange()
        });
        b.container.empty().append(b.textarea, b.counter);
        b.container.append(QrCodeScannerInputs(b.getFrmSetting("lang"), b.isApp, a, b.textarea, function() {
            b.textarea.blur()
        }));
        b.setCounter()
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setWidth = function(c, d) {
        b.textarea.css({
            display: "block",
            width: d,
            height: "auto",
            "min-height": 35,
            "max-height": 600
        })
    }
    ;
    b.setDisable = function(c) {
        b.textarea.attr("disabled", c)
    }
    ;
    b.setValue = function(c) {
        b.textarea.val(c.value);
        b.setCounter()
    }
    ;
    b.getValue = function() {
        return {
            title: "",
            value: b.textarea.val().trim(),
            number: 0
        }
    }
    ;
    b.checkValid = function() {
        var c = b.textarea.val().trim();
        if (c.length < parseInt(a.property.min)) {
            return b.getFrmRes("insert", "minCharacter").replace("{0}", a.property.min)
        }
        if (c.length > parseInt(a.property.max)) {
            return b.getFrmRes("insert", "maxCharacter").replace("{0}", a.property.max)
        }
    }
});
createInsertFieldUI("multimedia", function(b) {
    var d = this;
    var c = FormUtility.randomId();
    d.container = $("<div>").attr("id", c);
    d.setOption = function() {
        var e = {
            hiddenTitle: true,
            defaultValue: "0",
            type: "",
            url: "",
            position: "center",
            width: "large",
            height: 0
        };
        b.property = $.extend(e, b.property);
        d.container.empty().css({
            background: "#aaa",
            margin: "auto",
            height: b.property.height == 0 ? "auto" : parseInt(b.property.height),
            "min-height": b.property.url == "" ? 150 : 20,
            "float": b.property.position == "center" ? "none" : b.property.position,
            "max-width": "100%",
            overflow: "hidden"
        });
        if (b.property.url == "") {
            return false
        }
        switch (b.property.type) {
        case "aparat":
            var n = b.property.url.replace("https://www.aparat.com/v/", "").replace("http://www.aparat.com/v/", "");
            if (n == "") {
                return false
            }
            d.container.append($("<script>").attr({
                type: "text/JavaScript",
                src: "https://www.aparat.com/embed/" + n + "?data[rnddiv]=" + c + "&data[responsive]=yes"
            })).css({
                background: "none"
            });
            break;
        case "youtube":
            var j = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var g = b.property.url.match(j);
            if (g && g[2].length == 11) {
                d.container.append($("<iframe>").attr({
                    src: "https://www.youtube.com/embed/" + g[2],
                    frameborder: 0,
                    allowfullscreen: true,
                    width: "100%",
                    height: "100%"
                }))
            }
            break;
        case "vimeo":
            var n = b.property.url.replace("https://vimeo.com/", "").replace("http://vimeo.com/", "");
            if (n == "") {
                return false
            }
            d.container.append($("<iframe>").attr({
                src: "https://player.vimeo.com/video/" + n,
                frameborder: 0,
                allowfullscreen: true,
                width: "100%",
                height: "100%"
            })).css({
                background: "#000"
            });
            break;
        case "soundcloud":
            $.getJSON("http://soundcloud.com/oembed?format=js&url=" + b.property.url + "&iframe=true&callback=?", function(o) {
                d.container.append(o.html)
            });
            break;
        case "pdf":
            d.container.append($("<iframe>").attr({
                src: b.property.url,
                frameborder: 0,
                allowfullscreen: true,
                width: "100%",
                height: "100%"
            })).css({
                background: "none"
            });
            break;
        case "video":
            var l = $("<video>").attr({
                src: b.property.url,
                controls: true,
                preload: false,
                autoplay: false
            }).css({
                width: "100%",
                height: "100%"
            });
            d.container.append(l).css({
                background: "none"
            });
            break;
        case "sound":
            var k = new Audio();
            k.loop = false;
            k.preload = false;
            k.controls = true;
            k.autoplay = false;
            k.src = b.property.url;
            k.style.width = "100%";
            d.container.append(k).css({
                background: "none"
            });
            break;
        case "image":
            var f = $("<img>").attr({
                src: b.property.url
            }).css({
                width: "100%",
                height: "100%"
            });
            d.container.append(f).css({
                background: "none"
            });
            break;
        case "countdown":
            d.container.append(a(b.property.url)).css({
                background: "none"
            });
            break
        }
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setWidth = function(e, f) {
        d.container.css("width", f)
    }
    ;
    d.setDisable = function(e) {}
    ;
    d.setValue = function(e) {}
    ;
    d.getValue = function() {
        return {
            title: "",
            value: "",
            number: 0
        }
    }
    ;
    d.onHide = function(e) {
        if (e) {
            d.setOption()
        }
    }
    ;
    function a(j) {
        var t = 1000
          , r = t * 60
          , n = r * 60
          , k = n * 24;
        var e = $("<div>").addClass("ravesh-countdown").css({
            "max-width": "500px",
            overflow: "hidden",
            margin: "auto",
            "line-height": "1"
        });
        var q = d.getFrmSetting("lang");
        var g = function(v) {
            var w = $("<div>").css({
                "font-size": 50
            }).text(FormUtility.numberLocalize("00", q));
            return {
                ui: $("<div>").css({
                    "float": "left",
                    width: "25%",
                    "text-align": "center"
                }).append(w, $("<div>").css({
                    "font-size": 25
                }).text(v)),
                setTime: function(x) {
                    w.text(x)
                }
            }
        };
        var l = g(q == "fa" ? "روز" : "DAYS");
        var o = g(q == "fa" ? "ساعت" : "HOURS");
        var s = g(q == "fa" ? "دقیقه" : "MINUTES");
        var u = g(q == "fa" ? "ثانیه" : "SECONDS");
        e.append(l.ui, o.ui, s.ui, u.ui);
        if (new Date(j) == "Invalid Date" || isNaN(new Date(j))) {
            return e
        }
        var f = new Date(j).getTime();
        var p = setInterval(function() {
            var v = new Date().getTime();
            distance = f - v;
            if (distance < 0) {
                clearInterval(p);
                return false
            }
            l.setTime(FormUtility.numberLocalize(Math.floor(distance / (k)), q));
            o.setTime(FormUtility.numberLocalize(Math.floor((distance % (k)) / (n)), q));
            s.setTime(FormUtility.numberLocalize(Math.floor((distance % (n)) / (r)), q));
            u.setTime(FormUtility.numberLocalize(Math.floor((distance % (r)) / t), q))
        }, t);
        return e
    }
});
createInsertFieldUI("number", function(a) {
    var d = this;
    d.needConfirm = true;
    d.container = $("<div>");
    d.setOption = function() {
        var e = {
            width: "medium",
            defaultValue: "",
            placeholder: "",
            numberWithCommas: false,
            rangeType: "character",
            min: 0,
            max: 16,
            numberOfDecimal: 0
        };
        a.property = $.extend(e, a.property);
        d.input = $("<input>").attr({
            type: a.property.numberWithCommas || a.property.numberOfDecimal != 0 ? "text" : "number",
            placeholder: a.property.placeholder,
            value: a.property.defaultValue
        }).addClass("form-input").appendTo(d.container.empty());
        if (a.property.rememberMe) {
            d.input.attr("id", "txt_" + a.id)
        }
        if (d.getFrmSetting("lang") == "fa") {
            d.input.css({
                direction: "ltr",
                "text-align": "right"
            })
        }
        d.container.append(QrCodeScannerInputs(d.getFrmSetting("lang"), d.isApp, a, d.input, function() {
            d.input.blur()
        }));
        d.input.keyup(function() {
            c(d.input, false);
            d.toggleError(false);
            d.onChange()
        });
        d.input.blur(function() {
            c(d.input, true);
            var f = d.checkValid();
            d.toggleError(f != null, f);
            d.onChange()
        });
        d.setNumberWithCommas()
    }
    ;
    function c(k, n) {
        var l = k.val();
        if (l === "") {
            return
        }
        var q = a.property.numberWithCommas;
        var p = parseInt(a.property.numberOfDecimal);
        var r = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        var e = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        for (var j = 0; j < 10; j++) {
            l = l.replace(r[j], j).replace(e[j], j)
        }
        var g = function(u) {
            var t = u.indexOf("-") != -1;
            var v;
            if (q) {
                v = u.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            } else {
                v = u.replace(/\D/g, "")
            }
            return (t ? "-" : "") + v
        };
        if (p > 0) {
            if (l.indexOf(".") >= 0) {
                var f = l.indexOf(".");
                var o = l.substring(0, f);
                var s = l.substring(f);
                o = g(o);
                s = g(s);
                if (n) {
                    if (p == 1) {
                        s += "0"
                    } else {
                        if (p == 2) {
                            s += "00"
                        } else {
                            if (p == 3) {
                                s += "000"
                            }
                        }
                    }
                }
                s = s.substring(0, p);
                l = o + "." + s
            } else {
                l = g(l);
                if (n) {
                    if (p == 1) {
                        s += "0"
                    } else {
                        if (p == 2) {
                            s += "00"
                        } else {
                            if (p == 3) {
                                s += "000"
                            }
                        }
                    }
                }
            }
        } else {
            l = g(l)
        }
        k.val(l)
    }
    function b(f, e) {
        var g = f.toFixed(e);
        if (g.indexOf("e+") < 0) {
            return g
        }
        return g.replace(".", "").split("e+").reduce(function(k, j) {
            return k + Array(j - k.length + 2).join(0)
        }) + "." + Array(e + 1).join(0)
    }
    d.setNumberWithCommas = function() {
        c(d.input, true)
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setWidth = function(e, f) {
        d.input.css("width", f)
    }
    ;
    d.setDisable = function(e) {
        d.input.attr("disabled", e)
    }
    ;
    d.setValue = function(f) {
        if (a.property.numberOfDecimal > 0) {
            if (f.value.indexOf(".") != -1) {
                var e = f.value.substr(f.value.indexOf(".") + 1, f.value.length);
                if (e.length > a.property.numberOfDecimal) {
                    f.value = f.value.substr(0, f.value.length - (e.length - a.property.numberOfDecimal))
                } else {
                    if (e.length < a.property.numberOfDecimal) {
                        f.value = f.value + ("0").repeat(a.property.numberOfDecimal - e.length)
                    }
                }
            } else {
                f.value = f.value + "." + ("0").repeat(a.property.numberOfDecimal)
            }
        } else {
            if (f.value.indexOf(".") != -1) {
                f.value = f.value.substr(0, f.value.indexOf("."))
            }
        }
        d.input.val(f.value);
        d.setNumberWithCommas()
    }
    ;
    d.getValue = function() {
        if (d.input.val().trim() == "") {
            return {
                title: "",
                value: "",
                number: 0
            }
        } else {
            var e = parseFloat(d.input.val().trim().replace(/,/g, "")) || 0;
            return {
                title: "",
                value: b(e, a.property.numberOfDecimal),
                number: b(e, a.property.numberOfDecimal)
            }
        }
    }
    ;
    d.checkValid = function() {
        var l = d.input.val().trim();
        var e = l.indexOf(".") != -1;
        var g = parseInt(a.property.min);
        var f = parseInt(a.property.max);
        var k = parseInt(a.property.numberOfDecimal);
        if (a.property.rangeType == "character") {
            var j = l.replace(/,/g, "");
            if ((e && j.length < g + k + 1) || (!e && j.length < g)) {
                return d.getFrmRes("insert", "minCharacter").replace("{0}", a.property.min)
            }
            if ((e && j.length > f + k + 1) || (!e && j.length > f)) {
                return d.getFrmRes("insert", "maxCharacter").replace("{0}", a.property.max)
            }
        } else {
            var j = parseFloat(l.replace(/,/g, "")) || 0;
            if (j < g) {
                return d.getFrmRes("insert", "minNumber").replace("{0}", a.property.min)
            }
            if (j > f) {
                return d.getFrmRes("insert", "maxNumber").replace("{0}", a.property.max)
            }
        }
    }
});
createInsertFieldUI("password", function(a) {
    var b = this;
    b.needConfirm = true;
    b.container = $("<div>");
    b.setOption = function() {
        var c = {
            width: "medium"
        };
        a.property = $.extend(c, a.property);
        b.input = $("<input>").attr({
            type: "password",
            maxLength: 15
        }).addClass("form-input").appendTo(b.container.empty());
        b.container.append(QrCodeScannerInputs(b.getFrmSetting("lang"), b.isApp, a, b.input, function() {
            b.input.blur()
        }));
        b.input.keyup(function() {
            b.toggleError(false);
            b.onChange()
        });
        b.input.blur(function() {
            var d = b.checkValid();
            b.toggleError(d != null, d);
            b.onChange()
        })
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setWidth = function(c, d) {
        b.input.css("width", d)
    }
    ;
    b.setDisable = function(c) {
        b.input.attr("disabled", c)
    }
    ;
    b.setValue = function(c) {
        b.input.val(c.value)
    }
    ;
    b.getValue = function() {
        return {
            title: "",
            value: b.input.val().trim(),
            number: 0
        }
    }
    ;
    b.checkValid = function() {
        var c = b.input.val().trim();
        if (c == "") {
            return null
        }
        if (c.length < 7) {
            return b.getFrmRes("insert", "passwordNotValid").replace("{0}", 7)
        }
    }
});
createInsertFieldUI("picture", function(b) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var a = new Array();
    c.setOption = function() {
        var e = {
            style: 4,
            width: "small",
            inputType: "radio",
            defaultValue: "",
            showTitlePicture: true,
            list: [{
                id: 0,
                isDefault: false,
                items: [{
                    id: 1,
                    title: c.getFrmRes("design", "option1"),
                    number: 0,
                    order: 1
                }, {
                    id: 2,
                    title: c.getFrmRes("design", "option2"),
                    number: 0,
                    order: 2
                }, {
                    id: 3,
                    title: c.getFrmRes("design", "option3"),
                    number: 0,
                    order: 3
                }, {
                    id: 4,
                    title: c.getFrmRes("design", "option4"),
                    number: 0,
                    order: 4
                }]
            }]
        };
        b.property = $.extend(false, e, b.property);
        c.container.empty();
        a = [];
        var d = b.property.defaultValue.split(",");
        var f = function(k) {
            return d.indexOf(k) != -1
        };
        var g = b.property.list[0].items;
        if (b.property.randomSort && b.property.randomSort.toString().toLowerCase() == "true") {
            g = FormUtility.shuffleArray(g)
        }
        var j = FormUtility.randomId("name");
        $.each(g, function(n, p) {
            var o = FormUtility.randomId();
            var l = [f(p.id), p];
            var q = $("<div>").addClass("item" + (l[0] ? " checked" : "")).attr({
                value: p.id
            });
            var k = $("<input>").attr({
                id: o,
                name: j,
                value: p.id,
                type: b.property.inputType == "checkbox" ? "checkbox" : "radio",
                checked: l[0]
            });
            var r = $("<label>").attr("for", o);
            r.append($("<img>").attr("src", (!p.extra || p.extra == "") ? "../../pages/FormBuilder/images/no-image.png" : p.extra));
            if (b.property.inputType == "none") {
                k.attr("disabled", true)
            } else {
                $("<div>").html('<svg viewBox="0 0 60 60" fill="currentColor" width="15" height="15"><path fill="#FFFFFF" d="M23.7,45.4L11.3,33.1l5.6-5.6l6.7,6.7l19.6-19.6l5.6,5.6L23.7,45.4z"/></svg>').addClass("check").appendTo(r)
            }
            q.append(k, r);
            if (b.property.showTitlePicture) {
                q.append($("<span>").text(p.title))
            }
            a.push([k, p]);
            k.change(function() {
                if (b.property.inputType == "radio") {
                    c.container.find(".item").removeClass("checked")
                }
                q.toggleClass("checked", k.attr("checked"));
                c.onChange();
                c.toggleError(false)
            });
            c.container.append($("<div>").addClass("item-cover").append(q))
        });
        c.setStyle = function() {
            for (var k = 0; k <= 4; k++) {
                c.container.removeClass("style-" + k)
            }
            c.container.addClass("style-" + b.property.style)
        }
        ;
        c.setStyle();
        c.container.toggleClass("disabled", b.property.disable || false);
        c.container.toggleClass("enabled", !b.property.disable || true);
        if (b.property.inputType != "none") {
            c.container.find("input").attr("disabled", b.property.disable || false)
        }
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        c.container.find(".item").css("width", e)
    }
    ;
    c.setDisable = function(d) {
        c.container.toggleClass("disabled", d);
        c.container.toggleClass("enabled", !d);
        if (b.property.inputType != "none") {
            c.container.find("input").attr("disabled", d)
        }
    }
    ;
    c.setValue = function(d) {
        c.container.find("input[value=" + d.value + "]").attr("checked", true);
        c.container.find(".item[value=" + d.value + "]").addClass("checked", true)
    }
    ;
    c.getValue = function() {
        var d = new Array();
        $.each(a, function(f, e) {
            if (e[0].is(":checked")) {
                d.push({
                    title: e[1].title,
                    value: e[1].id,
                    number: e[1].number
                })
            }
        });
        return d
    }
    ;
    c.checkValid = function() {
        if (b.property.inputType == "checkbox") {
            var e = parseInt(b.property.min || 0);
            var d = parseInt(b.property.max || 0);
            if (e > 0) {
                if (c.getValue().length < e) {
                    return c.getFrmRes("insert", "minNumberSelect").replace("{0}", b.property.min)
                }
            }
            if (d > 0) {
                if (c.getValue().length > d) {
                    return c.getFrmRes("insert", "maxNumberSelect").replace("{0}", b.property.max)
                }
            }
        }
    }
});
createInsertFieldUI("product", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "medium",
            productGroup: "",
        };
        a.property = $.extend(false, d, a.property);
        c.container.empty();
        if (!c.isApp) {
            b = RaveshUI.selectProduct({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                detail: c.getFrmRes("insert", "group"),
                price: c.getFrmRes("insert", "price"),
                getAjaxParam: function(e) {
                    return {
                        key: e,
                        group: a.property.productGroup == "" ? 0 : a.property.productGroup
                    }
                },
                onSelected: function() {
                    c.toggleError(false);
                    c.onChange()
                }
            })
        } else {
            b = new RaveshUI.DropDown({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                allowSearch: false,
                arrow: false,
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, "", function(g, f, e) {
                        b.setSelected({
                            id: g,
                            title: f,
                            price: e
                        });
                        c.toggleError(false);
                        c.onChange()
                    })
                }
            })
        }
        c.container.append(b.getUI())
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        b.setSelected({
            id: d.value,
            title: d.title,
            price: d.number
        })
    }
    ;
    c.getValue = function() {
        var d = b.getSelectedOption();
        return {
            title: d.id == "" ? "" : d.title,
            value: d.id,
            number: parseInt(d.price) || 0
        }
    }
});
createInsertFieldUI("radio", function(b) {
    var c = this;
    c.container = $("<div>");
    var a = new Array();
    c.setOption = function() {
        var e = {
            style: 1,
            defaultValue: "",
            list: [{
                id: 0,
                isDefault: false,
                items: [{
                    id: 1,
                    title: c.getFrmRes("design", "option1"),
                    number: 0,
                    order: 1
                }, {
                    id: 2,
                    title: c.getFrmRes("design", "option2"),
                    number: 0,
                    order: 2
                }, {
                    id: 3,
                    title: c.getFrmRes("design", "option3"),
                    number: 0,
                    order: 3
                }]
            }]
        };
        b.property = $.extend(false, e, b.property);
        c.defaultList = b.property.list[0].isDefault ? e.list[0] : b.property.list[0];
        c.container.empty();
        a = [];
        var d = b.property.defaultValue.split(",");
        var f = function(k) {
            return d.indexOf(k.toString()) != -1
        };
        var j = FormUtility.randomId("name");
        var g = b.property.list[0].items;
        if (b.property.randomSort && b.property.randomSort.toString().toLowerCase() == "true") {
            g = FormUtility.shuffleArray(g)
        }
        $.each(g, function(l, o) {
            var n = FormUtility.randomId();
            var k = $("<input>").attr({
                id: n,
                name: j,
                value: o.id,
                type: "radio",
                ch: f(o.id),
                checked: f(o.id)
            });
            var p = $("<label>").css({
                display: "block"
            }).addClass("ravesh-form-control ravesh-form-control-radio type-" + c.formType).attr("for", n).append(k, $("<div>").addClass("cover").append($("<span>").text(o.title), $("<div>").addClass("ravesh-form-control-indicator")));
            c.container.append($("<div>").addClass("item").append(p));
            k.change(function() {
                c.onChange();
                c.toggleError(false);
                setTimeout(c.nextPage, 500)
            });
            k.click(function(q, r) {
                if ($(this).is(":checked") && $(this).attr("ch") == "true" && (b.property.uncheck ? true : false)) {
                    $(this).attr("checked", false);
                    $(this).attr("ch", "false");
                    c.onChange();
                    c.toggleError(false)
                } else {
                    c.container.find("input").attr("ch", "false");
                    $(this).attr("ch", "true")
                }
            });
            a.push([k, o])
        });
        c.setStyle = function() {
            for (var k = 0; k <= 4; k++) {
                c.container.removeClass("style-" + k)
            }
            c.container.addClass("style-" + b.property.style)
        }
        ;
        c.setStyle();
        c.container.find("input").attr("disabled", b.property.disable || false)
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setDisable = function(d) {
        c.container.find("input").attr("disabled", d)
    }
    ;
    c.setValue = function(d) {
        c.container.find("input[value=" + d.value + "]").attr("checked", true)
    }
    ;
    c.getValue = function() {
        var d = new Array();
        $.each(a, function(f, e) {
            if (e[0].is(":checked")) {
                d.push({
                    title: e[1].title,
                    value: e[1].id,
                    number: e[1].number
                })
            }
        });
        return d
    }
});
createInsertFieldUI("rangeslider", function(a) {
    var d = this;
    d.needConfirm = true;
    d.container = $("<div>").addClass("ravesh-input-range");
    var c;
    var b;
    d.setOption = function() {
        var e = {
            width: "medium",
            defaultValue: 5,
            min: 0,
            max: 10,
            step: 1
        };
        a.property = $.extend(false, e, a.property);
        d.container.empty();
        c = $("<input>").attr({
            type: "range",
            min: a.property.min,
            max: a.property.max,
            step: a.property.step
        });
        b = $("<div>").text(FormUtility.numberLocalize(FormUtility.spiltWithComma(a.property.defaultValue)));
        c.bind("input change", function() {
            b.text(FormUtility.numberLocalize(FormUtility.spiltWithComma(c.val())));
            d.onChange()
        });
        d.container.append(b, c);
        c.val(a.property.defaultValue);
        c.attr("disabled", a.property.disable);
        d.container.toggleClass("disabled", a.property.disable == false)
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setWidth = function(e, f) {
        d.container.css({
            width: f,
            "max-width": "100%"
        })
    }
    ;
    d.setDisable = function(e) {
        c.attr("disabled", e);
        d.container.toggleClass("disabled", e)
    }
    ;
    d.setValue = function(e) {
        c.val(e.value);
        b.text(FormUtility.numberLocalize(FormUtility.spiltWithComma(e.value)))
    }
    ;
    d.getValue = function() {
        var e = parseInt(c.val());
        return {
            title: "",
            value: e,
            number: e
        }
    }
});
createInsertFieldUI("rating", function(b) {
    var d = this;
    d.container = $("<div>");
    var c;
    function a(e, k, s) {
        var q = this;
        var p = 0;
        var l = false;
        var o = function() {};
        var g = $("<div>").addClass("ravesh-rating style-" + s);
        var f = new Array();
        var j = 0;
        for (var n = 0; n <= k; n++) {
            (function() {
                var t = n;
                var w = [27, 42];
                var v = d.formType == "line" & k < 7 ? 1 : 0;
                var u = $("<div>").addClass("float-right size-" + v + (t == 0 ? " cancel" : " rate"));
                if (t != 0 || (e && t == 0)) {
                    g.append(u);
                    j += w[v]
                }
                if (t == 0) {
                    u.click(function() {
                        if (l) {
                            return false
                        }
                        p = 0;
                        r(p, "on");
                        o();
                        setTimeout(d.nextPage, 500)
                    })
                } else {
                    u.attr("title", FormUtility.numberLocalize(t));
                    f.push(u);
                    u.mouseenter(function(x) {
                        if (l) {
                            return false
                        }
                        r(t, "hover")
                    }).mouseleave(function(x) {
                        if (l) {
                            return false
                        }
                        r(p, "on")
                    }).mousedown(function(x) {
                        if (l) {
                            return false
                        }
                        p = t;
                        r(p, "on");
                        r(p, "hover");
                        o();
                        setTimeout(d.nextPage, 500)
                    })
                }
            }
            )()
        }
        g.css({
            width: j
        });
        function r(u, t) {
            $.each(f, function(v, w) {
                if (t == "on") {
                    w.removeClass("on")
                }
                w.removeClass("hover").addClass(v + 1 <= u ? t : "")
            })
        }
        r(p);
        q.setNumber = function(t) {
            if (t > k) {
                t = k
            }
            if (t < 0) {
                t = 0
            }
            p = t;
            r(t, "on")
        }
        ;
        q.getNumber = function() {
            return p
        }
        ;
        q.getUI = function() {
            return g
        }
        ;
        q.setDisable = function(t) {
            g.toggleClass("disabled", t);
            l = t
        }
        ;
        q.setOnChange = function(t) {
            o = t
        }
    }
    d.setOption = function() {
        var e = {
            style: 0,
            number: 5,
            allowCancel: false
        };
        b.property = $.extend(true, e, b.property);
        c = new a(b.property.allowCancel,b.property.number,b.property.style);
        c.setOnChange(function() {
            d.toggleError(false);
            d.onChange()
        });
        d.container.empty().append(c.getUI())
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setDisable = function(e) {
        c.setDisable(e)
    }
    ;
    d.setValue = function(e) {
        c.setNumber(parseInt(e.value) || 0)
    }
    ;
    d.getValue = function() {
        var e = parseInt(c.getNumber());
        return {
            title: "",
            value: e == 0 ? "" : e,
            number: e
        }
    }
});
createInsertFieldUI("sales", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "medium"
        };
        a.property = $.extend(false, d, a.property);
        c.container.empty();
        if (!c.isApp) {
            b = RaveshUI.selectSales({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                detail: c.getFrmRes("insert", "group"),
                price: c.getFrmRes("insert", "price"),
                createDate: c.getFrmRes("insert", "createDate"),
                getAjaxParam: function(e) {
                    return {
                        key: e
                    }
                },
                onSelected: function() {
                    c.toggleError(false);
                    c.onChange()
                }
            })
        } else {
            b = new RaveshUI.DropDown({
                dir: c.getFrmSetting("dir"),
                defaultTitle: c.getFrmRes("insert", "pleaseSelect"),
                allowSearch: false,
                arrow: false,
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, "", function(g, f, e) {
                        b.setSelected({
                            id: g,
                            title: f,
                            price: e
                        });
                        c.toggleError(false);
                        c.onChange()
                    })
                }
            })
        }
        c.container.append(b.getUI())
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        b.setSelected({
            id: d.value,
            title: d.title,
            price: d.number
        })
    }
    ;
    c.getValue = function() {
        var d = b.getSelectedOption();
        return {
            title: d.id == "" ? "" : d.title,
            value: d.id,
            number: parseInt(d.price) || 0
        }
    }
});
createInsertFieldUI("scalerating", function(b) {
    var d = this;
    d.container = $("<div>");
    var c;
    d.setOption = function() {
        var e = {
            number: 5,
            style: 0,
            textBest: d.getFrmRes("design", "textBest"),
            textMiddle: d.getFrmRes("design", "textMiddle"),
            textWorst: d.getFrmRes("design", "textWorst"),
            startFromZero: false
        };
        b.property = $.extend(true, e, b.property);
        d.container.empty();
        c = new a(b.property);
        c.setOnChange(function() {
            d.toggleError(false);
            d.onChange();
            setTimeout(d.nextPage, 500)
        });
        d.container.append(c.container);
        d.setDisable(b.property.disable == true)
    }
    ;
    function a(l) {
        var n = this;
        var j = "";
        var k = function() {};
        n.setOnChange = function(p) {
            k = p
        }
        ;
        var e = $("<div>").addClass("ravesh-scale-rating style-" + l.style);
        l.number = parseInt(l.number);
        var f = l.textBest.trim() != "" || l.textMiddle.trim() != "" || l.textWorst.trim() != "";
        var o = l.startFromZero ? 0 : 1;
        for (var g = o; g <= l.number; g++) {
            (function(q) {
                var p = $("<div>").addClass("item item-" + q).append($("<span>").addClass("number").text(q)).appendTo(e).click(function() {
                    if (p.hasClass("disable")) {
                        return false
                    }
                    if (p.hasClass("active")) {
                        n.setNumber("")
                    } else {
                        n.setNumber(q)
                    }
                    k()
                });
                if (f) {
                    p.addClass("has-text");
                    var r = "";
                    if (q == o) {
                        r = l.textWorst
                    }
                    if (l.startFromZero) {
                        if ((l.number + 1) % 2 == 1 && Math.ceil(l.number / 2) == q) {
                            r = l.textMiddle
                        }
                    } else {
                        if (l.number % 2 == 1 && Math.ceil(l.number / 2) == q) {
                            r = l.textMiddle
                        }
                    }
                    if (q == l.number) {
                        r = l.textBest
                    }
                    p.append($("<span>").addClass("text").toggleClass("has-line", r != "").text(r))
                }
            }
            )(g)
        }
        n.setNumber = function(p) {
            e.find(".active").removeClass("active");
            if (p === "") {
                j = "";
                return false
            }
            if (p > l.number) {
                p = l.number
            }
            if (p < o) {
                p = o
            }
            j = p;
            e.find(".item-" + p).addClass("active")
        }
        ;
        n.getNumber = function() {
            return j
        }
        ;
        n.container = e;
        n.setOnChange = function(p) {
            k = p
        }
        ;
        n.setDisable = function(p) {
            e.find(".item").toggleClass("disable", p)
        }
    }
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setDisable = function(e) {
        c.setDisable(e)
    }
    ;
    d.setValue = function(e) {
        c.setNumber(e.value || "")
    }
    ;
    d.getValue = function() {
        var e = c.getNumber();
        if (e === "") {
            return {
                title: "",
                value: "",
                number: 0
            }
        } else {
            return {
                title: "",
                value: parseInt(e),
                number: parseInt(e)
            }
        }
    }
});
createInsertFieldUI("signature", function(b) {
    var d = this;
    d.needConfirm = true;
    var c;
    d.container = $("<div>");
    function a(y) {
        var B = this;
        var r = {
            strokeColor: "#000000",
            strokeWidth: 2,
            backgroundColor: "#FFF",
            width: 400,
            height: 200,
            mouseOutTimeout: 1000,
            onChange: function() {}
        };
        y = $.extend(r, y || {});
        B.getUI = function() {
            return p
        }
        ;
        B.clear = function() {
            v()
        }
        ;
        B.toImage = function(E) {
            if (u != "") {
                return u
            }
            if (!E) {
                E = "png"
            }
            return s ? n.toDataURL("image/" + E) : ""
        }
        ;
        B.setDisable = function(E) {
            if (E) {
                o.addClass("disabled")
            } else {
                o.removeClass("disabled")
            }
        }
        ;
        B.setValue = function(E, F) {
            u = E;
            $(n).hide();
            D.show().append($("<div>").append($("<img>").attr({
                src: F.replace("../", "/")
            }), $("<div>").addClass("ravesh-signature-value-overlay").show()))
        }
        ;
        var p = $("<div>");
        var w = $("<div>").addClass("ravesh-signature-main-overlay").appendTo(p);
        var o = $("<div>").addClass("ravesh-signature").appendTo(p);
        var z = $("<div>").addClass("ravesh-signature-overlay");
        var D = $("<div>").addClass("ravesh-signature-value").css({
            "min-width": 100,
            "min-height": 100
        }).hide();
        var e = $("<div>").addClass("signature-icon s-clear");
        var f = $("<div>").addClass("signature-icon s-maximum");
        var g = $("<div>").addClass("signature-icon s-minimum").hide();
        var n = $("<canvas>")[0];
        var q = n.getContext("2d");
        n.setAttribute("width", y.width + "px");
        n.setAttribute("height", y.height + "px");
        n.style.msTouchAction = "none";
        n.style.touchAction = "none";
        n.style.cursor = "pointer";
        o.append(D, z, e, f, g, n);
        var A = {};
        var l = false
          , s = false
          , u = "";
        var k;
        var j = function() {
            l = false
        };
        var C = function(E) {
            E.preventDefault();
            l = true;
            A = {}
        };
        var t = function() {
            l = false;
            y.onChange()
        };
        var x = function(E) {
            if (!l) {
                return
            }
            s = true;
            if (k) {
                window.clearTimeout(k)
            }
            E.preventDefault();
            var H = Math.floor(E.offsetX)
              , I = Math.floor(E.offsetY);
            if (E.targetTouches) {
                var G = E.targetTouches.item(0)
                  , F = $(n).offset();
                H = G.pageX - F.left;
                I = G.pageY - F.top
            }
            q.strokeStyle = y.strokeColor;
            q.lineWidth = y.strokeWidth;
            q.beginPath();
            q.moveTo(A.x || H, A.y || I);
            q.lineTo(H, I);
            q.stroke();
            q.closePath();
            A = {
                x: H,
                y: I
            }
        };
        var v = function() {
            s = false;
            q.fillStyle = y.backgroundColor;
            q.fillRect(0, 0, y.width, y.height);
            q.save();
            q.strokeStyle = "#bbb";
            q.lineWidth = 1;
            q.beginPath();
            q.moveTo(25, y.height - 40);
            q.lineTo(y.width - 25, y.height - 40);
            q.stroke();
            q.restore()
        };
        v();
        n.addEventListener("touchstart", C);
        n.addEventListener("touchmove", x);
        n.addEventListener("touchend", t);
        n.addEventListener("touchcancel", t);
        n.addEventListener("mouseout", function() {
            k = window.setTimeout(function() {
                if (s) {
                    t()
                } else {
                    l = false
                }
            }, y.mouseOutTimeout)
        });
        n.addEventListener("mousedown", C);
        n.addEventListener("mouseup", t);
        n.addEventListener("mousemove", x);
        if (!RaveshUI.isMobile) {
            f.hide()
        }
        e.click(function() {
            if (u != "") {
                u = "";
                $(n).show();
                D.empty().hide()
            }
            B.clear();
            y.onChange()
        });
        f.click(function() {
            f.hide();
            g.show();
            p.addClass("ravesh-signature-maximum");
            o.css({
                right: $(window).width() / 2 - y.width / 2,
                top: $(window).height() / 2 - y.height / 2
            })
        });
        g.click(function() {
            f.show();
            g.hide();
            p.removeClass("ravesh-signature-maximum");
            o.css({
                right: 0,
                top: 0
            })
        })
    }
    d.setOption = function() {
        var e = {
            style: 0,
            height: 150,
        };
        b.property = $.extend(true, e, b.property);
        d.container.empty();
        c = new a({
            height: b.property.height,
            onChange: function() {
                d.toggleError(false);
                d.onChange()
            }
        });
        d.container.append(c.getUI())
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setDisable = function(e) {
        if (e) {
            c.clear()
        }
        c.setDisable(e)
    }
    ;
    d.setValue = function(e) {
        c.setValue(e.value, e.title)
    }
    ;
    d.getValue = function() {
        return {
            title: "",
            value: c.toImage("png"),
            number: 0
        }
    }
});
createInsertFieldUI("smileyrating", function(b) {
    var d = this;
    d.container = $("<div>");
    var c;
    function a(o, r) {
        var p = this;
        var l = 0;
        var n = function() {};
        var e = $("<div>").addClass("ravesh-smiley-rating style-" + r);
        var f = $("<div>");
        var s = $("<div>").addClass("text");
        var g = 0;
        if (!o.showText) {
            s.hide()
        }
        var q = function(t) {
            s.text(t == 0 ? "" : o["text" + t])
        };
        var j = function(u) {
            var t = $("<div>").addClass("float-right face face-" + u);
            t.mouseenter(function(v) {
                if (t.hasClass("disable")) {
                    return false
                }
                q(u)
            }).mouseleave(function(v) {
                if (t.hasClass("disable")) {
                    return false
                }
                q(l)
            }).mousedown(function(v) {
                if (t.hasClass("disable")) {
                    return false
                }
                l = u;
                q(l);
                f.find(".active").removeClass("active");
                t.addClass("active");
                n()
            });
            f.append(t);
            g += r == 0 ? 28 : 56
        };
        if (o.number == 3) {
            j(1);
            j(3);
            j(5)
        } else {
            if (o.number == 5) {
                for (var k = 1; k <= 5; k++) {
                    j(k)
                }
            }
        }
        f.css({
            width: g,
            display: "inline-block"
        });
        e.append(f, s);
        p.setNumber = function(t) {
            if (t > 5) {
                t = 5
            }
            if (t < 0) {
                t = 1
            }
            l = t;
            f.find(".active").removeClass("active");
            f.find(".face-" + t).addClass("active");
            q(t)
        }
        ;
        p.getNumber = function() {
            return l
        }
        ;
        p.container = e;
        p.setOnChange = function(t) {
            n = t
        }
        ;
        p.setDisable = function(t) {
            f.find(".face").toggleClass("disable", t)
        }
    }
    d.setOption = function() {
        var e = {
            number: 5,
            showText: false,
            style: 0,
            text1: d.getFrmRes("design", "fieldSmiley1"),
            text2: d.getFrmRes("design", "fieldSmiley2"),
            text3: d.getFrmRes("design", "fieldSmiley3"),
            text4: d.getFrmRes("design", "fieldSmiley4"),
            text5: d.getFrmRes("design", "fieldSmiley5")
        };
        b.property = $.extend(true, e, b.property);
        d.container.empty();
        c = new a(b.property,d.formType == "line" ? 1 : b.property.style);
        c.setOnChange(function() {
            d.toggleError(false);
            d.onChange();
            setTimeout(d.nextPage, 500)
        });
        d.container.append(c.container)
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setDisable = function(e) {
        c.setDisable(e)
    }
    ;
    d.setValue = function(e) {
        c.setNumber(parseInt(e.value) || 0)
    }
    ;
    d.getValue = function() {
        var e = parseInt(c.getNumber());
        return {
            title: "",
            value: e == 0 ? "" : e,
            number: e
        }
    }
});
createInsertFieldUI("telephone", function(b) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    c.setOption = function() {
        var d = {
            width: "medium",
            defaultValue: "",
            showAreaCode: true
        };
        b.property = $.extend(d, b.property);
        c.telephone = $("<div>").addClass("ravesh-telephone").appendTo(c.container.empty());
        c.inputPre = $("<input>").attr({
            type: "tel",
            maxlength: 5
        }).addClass("form-input ravesh-pretel-input").appendTo(c.telephone);
        c.inputTel = $("<input>").attr({
            type: "tel",
            maxlength: 15
        }).addClass("form-input ravesh-tel-input").appendTo(c.telephone);
        c.telephone.toggleClass("hasAreaCode", b.property.showAreaCode);
        c.inputPre.toggle(b.property.showAreaCode);
        c.inputPre.val(b.property.defaultValue);
        if (b.property.rememberMe) {
            c.inputPre.attr("id", b.type + "_pre_" + b.id)
        }
        if (b.property.rememberMe) {
            c.inputTel.attr("id", b.type + "_tel_" + b.id)
        }
        c.container.append(QrCodeScannerInputs(c.getFrmSetting("lang"), c.isApp, b, c.inputTel, function() {
            c.inputTel.blur()
        }));
        c.inputPre.keyup(function() {
            var e = c.checkValid();
            c.toggleError(e != null, e);
            c.onChange()
        });
        c.telephone.keyup(function() {
            var e = c.checkValid();
            c.toggleError(e != null, e);
            c.onChange()
        });
        c.inputPre.blur(function() {
            c.toggleError(false);
            c.onChange()
        });
        c.telephone.blur(function() {
            c.toggleError(false);
            c.onChange()
        })
    }
    ;
    function a(f) {
        var g = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        var d = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        for (var e = 0; e < 10; e++) {
            f = f.replace(g[e], e).replace(d[e], e)
        }
        return f
    }
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        c.container.css({
            width: e,
            "max-width": "100%"
        })
    }
    ;
    c.setDisable = function(d) {
        c.inputPre.attr("disabled", d);
        c.inputTel.attr("disabled", d)
    }
    ;
    c.setValue = function(d) {
        if (d.value.indexOf("-") != -1) {
            c.inputPre.val(d.value.split("-")[0]);
            c.inputTel.val(d.value.split("-")[1])
        } else {
            c.inputTel.val(d.value)
        }
    }
    ;
    c.getValue = function() {
        var d = a(c.inputPre.val().trim());
        var e = a(c.inputTel.val().trim());
        return {
            title: "",
            value: (d == "" ? e : d + "-" + e),
            number: 0
        }
    }
    ;
    c.checkValid = function() {
        var d = c.getValue().value;
        if (d != "") {
            if (!/^\d+$/.test(d.replace("-", ""))) {
                return c.getFrmRes("insert", "notValid")
            }
        }
    }
});
createInsertFieldUI("termofuse", function(c) {
    var d = this;
    d.container = $("<div>");
    var a;
    d.setOption = function() {
        var e = {
            required: true,
            hiddenTitle: true,
            style: "text",
            text: "",
            term: d.getFrmRes("design", "termText")
        };
        c.property = $.extend(true, e, c.property);
        d.container.empty();
        var f = FormUtility.randomId();
        a = $("<input>").attr({
            id: f,
            type: "checkbox",
        });
        var g = $("<label>").addClass("ravesh-form-control ravesh-form-control-checkbox").attr("for", f).append(a, $("<div>").addClass("cover").append($("<span>").html(b(c.property.term)), $("<div>").addClass("ravesh-form-control-indicator")));
        a.change(function() {
            d.toggleError(false);
            d.onChange()
        });
        var j = g.find("a");
        if (c.property.style == "url") {
            j.attr({
                href: c.property.text,
                target: "_blank"
            })
        } else {
            j.click(function() {
                var k = new RaveshUI.MiniDialog();
                k.setContent($("<div>").css({
                    padding: 15
                }).append(c.property.text));
                k.setTitle(c.title);
                if (window.onOpenedMiniDialog) {
                    onOpenedMiniDialog(k)
                }
                return false
            })
        }
        d.container.append(g)
    }
    ;
    function b(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\[link\](.*?)\[\/link\]/ig, '<a style="text-decoration: underline;color: inherit;" href="#">$1</a>')
    }
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setDisable = function(e) {
        a.attr("disabled", e)
    }
    ;
    d.setValue = function(e) {
        a.attr("checked", e.value.toLowerCase() == "1")
    }
    ;
    d.getValue = function() {
        var e = a.is(":checked");
        return {
            title: "",
            value: e ? "1" : "",
            number: e ? 1 : 0
        }
    }
});
createInsertFieldUI("text", function(b) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    c.setOption = function() {
        var d = {
            width: "medium",
            defaultValue: "",
            placeholder: "",
            min: 0,
            max: 255,
            inputFormat: ""
        };
        b.property = $.extend(d, b.property);
        c.input = $("<input>").addClass("form-input").attr({
            type: "text",
            maxLength: b.property.max,
            placeholder: b.property.placeholder
        }).val(b.property.defaultValue).appendTo(c.container.empty());
        if (b.property.rememberMe) {
            c.input.attr("id", b.type + "_" + b.id)
        }
        c.container.append(QrCodeScannerInputs(c.getFrmSetting("lang"), c.isApp, b, c.input, function() {
            c.input.blur()
        }));
        c.input.keyup(function() {
            if (b.property.inputFormat == "onlyNumber" || b.property.inputFormat == "nationalCode") {
                c.input.val(FormUtility.convertPersianNumber(c.input.val()))
            }
            c.toggleError(false);
            c.onChange()
        });
        c.input.blur(function() {
            if (b.property.inputFormat == "onlyNumber" || b.property.inputFormat == "nationalCode") {
                c.input.val(FormUtility.convertPersianNumber(c.input.val()))
            }
            var e = c.checkValid();
            c.toggleError(e != null, e);
            c.onChange()
        })
    }
    ;
    function a(f) {
        if (!/^\d{10}$/.test(f) || f == "0000000000" || f == "1111111111" || f == "2222222222" || f == "3333333333" || f == "4444444444" || f == "5555555555" || f == "6666666666" || f == "7777777777" || f == "8888888888" || f == "9999999999") {
            return false
        }
        var d = parseInt(f[9]);
        var g = 0;
        for (var e = 0; e < 9; ++e) {
            g += parseInt(f[e]) * (10 - e)
        }
        g %= 11;
        return (g < 2 && d == g) || (g >= 2 && d + g == 11)
    }
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        c.input.css("width", e)
    }
    ;
    c.setDisable = function(d) {
        c.input.attr("disabled", d)
    }
    ;
    c.setValue = function(d) {
        c.input.val(d.value)
    }
    ;
    c.getValue = function() {
        return {
            title: "",
            value: c.input.val().trim(),
            number: 0
        }
    }
    ;
    c.checkValid = function() {
        var d = c.input.val().trim();
        if (d.length < parseInt(b.property.min)) {
            return c.getFrmRes("insert", "minCharacter").replace("{0}", b.property.min)
        }
        if (d.length > parseInt(b.property.max)) {
            return c.getFrmRes("insert", "maxCharacter").replace("{0}", b.property.max)
        }
        if (b.property.inputFormat != "" && d != "") {
            switch (b.property.inputFormat) {
            case "nationalCode":
                if (!a(d)) {
                    return b.title + " " + c.getFrmRes("insert", "notValid")
                }
                break;
            case "onlyNumber":
                if (!d.match(/^[0-9]+$/)) {
                    return b.title + " " + c.getFrmRes("insert", "notValid")
                }
                break;
            case "onlyAlphaEn":
                if (!d.match(/^[a-zA-Z ]*$/)) {
                    return b.title + " " + c.getFrmRes("insert", "notValid")
                }
                break;
            case "onlyAlphaFa":
                if (!d.match(/^[\u0600-\u06FF\s|(\u200C)]+$/)) {
                    return b.title + " " + c.getFrmRes("insert", "notValid")
                }
                break
            }
        }
    }
});
createInsertFieldUI("time", function(a) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    var b;
    c.setOption = function() {
        var d = {
            width: "small",
            defaultValue: "",
            clockMode: "analog"
        };
        a.property = $.extend(d, a.property);
        c.container.empty();
        var e = "";
        if (!c.isApp) {
            b = RaveshUI.selectTime({
                lang: c.getFrmSetting("lang"),
                width: "auto",
                defaultValue: a.property.defaultValue,
                clockMode: a.property.clockMode,
                onSelected: function() {
                    c.toggleError(false);
                    c.onChange()
                }
            })
        } else {
            b = RaveshUI.selectTime({
                lang: c.getFrmSetting("lang"),
                width: "auto",
                defaultValue: a.property.defaultValue,
                arrow: false,
                allowSearch: false,
                createContent: function() {
                    return ""
                },
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, b.getSelectedOption().id || "", function(f) {
                        b.setSelected(f);
                        c.toggleError(false);
                        c.onChange()
                    })
                }
            });
            e = $("<div>").css({
                margin: "10px -5px 5px"
            });
            $("<input>").attr({
                type: "submit",
                value: c.getFrmRes("insert", "clear")
            }).addClass("ravesh-button").click(function() {
                if (a.property.disable) {
                    return false
                }
                b.setSelected("");
                c.toggleError(false);
                c.onChange();
                return false
            }).appendTo(e);
            $("<input>").attr({
                type: "submit",
                value: c.getFrmRes("insert", "currentTime")
            }).addClass("ravesh-button").click(function() {
                if (a.property.disable) {
                    return false
                }
                b.setSelected(b.getTimeNow());
                c.toggleError(false);
                c.onChange();
                return false
            }).appendTo(e)
        }
        b.setDisable(a.property.disable || false);
        if (a.property.defaultValue == "auto") {
            b.setSelected(b.getTimeNow())
        }
        c.container.append(b.getUI(), e)
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setWidth = function(d, e) {
        b.setWidth(e)
    }
    ;
    c.setDisable = function(d) {
        b.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        b.setSelected(d.value)
    }
    ;
    c.getValue = function() {
        var g = b.getSelectedOption().id || "";
        var f = 0;
        if (g != "") {
            var d = parseInt(g.split(":")[0]) || 0;
            var e = parseInt(g.split(":")[1]) || 0;
            f = d * 60 + e
        }
        return {
            title: "",
            value: g,
            number: f
        }
    }
});
createInsertFieldUI("toggle", function(b) {
    var c = this;
    c.needConfirm = true;
    c.container = $("<div>");
    c.toggleButton = {};
    function a(g) {
        var j = this;
        var f = function() {};
        var d = FormUtility.randomId();
        var k = $("<label>").addClass("ravesh-toggle ravesh-toggle-style-" + (g.style == "0" ? "0" : "1") + (g.showText ? " has-text" : "")).attr({
            "for": d
        });
        var e = $("<input>").attr({
            id: d,
            type: "checkbox"
        });
        if (g.style == "0") {
            k.append(e, $("<div>").addClass("slider"))
        } else {
            k.append(e, $("<div>").addClass("float-right toggle-on ticon-" + g.style).append($("<i>"), g.showText ? $("<div>").text(g.onText) : ""), $("<div>").addClass("float-right toggle-off ticon-" + g.style).append($("<i>"), g.showText ? $("<div>").text(g.offText) : ""))
        }
        e.change(function() {
            k.toggleClass("checked", j.getChecked());
            f()
        });
        j.setDisable = function(l) {
            e.attr("disabled", l);
            k.toggleClass("disabled", l)
        }
        ;
        j.setChecked = function(l) {
            e.attr("checked", l);
            k.toggleClass("checked", l)
        }
        ;
        j.getUI = function() {
            return k
        }
        ;
        j.getChecked = function() {
            return e.is(":checked")
        }
        ;
        j.setOnChange = function(l) {
            f = l
        }
    }
    c.setOption = function() {
        var d = {
            defaultValue: "0",
            style: "0",
            onText: c.getFrmRes("insert", "toggleOn"),
            offText: c.getFrmRes("insert", "toggleOff"),
            showText: true
        };
        b.property = $.extend(d, b.property);
        c.toggleButton = new a(b.property);
        c.toggleButton.setOnChange(function() {
            c.toggleError(false);
            c.onChange()
        });
        c.container.empty().append(c.toggleButton.getUI());
        c.toggleButton.setChecked(b.property.defaultValue == "1")
    }
    ;
    c.getUI = function() {
        c.setOption();
        return c.container
    }
    ;
    c.setDisable = function(d) {
        c.toggleButton.setDisable(d)
    }
    ;
    c.setValue = function(d) {
        c.toggleButton.setChecked(d.value == "1")
    }
    ;
    c.getValue = function() {
        var d = c.toggleButton.getChecked();
        return {
            title: "",
            value: d ? "1" : "0",
            number: d ? 1 : 0
        }
    }
    ;
    c.checkValid = function() {
        if (b.property.required && c.getValue().number == 0 && b.property.style == "0") {
            return c.getFrmRes("insert", "required")
        }
    }
});
createInsertFieldUI("user", function(a) {
    var d = this;
    d.needConfirm = true;
    d.container = $("<div>");
    var b;
    d.setOption = function() {
        var e = {
            width: "medium",
            defaultValue: "",
            allowSearch: true
        };
        a.property = $.extend(true, e, a.property);
        d.container.empty();
        if (!d.isApp) {
            b = new RaveshUI.selectUser({
                dir: d.getFrmSetting("dir"),
                defaultTitle: d.getFrmRes("insert", "pleaseSelect"),
                defaultId: c(),
                allowSearch: a.property.allowSearch,
                group: a.property.group || "",
                onSelected: function() {
                    d.toggleError(false);
                    d.onChange()
                }
            })
        } else {
            b = new RaveshUI.DropDown({
                dir: d.getFrmSetting("dir"),
                defaultTitle: d.getFrmRes("insert", "pleaseSelect"),
                defaultId: a.property.defaultValue,
                allowSearch: false,
                arrow: false,
                onClick: function() {
                    b.hideMenu();
                    appMng.showInput(a.id, "", function(g, f) {
                        b.setSelected({
                            id: g,
                            title: f
                        });
                        d.toggleError(false);
                        d.onChange()
                    })
                }
            })
        }
        d.container.append(b.getUI())
    }
    ;
    d.getUI = function() {
        d.setOption();
        return d.container
    }
    ;
    d.setWidth = function(e, f) {
        b.setWidth(f)
    }
    ;
    d.setDisable = function(e) {
        b.setDisable(e)
    }
    ;
    d.setValue = function(e) {
        if (!d.isApp) {
            b.setSelectedById(e.value)
        } else {
            b.setSelected({
                id: e.value,
                title: e.title
            })
        }
    }
    ;
    d.getValue = function() {
        var e = b.getSelectedOption();
        return {
            title: e.id == "" ? "" : e.title,
            value: e.id,
            number: 0
        }
    }
    ;
    function c() {
        return a.property.defaultValue == "auto" ? ($("#HFUserCode").length != 0 ? $("#HFUserCode").val() : "") : a.property.defaultValue
    }
});
createInsertFieldUI("verifySms", function(a) {
    var b = this;
    b.needConfirm = true;
    b.container = $("<div>").css({
        overflow: "hidden",
        "max-width": "100%"
    });
    b.setOption = function() {
        b.container.empty();
        var c = {
            width: "medium"
        };
        a.property = $.extend(c, a.property);
        b.txtNum = $("<input>").addClass("form-input").css({
            width: "100px",
            "text-align": "center"
        }).attr({
            type: "number",
            maxLength: 5
        }).appendTo(b.container);
        var e = $("<div>").css({
            "float": "right",
            "margin-top": 5
        }).html("&nbsp;").appendTo(b.container);
        function d() {
            var g = 90;
            var f = 0;
            var j = setInterval(function() {
                var l = function(p) {
                    return parseInt(p) < 10 && parseInt(p) >= 0 ? "0" + p.toString() : p.toString()
                };
                f++;
                var o = g - f;
                var k = parseInt(o / 60);
                var n = o % 60;
                e.html('<span style="min-width: 30px;display: inline-block;text-align:left">' + l(k) + ":" + l(n) + "</span> " + frmRes.insert.timeToResendVerifyCode);
                if (f >= g) {
                    $("<button>").addClass("ravesh-button").css({
                        margin: "10px 0 0"
                    }).text(frmRes.insert.resendVerifyCode).appendTo(e.empty()).click(function() {
                        window.rensendVerifyCode()
                    });
                    clearInterval(j)
                }
            }, 1000)
        }
        d()
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setWidth = function(c, d) {
        b.container.css("width", d)
    }
    ;
    b.setDisable = function(c) {}
    ;
    b.setValue = function(c) {}
    ;
    b.getValue = function() {
        return {
            title: "",
            value: b.txtNum.val().trim(),
            number: 0
        }
    }
});
createInsertFieldUI("website", function(a) {
    var b = this;
    b.needConfirm = true;
    b.container = $("<div>");
    b.setOption = function() {
        var c = {
            width: "medium",
            placeholder: "http://"
        };
        a.property = $.extend(c, a.property);
        b.input = $("<input>").attr({
            type: "url",
            placeholder: a.property.placeholder
        }).addClass("form-input").css({
            direction: "ltr",
            "text-align": "left"
        }).appendTo(b.container.empty());
        if (a.property.rememberMe) {
            b.input.attr("id", a.type + "_" + a.id)
        }
        b.container.append(QrCodeScannerInputs(b.getFrmSetting("lang"), b.isApp, a, b.input, function() {
            b.input.blur()
        }));
        b.input.keyup(function() {
            b.toggleError(false);
            b.onChange()
        });
        b.input.blur(function() {
            var e = b.input.val().trim();
            if (e != "" && (e.indexOf("http://") == -1 && e.indexOf("https://") == -1)) {
                b.input.val("http://" + e)
            }
            var d = b.checkValid();
            b.toggleError(d != null, d);
            b.onChange()
        })
    }
    ;
    b.getUI = function() {
        b.setOption();
        return b.container
    }
    ;
    b.setWidth = function(c, d) {
        b.input.css("width", d)
    }
    ;
    b.setDisable = function(c) {
        b.input.attr("disabled", c)
    }
    ;
    b.setValue = function(c) {
        b.input.val(c.value)
    }
    ;
    b.getValue = function() {
        return {
            title: "",
            value: b.input.val().trim(),
            number: 0
        }
    }
    ;
    b.checkValid = function() {
        var c = b.input.val().trim();
        if (c != "") {
            if (!(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).test(c.toLowerCase())) {
                return b.getFrmRes("insert", "urlNotValid")
            }
        }
    }
});
(function($) {
    $.extend($.ui, {
        datepicker: {
            version: "1.8"
        }
    });
    var PROP_NAME = "datepicker";
    var dpuuid = new Date().getTime();
    function Datepicker() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            calendar: Date,
            closeText: "Done",
            prevText: "",
            nextText: "",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "show",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "_default",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.dpDiv = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible" style="display:none"></div>')
    }
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        log: function() {
            if (this.debug) {
                console.log.apply("", arguments)
            }
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(settings) {
            extendRemove(this._defaults, settings || {});
            return this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = (nodeName == "div" || nodeName == "span");
            if (!target.id) {
                target.id = "dp" + (++this.uuid)
            }
            var inst = this._newInst($(target), inline);
            var regional = $.extend({}, settings && this.regional[settings.regional] || {});
            inst.settings = $.extend(regional, settings || {}, inlineSettings || {});
            if (nodeName == "input") {
                this._connectDatepicker(target, inst)
            } else {
                if (inline) {
                    this._inlineDatepicker(target, inst)
                }
            }
        },
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_])/g, "\\\\$1");
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: (!inline ? this.dpDiv : $('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
            }
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key)
            });
            this._autoSize(inst);
            $.data(target, PROP_NAME, inst)
        },
        _attachments: function(input, inst) {
            var appendText = this._get(inst, "appendText");
            var isRTL = false;
            if (inst.append) {
                inst.append.remove()
            }
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append)
            }
            input.unbind("focus", this._showDatepicker);
            if (inst.trigger) {
                inst.trigger.remove()
            }
            var showOn = this._get(inst, "showOn");
            if (showOn == "focus" || showOn == "both") {
                input.focus(this._showDatepicker)
            }
            if (showOn == "button" || showOn == "both") {
                var buttonText = this._get(inst, "buttonText");
                var buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
                        $.datepicker._hideDatepicker()
                    } else {
                        $.datepicker._showDatepicker(input[0])
                    }
                    return false
                })
            }
        },
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var date = new Date(2009,12 - 1,20);
                var dateFormat = this._get(inst, "dateFormat");
                if (dateFormat.match(/[DM]/)) {
                    var findMax = function(names) {
                        var max = 0;
                        var maxI = 0;
                        for (var i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i
                            }
                        }
                        return maxI
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay())
                }
                inst.input.attr("size", this._formatDate(inst, date).length)
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key)
            });
            $.data(target, PROP_NAME, inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst)
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var inst = this._dialogInst;
            if (!inst) {
                var id = "dp" + (++this.uuid);
                this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], PROP_NAME, inst)
            }
            extendRemove(inst.settings, settings || {});
            date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);
            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                var browserWidth = document.documentElement.clientWidth;
                var browserHeight = document.documentElement.clientHeight;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv)
            }
            $.data(this._dialogInput[0], PROP_NAME, inst);
            return this
        },
        _destroyDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    $target.removeClass(this.markerClassName).empty()
                }
            }
        },
        _enableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = false;
                inst.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().removeClass("ui-state-disabled")
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value)
            })
        },
        _disableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = true;
                inst.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().addClass("ui-state-disabled")
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value)
            });
            this._disabledInputs[this._disabledInputs.length] = target
        },
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target) {
                    return true
                }
            }
            return false
        },
        _getInst: function(target) {
            try {
                return $.data(target, PROP_NAME)
            } catch (err) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == "string") {
                return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null))
            }
            var settings = name || {};
            if (typeof name == "string") {
                settings = {};
                settings[name] = value
            }
            if (inst) {
                if (this._curInst == inst) {
                    this._hideDatepicker()
                }
                var date = this._getDateDatepicker(target, true);
                extendRemove(inst.settings, settings);
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDateDatepicker(target, date);
                this._updateDatepicker(inst)
            }
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value)
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst)
            }
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst)
            }
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault)
            }
            return (inst ? this._getDate(inst) : null)
        },
        _doKeyDown: function(event) {
            var inst = $.datepicker._getInst(event.target);
            var handled = true;
            var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker();
                    handled = false;
                    break;
                case 13:
                    var sel = $("td." + $.datepicker._dayOverClass, inst.dpDiv).add($("td." + $.datepicker._currentClass, inst.dpDiv));
                    if (sel[0]) {
                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0])
                    } else {
                        $.datepicker._hideDatepicker()
                    }
                    return false;
                    break;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
                    break;
                case 35:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target)
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 36:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target)
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 37:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M")
                    }
                    break;
                case 38:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 39:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M")
                    }
                    break;
                case 40:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                default:
                    handled = false
                }
            } else {
                if (event.keyCode == 36 && event.ctrlKey) {
                    $.datepicker._showDatepicker(this)
                } else {
                    handled = false
                }
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation()
            }
        },
        _doKeyPress: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) {
                var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || (chr < " " || !chars || chars.indexOf(chr) > -1)
            }
        },
        _doKeyUp: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() != inst.lastVal) {
                try {
                    var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst)
                    }
                } catch (event) {
                    $.datepicker.log(event)
                }
            }
            return true
        },
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != "input") {
                input = $("input", input.parentNode)[0]
            }
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
                return
            }
            var inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst != inst) {
                $.datepicker._curInst.dpDiv.stop(true, true)
            }
            var beforeShow = $.datepicker._get(inst, "beforeShow");
            extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog) {
                input.value = ""
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight
            }
            var isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css("position") == "fixed";
                return !isFixed
            });
            if (isFixed && $.browser.opera) {
                $.datepicker._pos[0] -= document.documentElement.scrollLeft;
                $.datepicker._pos[1] -= document.documentElement.scrollTop
            }
            var offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            });
            if (!inst.inline) {
                var showAnim = $.datepicker._get(inst, "showAnim");
                var duration = $.datepicker._get(inst, "duration");
                var postProcess = function() {
                    $.datepicker._datepickerShowing = true;
                    var borders = $.datepicker._getBorders(inst.dpDiv);
                    inst.dpDiv.find("iframe.ui-datepicker-cover").css({
                        left: -borders[0],
                        top: -borders[1],
                        width: inst.dpDiv.outerWidth(),
                        height: inst.dpDiv.outerHeight()
                    })
                };
                inst.dpDiv.zIndex($(input).zIndex() + 1);
                if ($.effects && $.effects[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
                } else {
                    inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess)
                }
                if (!showAnim || !duration) {
                    postProcess()
                }
                if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
                    inst.input.focus()
                }
                $.datepicker._curInst = inst
            }
        },
        _updateDatepicker: function(inst) {
            var self = this;
            var borders = $.datepicker._getBorders(inst.dpDiv);
            inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({
                left: -borders[0],
                top: -borders[1],
                width: inst.dpDiv.outerWidth(),
                height: inst.dpDiv.outerHeight()
            }).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout", function() {
                $(this).removeClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") != -1) {
                    $(this).removeClass("ui-datepicker-prev-hover")
                }
                if (this.className.indexOf("ui-datepicker-next") != -1) {
                    $(this).removeClass("ui-datepicker-next-hover")
                }
            }).bind("mouseover", function() {
                if (!self._isDisabledDatepicker(inst.inline ? inst.dpDiv.parent()[0] : inst.input[0])) {
                    $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                    $(this).addClass("ui-state-hover");
                    if (this.className.indexOf("ui-datepicker-prev") != -1) {
                        $(this).addClass("ui-datepicker-prev-hover")
                    }
                    if (this.className.indexOf("ui-datepicker-next") != -1) {
                        $(this).addClass("ui-datepicker-next-hover")
                    }
                }
            }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end();
            var numMonths = this._getNumberOfMonths(inst);
            var cols = numMonths[1];
            var width = 17;
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em")
            } else {
                inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")
            }
            inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled")) {
                inst.input.focus()
            }
        },
        _getBorders: function(elem) {
            var convert = function(value) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[value] || value
            };
            return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))]
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth();
            var dpHeight = inst.dpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
            var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
            var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();
            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
            return offset
        },
        _findPos: function(obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, "isRTL");
            while (obj && (obj.type == "hidden" || obj.nodeType != 1)) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"]
            }
            var position = $(obj).offset();
            return [position.left, position.top]
        },
        _hideDatepicker: function(input) {
            var inst = this._curInst;
            if (!inst || (input && inst != $.data(input, PROP_NAME))) {
                return
            }
            if (this._datepickerShowing) {
                var showAnim = this._get(inst, "showAnim");
                var duration = this._get(inst, "duration");
                var postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                    this._curInst = null
                };
                if ($.effects && $.effects[showAnim]) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
                } else {
                    inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess)
                }
                if (!showAnim) {
                    postProcess()
                }
                var onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst])
                }
                this._datepickerShowing = false;
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return
            }
            var $target = $(event.target);
            if ($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.hasClass($.datepicker._triggerClass) && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI)) {
                $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return
            }
            this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
            this._updateDatepicker(inst)
        },
        _gotoToday: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear
            } else {
                var date = new this.Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear()
            }
            this._notifyChange(inst);
            this._adjustDate(target)
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            inst._selectingMonthYear = false;
            inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target)
        },
        _clickMonthYear: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (inst.input && inst._selectingMonthYear && !$.browser.msie) {
                inst.input.focus()
            }
            inst._selectingMonthYear = !inst._selectingMonthYear
        },
        _selectDay: function(id, month, year, td) {
            var target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return
            }
            var inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).attr("num");
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear))
        },
        _clearDate: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            this._selectDate(target, "")
        },
        _selectDate: function(id, dateStr) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr)
            }
            this._updateAlternate(inst);
            var onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
            } else {
                if (inst.input) {
                    inst.input.trigger("change")
                }
            }
            if (inst.inline) {
                this._updateDatepicker(inst)
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof (inst.input[0]) != "object") {
                    inst.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function(inst) {
            var altField = this._get(inst, "altField");
            if (altField) {
                var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                var date = this._getDate(inst);
                var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() {
                    $(this).val(dateStr)
                })
            }
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""]
        },
        iso8601Week: function(date) {
            var checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1
        },
        parseDate: function(format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments"
            }
            value = (typeof value == "object" ? value.toString() : value + "");
            if (value == "") {
                return null
            }
            var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var year = -1;
            var month = -1;
            var day = -1;
            var doy = -1;
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            var getNumber = function(match) {
                lookAhead(match);
                var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" ? 4 : (match == "o" ? 3 : 2))));
                var digits = new RegExp("^\\d{1," + size + "}");
                var num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue
                }
                iValue += num[0].length;
                return parseInt(num[0], 10)
            };
            var getName = function(match, shortNames, longNames) {
                var names = (lookAhead(match) ? longNames : shortNames);
                for (var i = 0; i < names.length; i++) {
                    if (value.substr(iValue, names[i].length) == names[i]) {
                        iValue += names[i].length;
                        return i + 1
                    }
                }
                throw "Unknown name at position " + iValue
            };
            var checkLiteral = function() {
                if (value.charAt(iValue) != format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue
                }
                iValue++
            };
            var iValue = 0;
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                        literal = false
                    } else {
                        checkLiteral()
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", dayNamesShort, dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        var date = new this.Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "'":
                        if (lookAhead("'")) {
                            checkLiteral()
                        } else {
                            literal = true
                        }
                        break;
                    default:
                        checkLiteral()
                    }
                }
            }
            if (year == -1) {
                year = new this.Date().getFullYear()
            } else {
                if (year < 100) {
                    year += new this.Date().getFullYear() - new this.Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)
                }
            }
            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    var dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break
                    }
                    month++;
                    day -= dim
                } while (true)
            }
            var date = this._daylightSavingAdjust(new this.Date(year,month - 1,day));
            if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
                throw "Invalid date"
            }
            return date
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(format, date, settings) {
            if (!date) {
                return ""
            }
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            var formatNumber = function(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num
                    }
                }
                return num
            };
            var formatName = function(match, value, shortNames, longNames) {
                return (lookAhead(match) ? longNames[value] : shortNames[value])
            };
            var output = "";
            var literal = false;
            if (date) {
                for (var iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                            literal = false
                        } else {
                            output += format.charAt(iFormat)
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case "D":
                            output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                            break;
                        case "o":
                            output += formatNumber("o", (date.getTime() - new Date(date.getFullYear(),0,0).getTime()) / 86400000, 3);
                            break;
                        case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                            break;
                        case "y":
                            output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
                            break;
                        case "@":
                            output += date.getTime();
                            break;
                        case "!":
                            output += date.getTime() * 10000 + this._ticksTo1970;
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                output += "'"
                            } else {
                                literal = true
                            }
                            break;
                        default:
                            output += format.charAt(iFormat)
                        }
                    }
                }
            }
            return output
        },
        _possibleChars: function(format) {
            var chars = "";
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                        literal = false
                    } else {
                        chars += format.charAt(iFormat)
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        chars += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        if (lookAhead("'")) {
                            chars += "'"
                        } else {
                            literal = true
                        }
                        break;
                    default:
                        chars += format.charAt(iFormat)
                    }
                }
            }
            return chars
        },
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() == inst.lastVal) {
                return
            }
            var dateFormat = this._get(inst, "dateFormat");
            var dates = inst.lastVal = inst.input ? inst.input.val() : null;
            var date, defaultDate;
            date = defaultDate = this._getDefaultDate(inst);
            var settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate
            } catch (event) {
                this.log(event);
                dates = (noDefault ? "" : dates)
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst)
        },
        _getDefaultDate: function(inst) {
            this.Date = this._get(inst, "calendar");
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new this.Date()))
        },
        _determineDate: function(inst, date, defaultDate) {
            var Date = this.Date;
            var offsetNumeric = function(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date
            };
            var offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
                var matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || "d") {
                    case "d":
                    case "D":
                        day += parseInt(matches[1], 10);
                        break;
                    case "w":
                    case "W":
                        day += parseInt(matches[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    case "y":
                    case "Y":
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break
                    }
                    matches = pattern.exec(offset)
                }
                return new Date(year,month,day)
            };
            date = (date == null ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : date)));
            date = (date && date.toString() == "Invalid Date" ? defaultDate : date);
            if (date) {
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(date)
        },
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date
        },
        _setDate: function(inst, date, noChange) {
            var clear = !(date);
            var origMonth = inst.selectedMonth;
            var origYear = inst.selectedYear;
            this.Date = this._get(inst, "calendar");
            date = this._restrictMinMax(inst, this._determineDate(inst, date, new this.Date()));
            inst.selectedDay = inst.currentDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = date.getFullYear();
            if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
                this._notifyChange(inst)
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst))
            }
        },
        _getDate: function(inst) {
            this.Date = this._get(inst, "calendar");
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new this.Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
            return startDate
        },
        _localNumber: function(inst, text) {
            if (text == null) {
                return null
            }
            var str = text.toString();
            var numbers = this._get(inst, "numbers");
            for (var i = 0; i <= 9; i++) {
                str = str.replace(new RegExp(i,"g"), numbers[i])
            }
            return str
        },
        _generateHTML: function(inst) {
            var today = new this.Date();
            today = this._daylightSavingAdjust(new this.Date(today.getFullYear(),today.getMonth(),today.getDate()));
            var isRTL = this._get(inst, "isRTL");
            var showButtonPanel = this._get(inst, "showButtonPanel");
            var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
            var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
            var numMonths = this._getNumberOfMonths(inst);
            var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
            var stepMonths = this._get(inst, "stepMonths");
            var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
            var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999,9,9) : new this.Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var drawMonth = inst.drawMonth - showCurrentAtPos;
            var drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--
            }
            if (maxDate) {
                var maxDraw = this._daylightSavingAdjust(new this.Date(maxDate.getFullYear(),maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1,maxDate.getDate()));
                maxDraw = (minDate && this._compareDate(maxDraw, "<", minDate) ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new this.Date(drawYear,drawMonth,1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            var prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new this.Date(drawYear,drawMonth - stepMonths,1)), this._getFormatConfig(inst)));
            var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a style="direction:ltr" class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', -" + stepMonths + ", 'M');\" title=\"" + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a style="direction:ltr" class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
            var nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new this.Date(drawYear,drawMonth + stepMonths,1)), this._getFormatConfig(inst)));
            var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a style="direction:ltr" class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', +" + stepMonths + ", 'M');\" title=\"" + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a style="direction:ltr" class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
            var currentText = this._get(inst, "currentText");
            var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
            var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(inst, "closeText") + "</button>" : "");
            var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + inst.id + "');\">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
            var firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);
            var showWeek = this._get(inst, "showWeek");
            var dayNames = this._get(inst, "dayNames");
            var dayNamesShort = this._get(inst, "dayNamesShort");
            var dayNamesMin = this._get(inst, "dayNamesMin");
            var monthNames = this._get(inst, "monthNames");
            var monthNamesShort = this._get(inst, "monthNamesShort");
            var beforeShowDay = this._get(inst, "beforeShowDay");
            var showOtherMonths = this._get(inst, "showOtherMonths");
            var selectOtherMonths = this._get(inst, "selectOtherMonths");
            var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
            var defaultDate = this._getDefaultDate(inst);
            var html = "";
            for (var row = 0; row < numMonths[0]; row++) {
                var group = "";
                for (var col = 0; col < numMonths[1]; col++) {
                    var selectedDate = this._daylightSavingAdjust(new this.Date(drawYear,drawMonth,inst.selectedDay));
                    var cornerClass = " ui-corner-all";
                    var calender = "";
                    if (isMultiMonth) {
                        calender += '<div class="ui-datepicker-group';
                        if (numMonths[1] > 1) {
                            switch (col) {
                            case 0:
                                calender += " ui-datepicker-group-first";
                                cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                break;
                            case numMonths[1] - 1:
                                calender += " ui-datepicker-group-last";
                                cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                break;
                            default:
                                calender += " ui-datepicker-group-middle";
                                cornerClass = "";
                                break
                            }
                        }
                        calender += '">'
                    }
                    calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
                    for (var dow = 0; dow < 7; dow++) {
                        var day = (dow + firstDay) % 7;
                        thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>"
                    }
                    calender += thead + "</tr></thead><tbody>";
                    var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)
                    }
                    var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    var numRows = (isMultiMonth ? 6 : Math.ceil((leadDays + daysInMonth) / 7));
                    var printDate = this._daylightSavingAdjust(new this.Date(drawYear,drawMonth,1 - leadDays));
                    for (var dRow = 0; dRow < numRows; dRow++) {
                        calender += "<tr>";
                        var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (var dow = 0; dow < 7; dow++) {
                            var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            var otherMonth = (printDate.getMonth() != drawMonth);
                            var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || ((minDate && this._compareDate(printDate, "<", minDate)) || (maxDate && this._compareDate(printDate, ">", maxDate)));
                            tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + inst.id + "'," + printDate.getMonth() + "," + printDate.getFullYear() + ', this);return false;"') + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#" num="' + printDate.getDate() + '">' + this._localNumber(inst, printDate.getDate()) + "</a>")) + "</td>";
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate)
                        }
                        calender += tbody + "</tr>"
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    group += calender
                }
                html += group
            }
            html += buttonPanel;
            if ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline) {
                html += '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>';
                inst.settings.showAnim = ""
            }
            inst._keyEvent = false;
            return html
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var changeMonth = this._get(inst, "changeMonth");
            var changeYear = this._get(inst, "changeYear");
            var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
            var html = '<div class="ui-datepicker-title">';
            var monthHtml = "";
            if (secondary || !changeMonth) {
                monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>"
            } else {
                var inMinYear = (minDate && minDate.getFullYear() == drawYear);
                var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
                monthHtml += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'M');\" onclick=\"DP_jQuery_" + dpuuid + ".datepicker._clickMonthYear('#" + inst.id + "');\">";
                for (var month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>"
                    }
                }
                monthHtml += "</select>"
            }
            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "")
            }
            if (secondary || !changeYear) {
                html += '<span class="ui-datepicker-year">' + this._localNumber(inst, drawYear) + "</span>"
            } else {
                var years = this._get(inst, "yearRange").split(":");
                var thisYear = new Date().getFullYear();
                var determineYear = function(value) {
                    var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
                    return (isNaN(year) ? thisYear : year)
                };
                var year = determineYear(years[0]);
                var endYear = Math.max(year, determineYear(years[1] || ""));
                year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                html += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + dpuuid + ".datepicker._clickMonthYear('#" + inst.id + "');\">";
                for (; year <= endYear; year++) {
                    html += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + this._localNumber(inst, year) + "</option>"
                }
                html += "</select>"
            }
            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml
            }
            html += "</div>";
            return html
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period == "Y" ? offset : 0);
            var month = inst.drawMonth + (period == "M" ? offset : 0);
            var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
            var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new this.Date(year,month,day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period == "M" || period == "Y") {
                this._notifyChange(inst)
            }
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            date = (this._compareDate(date, "<", minDate) ? minDate : date);
            date = (this._compareDate(date, ">", maxDate) ? maxDate : date);
            return date
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst])
            }
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths))
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
        },
        _getDaysInMonth: function(year, month) {
            return 32 - new this.Date(year,month,32).getDate()
        },
        _getFirstDayOfMonth: function(year, month) {
            return new this.Date(year,month,1).getDay()
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst);
            var date = this._daylightSavingAdjust(new this.Date(curYear,curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]),1));
            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()))
            }
            return this._isInRange(inst, date)
        },
        _isInRange: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()))
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            this.Date = this._get(inst, "calendar");
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new this.Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            }
        },
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear
            }
            var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new this.Date(year,month,day))) : this._daylightSavingAdjust(new this.Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
        },
        _compareDate: function(d1, op, d2) {
            if (d1 && d2) {
                if (d1.getGregorianDate) {
                    d1 = d1.getGregorianDate()
                }
                if (d2.getGregorianDate) {
                    d2 = d2.getGregorianDate()
                }
                if (op == "<") {
                    return d1 < d2
                }
                return d1 > d2
            } else {
                return null
            }
        }
    });
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null || props[name] == undefined) {
                target[name] = props[name]
            }
        }
        return target
    }
    function isArray(a) {
        return (a && (($.browser.safari && typeof a == "object" && a.length) || (a.constructor && a.constructor.toString().match(/\Array\(\)/))))
    }
    $.fn.datepicker = function(options) {
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
            $.datepicker.initialized = true
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
        }
        if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
        }
        return this.each(function() {
            typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
        })
    }
    ;
    $.datepicker = new Datepicker();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new this.Date().getTime();
    $.datepicker.version = "1.8";
    window["DP_jQuery_" + dpuuid] = $
}
)(jQuery);
jQuery(function(a) {
    a.datepicker.regional.fa = {
        calendar: JalaliDate,
        closeText: "بستن",
        prevText: "",
        nextText: "",
        currentText: "امروز",
        monthNames: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthNamesShort: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        dayNames: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
        dayNamesShort: ["یک", "دو", "سه", "چهار", "پنج", "جمعه", "شنبه"],
        dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        numbers: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        weekHeader: "ه",
        dateFormat: "yy/mm/dd",
        firstDay: 6,
        isRTL: true,
        showMonthAfterYear: false,
        yearSuffix: "",
        calculateWeek: function(c) {
            var b = new JalaliDate(c.getFullYear(),c.getMonth(),c.getDate() + (c.getDay() || 7) - 3);
            return Math.floor(Math.round((b.getTime() - new JalaliDate(b.getFullYear(),0,1).getTime()) / 86400000) / 7) + 1
        }
    };
    a.datepicker.setDefaults(a.datepicker.regional.fa)
});
function JalaliDate(u, v, w) {
    var b = 1721425.5;
    var f = 1948439.5;
    var y = 1948320.5;
    var t = function(g, B) {
        return g - (B * Math.floor(g / B))
    };
    var x = function(g) {
        var B = parseInt(g);
        return B < 10 ? "0" + B : B.toString()
    };
    var e;
    var l;
    if (!isNaN(parseInt(u)) && !isNaN(parseInt(v)) && !isNaN(parseInt(w))) {
        var a = k([parseInt(u, 10), parseInt(v, 10), parseInt(w, 10)]);
        A(new Date(a[0],a[1],a[2]))
    } else {
        A(u)
    }
    function k(B) {
        var g = 0;
        if (B[1] < 0) {
            g = s(B[0] - 1) ? 30 : 29;
            B[1]++
        }
        var C = n(z(B[0], B[1] + 1, B[2]) - g);
        C[1]--;
        return C
    }
    function c(g) {
        var B = p(d(g[0], g[1] + 1, g[2]));
        B[1]--;
        return B
    }
    function A(g) {
        if (g && g.getGregorianDate) {
            g = g.getGregorianDate()
        }
        e = new Date(g);
        e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0);
        if (!e || e == "Invalid Date" || isNaN(e || !e.getDate())) {
            e = new Date()
        }
        l = c([e.getFullYear(), e.getMonth(), e.getDate()]);
        return this
    }
    this.getGregorianDate = function() {
        return e
    }
    ;
    this.setFullDate = A;
    this.setMonth = function(B) {
        l[1] = B;
        var C = k(l);
        e = new Date(C[0],C[1],C[2]);
        l = c([C[0], C[1], C[2]])
    }
    ;
    this.setDate = function(B) {
        l[2] = B;
        var C = k(l);
        e = new Date(C[0],C[1],C[2]);
        l = c([C[0], C[1], C[2]])
    }
    ;
    this.getFullYear = function() {
        return l[0]
    }
    ;
    this.getMonth = function() {
        return l[1]
    }
    ;
    this.getDate = function() {
        return l[2]
    }
    ;
    this.toString = function() {
        return l.join(",").toString()
    }
    ;
    this.getDay = function() {
        return e.getDay()
    }
    ;
    this.getHours = function() {
        return e.getHours()
    }
    ;
    this.getMinutes = function() {
        return e.getMinutes()
    }
    ;
    this.getSeconds = function() {
        return e.getSeconds()
    }
    ;
    this.getTime = function() {
        return e.getTime()
    }
    ;
    this.getTimeZoneOffset = function() {
        return e.getTimeZoneOffset()
    }
    ;
    this.getYear = function() {
        return l[0] % 100
    }
    ;
    this.getFullDate = function() {
        return this.getFullYear() + "/" + x(this.getMonth() + 1) + "/" + x(this.getDate())
    }
    ;
    this.getFullDateGregorian = function() {
        return x(e.getMonth() + 1) + "/" + x(e.getDate()) + "/" + e.getFullYear()
    }
    ;
    this.setHours = function(g) {
        e.setHours(g)
    }
    ;
    this.setMinutes = function(g) {
        e.setMinutes(g)
    }
    ;
    this.setSeconds = function(g) {
        e.setSeconds(g)
    }
    ;
    this.setMilliseconds = function(g) {
        e.setMilliseconds(g)
    }
    ;
    function d(C, B, g) {
        return (b - 1) + (365 * (C - 1)) + Math.floor((C - 1) / 4) + (-Math.floor((C - 1) / 100)) + Math.floor((C - 1) / 400) + Math.floor((((367 * B) - 362) / 12) + ((B <= 2) ? 0 : (q(C) ? -1 : -2)) + g)
    }
    function n(G) {
        var K, C, J, D, g, B, I, E, O, F, M, N, H;
        K = Math.floor(G - 0.5) + 0.5;
        C = K - b;
        J = Math.floor(C / 146097);
        D = t(C, 146097);
        g = Math.floor(D / 36524);
        B = t(D, 36524);
        I = Math.floor(B / 1461);
        E = t(B, 1461);
        O = Math.floor(E / 365);
        M = (J * 400) + (g * 100) + (I * 4) + O;
        if (!((g == 4) || (O == 4))) {
            M++
        }
        N = K - d(M, 1, 1);
        H = ((K < d(M, 3, 1)) ? 0 : (q(M) ? 1 : 2));
        month = Math.floor((((N + H) * 12) + 373) / 367);
        day = (K - d(M, month, 1)) + 1;
        return new Array(M,month,day)
    }
    function r(g) {
        return (((g * 11) + 14) % 30) < 11
    }
    function j(C, B, g) {
        return (g + Math.ceil(29.5 * (B - 1)) + (C - 1) * 354 + Math.floor((3 + (11 * C)) / 30) + f) - 1
    }
    function o(B) {
        var D, C, g;
        B = Math.floor(B) + 0.5;
        D = Math.floor(((30 * (B - f)) + 10646) / 10631);
        C = Math.min(12, Math.ceil((B - (29 + j(D, 1, 1))) / 29.5) + 1);
        g = (B - j(D, C, 1)) + 1;
        return new Array(D,C,g)
    }
    function s(g) {
        return ((((((g - ((g > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682
    }
    function q(g) {
        return ((g % 4) == 0) && (!(((g % 100) == 0) && ((g % 400) != 0)))
    }
    function z(E, D, g) {
        var B, C;
        B = E - ((E >= 0) ? 474 : 473);
        C = 474 + t(B, 2820);
        return g + ((D <= 7) ? ((D - 1) * 31) : (((D - 1) * 30) + 6)) + Math.floor(((C * 682) - 110) / 2816) + (C - 1) * 365 + Math.floor(B / 2820) * 1029983 + (y - 1)
    }
    function p(G) {
        var K, H, E, F, C, D, I, g, B, J;
        G = Math.floor(G) + 0.5;
        F = G - z(475, 1, 1);
        C = Math.floor(F / 1029983);
        D = t(F, 1029983);
        if (D == 1029982) {
            I = 2820
        } else {
            g = Math.floor(D / 366);
            B = t(D, 366);
            I = Math.floor(((2134 * g) + (2816 * B) + 2815) / 1028522) + g + 1
        }
        K = I + (2820 * C) + 474;
        if (K <= 0) {
            K--
        }
        J = (G - z(K, 1, 1)) + 1;
        H = (J <= 186) ? Math.ceil(J / 31) : Math.ceil((J - 6) / 30);
        E = (G - z(K, H, 1)) + 1;
        return new Array(K,H,E)
    }
}
if ($.datepicker != undefined && typeof CalendarHolidaysItems != "undefined") {
    $.datepicker.setDefaults({
        beforeShowDay: renderCalendarHolidaysCallback,
        onChangeMonthYear: function(g, c, a) {
            if ($.grep(CalendarHolidaysItems, function(d) {
                return d[0].indexOf(g) != -1
            }).length == 0 && CalendarHolidaysItemsEmpty.indexOf(g) == -1) {
                var b = {};
                var f = {};
                b.domain = $("#HFdomain").val();
                b.user_code = $("#HFUserCode").val();
                b.codeing = $("#hfcodeing").val();
                b.y = g;
                f.items = b;
                $.ajax({
                    type: "POST",
                    async: false,
                    url: "../WebServices/Calendar_service.asmx/get_calendar_filicityByYear",
                    data: JSON.stringify(f),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(d) {
                        if (d.d.length == 0) {
                            CalendarHolidaysItemsEmpty.push(g)
                        } else {
                            if ($.grep(CalendarHolidaysItems, function(j) {
                                return j[0].indexOf(g) != -1
                            }).length == 0) {
                                var e = CalendarHolidaysItems.concat(d.d);
                                CalendarHolidaysItems = e
                            }
                        }
                    }
                })
            }
        }
    });
    function renderCalendarHolidaysCallback(a) {
        var b = true;
        if ($(this).datepicker("option", "all") && $(this).datepicker("option", "all").regional != "") {
            if (a.getDay() == 5) {
                return [true, "holidayCalendar", ""]
            }
            b = false
        }
        if (CalendarHolidaysItems.length > 0) {
            var c = $.grep(CalendarHolidaysItems, function(d) {
                return d[0] === (b === false ? jQuery.datepicker.formatDate("yy/mm/dd", a) : jQuery.datepicker.formatDate("mm/dd/yy", a))
            });
            if (c.length == 0) {
                return [true, "", ""]
            } else {
                return [true, "holidayCalendar", c[1]]
            }
        } else {
            return [true, "", ""]
        }
    }
} else {
    $.datepicker.setDefaults({
        beforeShowDay: function(a) {
            if ($(this).datepicker("option", "all") && $(this).datepicker("option", "all").regional != "") {
                if (a.getDay() == 5) {
                    return [true, "holidayCalendar", ""]
                }
            }
            return [true, "", ""]
        },
        onChangeMonthYear: function(c, b, a) {}
    })
}
!function(b, a) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : (b = "undefined" != typeof globalThis ? globalThis : b || self).Cropper = a()
}(this, function() {
    function au(a) {
        return (au = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(b) {
            return typeof b
        }
        : function(b) {
            return b && "function" == typeof Symbol && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b
        }
        )(a)
    }
    function a0(f, c) {
        for (var d = 0; d < c.length; d++) {
            var b = c[d];
            b.enumerable = b.enumerable || !1,
            b.configurable = !0,
            "value"in b && (b.writable = !0),
            Object.defineProperty(f, b.key, b)
        }
    }
    function aI(c, f) {
        var d, b = Object.keys(c);
        return Object.getOwnPropertySymbols && (d = Object.getOwnPropertySymbols(c),
        f && (d = d.filter(function(a) {
            return Object.getOwnPropertyDescriptor(c, a).enumerable
        })),
        b.push.apply(b, d)),
        b
    }
    function ah(b) {
        for (var d = 1; d < arguments.length; d++) {
            var c = null != arguments[d] ? arguments[d] : {};
            d % 2 ? aI(Object(c), !0).forEach(function(g) {
                var a, f;
                a = b,
                g = c[f = g],
                f in a ? Object.defineProperty(a, f, {
                    value: g,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[f] = g
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(c)) : aI(Object(c)).forEach(function(a) {
                Object.defineProperty(b, a, Object.getOwnPropertyDescriptor(c, a))
            })
        }
        return b
    }
    function bm(a) {
        return function(b) {
            if (Array.isArray(b)) {
                return ac(b)
            }
        }(a) || function(b) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(b)) {
                return Array.from(b)
            }
        }(a) || function(d, b) {
            if (!d) {
                return
            }
            if ("string" == typeof d) {
                return ac(d, b)
            }
            var c = Object.prototype.toString.call(d).slice(8, -1);
            "Object" === c && d.constructor && (c = d.constructor.name);
            if ("Map" === c || "Set" === c) {
                return Array.from(d)
            }
            if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
                return ac(d, b)
            }
        }(a) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function ac(f, c) {
        (null == c || c > f.length) && (c = f.length);
        for (var d = 0, b = new Array(c); d < c; d++) {
            b[d] = f[d]
        }
        return b
    }
    var bl = "undefined" != typeof window && void 0 !== window.document
      , aE = bl ? window : {}
      , a4 = !(!bl || !aE.document.documentElement) && "ontouchstart"in aE.document.documentElement
      , bd = bl && "PointerEvent"in aE
      , ak = "cropper"
      , aP = "all"
      , a5 = "crop"
      , av = "move"
      , bx = "zoom"
      , aF = "e"
      , a1 = "w"
      , aT = "s"
      , bI = "n"
      , bF = "ne"
      , bB = "nw"
      , be = "se"
      , bi = "sw"
      , bh = "".concat(ak, "-crop")
      , ao = "".concat(ak, "-disabled")
      , ad = "".concat(ak, "-hidden")
      , aS = "".concat(ak, "-hide")
      , a8 = "".concat(ak, "-invisible")
      , aW = "".concat(ak, "-modal")
      , bp = "".concat(ak, "-move")
      , aB = "".concat(ak, "Action")
      , ay = "".concat(ak, "Preview")
      , bs = "crop"
      , bw = "move"
      , ag = "none"
      , bE = "crop"
      , bA = "cropend"
      , aX = "cropmove"
      , al = "cropstart"
      , ap = "dblclick"
      , aM = bd ? "pointerdown" : a4 ? "touchstart" : "mousedown"
      , aJ = bd ? "pointermove" : a4 ? "touchmove" : "mousemove"
      , a9 = bd ? "pointerup pointercancel" : a4 ? "touchend touchcancel" : "mouseup"
      , bq = "zoom"
      , bb = "image/jpeg"
      , aa = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/
      , bc = /^data:/
      , aQ = /^data:image\/jpeg;base64,/
      , bJ = /^img|canvas$/i
      , aC = {
        viewMode: 0,
        dragMode: bs,
        initialAspectRatio: NaN,
        aspectRatio: NaN,
        data: null,
        preview: "",
        responsive: !0,
        restore: !0,
        checkCrossOrigin: !0,
        checkOrientation: !0,
        modal: !0,
        guides: !0,
        center: !0,
        highlight: !0,
        background: !0,
        autoCrop: !0,
        autoCropArea: 0.8,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        wheelZoomRatio: 0.1,
        cropBoxMovable: !0,
        cropBoxResizable: !0,
        toggleDragModeOnDblclick: !0,
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: 200,
        minContainerHeight: 100,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
    }
      , bu = Number.isNaN || aE.isNaN;
    function az(a) {
        return "number" == typeof a && !bu(a)
    }
    var aN = function(a) {
        return 0 < a && a < 1 / 0
    };
    function ab(a) {
        return void 0 === a
    }
    function bn(a) {
        return "object" === au(a) && null !== a
    }
    var aw = Object.prototype.hasOwnProperty;
    function aK(c) {
        if (!bn(c)) {
            return !1
        }
        try {
            var a = c.constructor
              , b = a.prototype;
            return a && b && aw.call(b, "isPrototypeOf")
        } catch (c) {
            return !1
        }
    }
    function ae(a) {
        return "function" == typeof a
    }
    var a2 = Array.prototype.slice;
    function a6(a) {
        return Array.from ? Array.from(a) : a2.call(a)
    }
    function aG(c, b) {
        return c && ae(b) && (Array.isArray(c) || az(c.length) ? a6(c).forEach(function(d, a) {
            b.call(c, d, a, c)
        }) : bn(c) && Object.keys(c).forEach(function(a) {
            b.call(c, c[a], a, c)
        })),
        c
    }
    var bf = Object.assign || function(d) {
        for (var f = arguments.length, c = new Array(1 < f ? f - 1 : 0), b = 1; b < f; b++) {
            c[b - 1] = arguments[b]
        }
        return bn(d) && 0 < c.length && c.forEach(function(a) {
            bn(a) && Object.keys(a).forEach(function(e) {
                d[e] = a[e]
            })
        }),
        d
    }
      , bj = /\.\d*(?:0|9){12}\d*$/;
    function am(b, a) {
        a = 1 < arguments.length && void 0 !== a ? a : 100000000000;
        return bj.test(b) ? Math.round(b * a) / a : b
    }
    var aq = /^width|height|left|top|marginLeft|marginTop$/;
    function aU(c, a) {
        var b = c.style;
        aG(a, function(f, d) {
            aq.test(d) && az(f) && (f = "".concat(f, "px")),
            b[d] = f
        })
    }
    function ba(c, a) {
        var b;
        a && (az(c.length) ? aG(c, function(d) {
            ba(d, a)
        }) : c.classList ? c.classList.add(a) : (b = c.className.trim()) ? b.indexOf(a) < 0 && (c.className = "".concat(b, " ").concat(a)) : c.className = a)
    }
    function aY(b, a) {
        a && (az(b.length) ? aG(b, function(c) {
            aY(c, a)
        }) : b.classList ? b.classList.remove(a) : 0 <= b.className.indexOf(a) && (b.className = b.className.replace(a, "")))
    }
    function br(c, a, b) {
        a && (az(c.length) ? aG(c, function(d) {
            br(d, a, b)
        }) : (b ? ba : aY)(c, a))
    }
    var aD = /([a-z\d])([A-Z])/g;
    function aA(a) {
        return a.replace(aD, "$1-$2").toLowerCase()
    }
    function bv(b, a) {
        return bn(b[a]) ? b[a] : b.dataset ? b.dataset[a] : b.getAttribute("data-".concat(aA(a)))
    }
    function by(c, a, b) {
        bn(b) ? c[a] = b : c.dataset ? c.dataset[a] = b : c.setAttribute("data-".concat(aA(a)), b)
    }
    var ai, bG, bC = /\s\s*/, aZ = (bG = !1,
    bl && (ai = !1,
    af = function() {}
    ,
    aL = Object.defineProperty({}, "once", {
        get: function() {
            return bG = !0,
            ai
        },
        set: function(a) {
            ai = a
        }
    }),
    aE.addEventListener("test", af, aL),
    aE.removeEventListener("test", af, aL)),
    bG);
    function an(d, j, b, c) {
        var f = 3 < arguments.length && void 0 !== c ? c : {}
          , g = b;
        j.trim().split(bC).forEach(function(k) {
            var a;
            aZ || (a = d.listeners) && a[k] && a[k][b] && (g = a[k][b],
            delete a[k][b],
            0 === Object.keys(a[k]).length && delete a[k],
            0 === Object.keys(a).length && delete d.listeners),
            d.removeEventListener(k, g, f)
        })
    }
    function ar(c, g, b, a) {
        var d = 3 < arguments.length && void 0 !== a ? a : {}
          , f = b;
        g.trim().split(bC).forEach(function(e) {
            var k, j;
            d.once && !aZ && (k = c.listeners,
            f = function() {
                delete j[e][b],
                c.removeEventListener(e, f, d);
                for (var o = arguments.length, l = new Array(o), n = 0; n < o; n++) {
                    l[n] = arguments[n]
                }
                b.apply(c, l)
            }
            ,
            (j = void 0 === k ? {} : k)[e] || (j[e] = {}),
            j[e][b] && c.removeEventListener(e, j[e][b], d),
            j[e][b] = f,
            c.listeners = j),
            c.addEventListener(e, f, d)
        })
    }
    function aj(f, c, d) {
        var b;
        return ae(Event) && ae(CustomEvent) ? b = new CustomEvent(c,{
            detail: d,
            bubbles: !0,
            cancelable: !0
        }) : (b = document.createEvent("CustomEvent")).initCustomEvent(c, !0, !0, d),
        f.dispatchEvent(b)
    }
    function aR(a) {
        a = a.getBoundingClientRect();
        return {
            left: a.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: a.top + (window.pageYOffset - document.documentElement.clientTop)
        }
    }
    var a7 = aE.location
      , bo = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
    function ax(a) {
        a = a.match(bo);
        return null !== a && (a[1] !== a7.protocol || a[2] !== a7.hostname || a[3] !== a7.port)
    }
    function bz(b) {
        var a = "timestamp=".concat((new Date).getTime());
        return b + (-1 === b.indexOf("?") ? "?" : "&") + a
    }
    function aH(j) {
        var c = j.rotate
          , d = j.scaleX
          , b = j.scaleY
          , f = j.translateX
          , g = j.translateY
          , j = [];
        az(f) && 0 !== f && j.push("translateX(".concat(f, "px)")),
        az(g) && 0 !== g && j.push("translateY(".concat(g, "px)")),
        az(c) && 0 !== c && j.push("rotate(".concat(c, "deg)")),
        az(d) && 1 !== d && j.push("scaleX(".concat(d, ")")),
        az(b) && 1 !== b && j.push("scaleY(".concat(b, ")"));
        j = j.length ? j.join(" ") : "none";
        return {
            WebkitTransform: j,
            msTransform: j,
            transform: j
        }
    }
    function a3(f, c) {
        var d = f.pageX
          , b = f.pageY
          , f = {
            endX: d,
            endY: b
        };
        return c ? f : ah({
            startX: d,
            startY: b
        }, f)
    }
    function aV(k, c) {
        var f = k.aspectRatio
          , b = k.height
          , g = k.width
          , j = 1 < arguments.length && void 0 !== c ? c : "contain"
          , d = aN(g)
          , k = aN(b);
        return d && k ? (c = b * f,
        "contain" === j && g < c || "cover" === j && c < g ? b = g / f : g = b * f) : d ? b = g / f : k && (g = b * f),
        {
            width: g,
            height: b
        }
    }
    var bK = String.fromCharCode;
    var bH = /^data:.*,/;
    function bD(A) {
        var j, q, b, v, w, k, y = new DataView(A);
        try {
            if (255 === y.getUint8(0) && 216 === y.getUint8(1)) {
                for (var z = y.byteLength, f = 2; f + 1 < z; ) {
                    if (255 === y.getUint8(f) && 225 === y.getUint8(f + 1)) {
                        q = f;
                        break
                    }
                    f += 1
                }
            }
            if (q && (v = q + 10,
            "Exif" === function(p, d, l) {
                var c = "";
                l += d;
                for (var o = d; o < l; o += 1) {
                    c += bK(p.getUint8(o))
                }
                return c
            }(y, q + 4, 4) && (!(k = 18761 === (w = y.getUint16(v))) && 19789 !== w || 42 !== y.getUint16(v + 2, k) || 8 <= (w = y.getUint32(v + 4, k)) && (b = v + w))),
            b) {
                for (var g, u = y.getUint16(b, k), x = 0; x < u; x += 1) {
                    if (g = b + 12 * x + 2,
                    274 === y.getUint16(g, k)) {
                        g += 8,
                        j = y.getUint16(g, k),
                        y.setUint16(g, 1, k);
                        break
                    }
                }
            }
        } catch (A) {
            j = 1
        }
        return j
    }
    var bg = {
        render: function() {
            this.initContainer(),
            this.initCanvas(),
            this.initCropBox(),
            this.renderCanvas(),
            this.cropped && this.renderCropBox()
        },
        initContainer: function() {
            var g = this.element
              , c = this.options
              , d = this.container
              , b = this.cropper
              , f = Number(c.minContainerWidth)
              , c = Number(c.minContainerHeight);
            ba(b, ad),
            aY(g, ad);
            c = {
                width: Math.max(d.offsetWidth, 0 <= f ? f : 200),
                height: Math.max(d.offsetHeight, 0 <= c ? c : 100)
            };
            aU(b, {
                width: (this.containerData = c).width,
                height: c.height
            }),
            ba(g, ad),
            aY(b, ad)
        },
        initCanvas: function() {
            var k = this.containerData
              , c = this.imageData
              , f = this.options.viewMode
              , b = Math.abs(c.rotate) % 180 == 90
              , g = b ? c.naturalHeight : c.naturalWidth
              , j = b ? c.naturalWidth : c.naturalHeight
              , d = g / j
              , b = k.width
              , c = k.height;
            k.height * d > k.width ? 3 === f ? b = k.height * d : c = k.width / d : 3 === f ? c = k.width / d : b = k.height * d;
            c = {
                aspectRatio: d,
                naturalWidth: g,
                naturalHeight: j,
                width: b,
                height: c
            };
            this.canvasData = c,
            this.limited = 1 === f || 2 === f,
            this.limitCanvas(!0, !0),
            c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth),
            c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight),
            c.left = (k.width - c.width) / 2,
            c.top = (k.height - c.height) / 2,
            c.oldLeft = c.left,
            c.oldTop = c.top,
            this.initialCanvasData = bf({}, c)
        },
        limitCanvas: function(u, f) {
            var j, b = this.options, k = this.containerData, l = this.canvasData, g = this.cropBoxData, p = b.viewMode, q = l.aspectRatio, d = this.cropped && g;
            u && (u = Number(b.minCanvasWidth) || 0,
            j = Number(b.minCanvasHeight) || 0,
            1 < p ? (u = Math.max(u, k.width),
            j = Math.max(j, k.height),
            3 === p && (u < j * q ? u = j * q : j = u / q)) : 0 < p && (u ? u = Math.max(u, d ? g.width : 0) : j ? j = Math.max(j, d ? g.height : 0) : d && ((u = g.width) < (j = g.height) * q ? u = j * q : j = u / q)),
            u = (q = aV({
                aspectRatio: q,
                width: u,
                height: j
            })).width,
            j = q.height,
            l.minWidth = u,
            l.minHeight = j,
            l.maxWidth = 1 / 0,
            l.maxHeight = 1 / 0),
            f && ((d ? 0 : 1) < p ? (j = k.width - l.width,
            f = k.height - l.height,
            l.minLeft = Math.min(0, j),
            l.minTop = Math.min(0, f),
            l.maxLeft = Math.max(0, j),
            l.maxTop = Math.max(0, f),
            d && this.limited && (l.minLeft = Math.min(g.left, g.left + (g.width - l.width)),
            l.minTop = Math.min(g.top, g.top + (g.height - l.height)),
            l.maxLeft = g.left,
            l.maxTop = g.top,
            2 === p && (l.width >= k.width && (l.minLeft = Math.min(0, j),
            l.maxLeft = Math.max(0, j)),
            l.height >= k.height && (l.minTop = Math.min(0, f),
            l.maxTop = Math.max(0, f))))) : (l.minLeft = -l.width,
            l.minTop = -l.height,
            l.maxLeft = k.width,
            l.maxTop = k.height))
        },
        renderCanvas: function(j, c) {
            var d, b, f = this.canvasData, g = this.imageData;
            c && (d = (b = function(s) {
                var l = s.width
                  , p = s.height
                  , k = s.degree;
                if (90 == (k = Math.abs(k) % 180)) {
                    return {
                        width: p,
                        height: l
                    }
                }
                var q = k % 90 * Math.PI / 180
                  , r = Math.sin(q)
                  , s = Math.cos(q)
                  , q = l * s + p * r
                  , s = l * r + p * s;
                return 90 < k ? {
                    width: s,
                    height: q
                } : {
                    width: q,
                    height: s
                }
            }({
                width: g.naturalWidth * Math.abs(g.scaleX || 1),
                height: g.naturalHeight * Math.abs(g.scaleY || 1),
                degree: g.rotate || 0
            })).width,
            c = b.height,
            g = f.width * (d / f.naturalWidth),
            b = f.height * (c / f.naturalHeight),
            f.left -= (g - f.width) / 2,
            f.top -= (b - f.height) / 2,
            f.width = g,
            f.height = b,
            f.aspectRatio = d / c,
            f.naturalWidth = d,
            f.naturalHeight = c,
            this.limitCanvas(!0, !1)),
            (f.width > f.maxWidth || f.width < f.minWidth) && (f.left = f.oldLeft),
            (f.height > f.maxHeight || f.height < f.minHeight) && (f.top = f.oldTop),
            f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth),
            f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight),
            this.limitCanvas(!1, !0),
            f.left = Math.min(Math.max(f.left, f.minLeft), f.maxLeft),
            f.top = Math.min(Math.max(f.top, f.minTop), f.maxTop),
            f.oldLeft = f.left,
            f.oldTop = f.top,
            aU(this.canvas, bf({
                width: f.width,
                height: f.height
            }, aH({
                translateX: f.left,
                translateY: f.top
            }))),
            this.renderImage(j),
            this.cropped && this.limited && this.limitCropBox(!0, !0)
        },
        renderImage: function(g) {
            var c = this.canvasData
              , d = this.imageData
              , b = d.naturalWidth * (c.width / c.naturalWidth)
              , f = d.naturalHeight * (c.height / c.naturalHeight);
            bf(d, {
                width: b,
                height: f,
                left: (c.width - b) / 2,
                top: (c.height - f) / 2
            }),
            aU(this.image, bf({
                width: d.width,
                height: d.height
            }, aH(bf({
                translateX: d.left,
                translateY: d.top
            }, d)))),
            g && this.output()
        },
        initCropBox: function() {
            var f = this.options
              , c = this.canvasData
              , d = f.aspectRatio || f.initialAspectRatio
              , b = Number(f.autoCropArea) || 0.8
              , f = {
                width: c.width,
                height: c.height
            };
            d && (c.height * d > c.width ? f.height = f.width / d : f.width = f.height * d),
            this.cropBoxData = f,
            this.limitCropBox(!0, !0),
            f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth),
            f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight),
            f.width = Math.max(f.minWidth, f.width * b),
            f.height = Math.max(f.minHeight, f.height * b),
            f.left = c.left + (c.width - f.width) / 2,
            f.top = c.top + (c.height - f.height) / 2,
            f.oldLeft = f.left,
            f.oldTop = f.top,
            this.initialCropBoxData = bf({}, f)
        },
        limitCropBox: function(u, f) {
            var j, b, k = this.options, l = this.containerData, g = this.canvasData, p = this.cropBoxData, q = this.limited, d = k.aspectRatio;
            u && (j = Number(k.minCropBoxWidth) || 0,
            b = Number(k.minCropBoxHeight) || 0,
            u = q ? Math.min(l.width, g.width, g.width + g.left, l.width - g.left) : l.width,
            k = q ? Math.min(l.height, g.height, g.height + g.top, l.height - g.top) : l.height,
            j = Math.min(j, l.width),
            b = Math.min(b, l.height),
            d && (j && b ? j < b * d ? b = j / d : j = b * d : j ? b = j / d : b && (j = b * d),
            u < k * d ? k = u / d : u = k * d),
            p.minWidth = Math.min(j, u),
            p.minHeight = Math.min(b, k),
            p.maxWidth = u,
            p.maxHeight = k),
            f && (q ? (p.minLeft = Math.max(0, g.left),
            p.minTop = Math.max(0, g.top),
            p.maxLeft = Math.min(l.width, g.left + g.width) - p.width,
            p.maxTop = Math.min(l.height, g.top + g.height) - p.height) : (p.minLeft = 0,
            p.minTop = 0,
            p.maxLeft = l.width - p.width,
            p.maxTop = l.height - p.height))
        },
        renderCropBox: function() {
            var c = this.options
              , a = this.containerData
              , b = this.cropBoxData;
            (b.width > b.maxWidth || b.width < b.minWidth) && (b.left = b.oldLeft),
            (b.height > b.maxHeight || b.height < b.minHeight) && (b.top = b.oldTop),
            b.width = Math.min(Math.max(b.width, b.minWidth), b.maxWidth),
            b.height = Math.min(Math.max(b.height, b.minHeight), b.maxHeight),
            this.limitCropBox(!1, !0),
            b.left = Math.min(Math.max(b.left, b.minLeft), b.maxLeft),
            b.top = Math.min(Math.max(b.top, b.minTop), b.maxTop),
            b.oldLeft = b.left,
            b.oldTop = b.top,
            c.movable && c.cropBoxMovable && by(this.face, aB, b.width >= a.width && b.height >= a.height ? av : aP),
            aU(this.cropBox, bf({
                width: b.width,
                height: b.height
            }, aH({
                translateX: b.left,
                translateY: b.top
            }))),
            this.cropped && this.limited && this.limitCanvas(!0, !0),
            this.disabled || this.output()
        },
        output: function() {
            this.preview(),
            aj(this.element, bE, this.getData())
        }
    }
      , bk = {
        initPreview: function() {
            var j = this.element
              , d = this.crossOrigin
              , c = this.options.preview
              , b = d ? this.crossOriginUrl : this.url
              , f = j.alt || "The image to preview"
              , g = document.createElement("img");
            d && (g.crossOrigin = d),
            g.src = b,
            g.alt = f,
            this.viewBox.appendChild(g),
            this.viewBoxImage = g,
            c && ("string" == typeof (g = c) ? g = j.ownerDocument.querySelectorAll(c) : c.querySelector && (g = [c]),
            aG(this.previews = g, function(k) {
                var a = document.createElement("img");
                by(k, ay, {
                    width: k.offsetWidth,
                    height: k.offsetHeight,
                    html: k.innerHTML
                }),
                d && (a.crossOrigin = d),
                a.src = b,
                a.alt = f,
                a.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',
                k.innerHTML = "",
                k.appendChild(a)
            }))
        },
        resetPreview: function() {
            aG(this.previews, function(b) {
                var a = bv(b, ay);
                aU(b, {
                    width: a.width,
                    height: a.height
                }),
                b.innerHTML = a.html,
                function(c, d) {
                    if (bn(c[d])) {
                        try {
                            delete c[d]
                        } catch (f) {
                            c[d] = void 0
                        }
                    } else {
                        if (c.dataset) {
                            try {
                                delete c.dataset[d]
                            } catch (f) {
                                c.dataset[d] = void 0
                            }
                        } else {
                            c.removeAttribute("data-".concat(aA(d)))
                        }
                    }
                }(b, ay)
            })
        },
        preview: function() {
            var g = this.imageData
              , q = this.canvasData
              , f = this.cropBoxData
              , n = f.width
              , o = f.height
              , a = g.width
              , b = g.height
              , j = f.left - q.left - g.left
              , k = f.top - q.top - g.top;
            this.cropped && !this.disabled && (aU(this.viewBoxImage, bf({
                width: a,
                height: b
            }, aH(bf({
                translateX: -j,
                translateY: -k
            }, g)))),
            aG(this.previews, function(s) {
                var d = bv(s, ay)
                  , l = d.width
                  , c = d.height
                  , p = l
                  , r = c
                  , d = 1;
                n && (r = o * (d = l / n)),
                o && c < r && (p = n * (d = c / o),
                r = c),
                aU(s, {
                    width: p,
                    height: r
                }),
                aU(s.getElementsByTagName("img")[0], bf({
                    width: a * d,
                    height: b * d
                }, aH(bf({
                    translateX: -j * d,
                    translateY: -k * d
                }, g))))
            }))
        }
    }
      , bd = {
        bind: function() {
            var c = this.element
              , a = this.options
              , b = this.cropper;
            ae(a.cropstart) && ar(c, al, a.cropstart),
            ae(a.cropmove) && ar(c, aX, a.cropmove),
            ae(a.cropend) && ar(c, bA, a.cropend),
            ae(a.crop) && ar(c, bE, a.crop),
            ae(a.zoom) && ar(c, bq, a.zoom),
            ar(b, aM, this.onCropStart = this.cropStart.bind(this)),
            a.zoomable && a.zoomOnWheel && ar(b, "wheel", this.onWheel = this.wheel.bind(this), {
                passive: !1,
                capture: !0
            }),
            a.toggleDragModeOnDblclick && ar(b, ap, this.onDblclick = this.dblclick.bind(this)),
            ar(c.ownerDocument, aJ, this.onCropMove = this.cropMove.bind(this)),
            ar(c.ownerDocument, a9, this.onCropEnd = this.cropEnd.bind(this)),
            a.responsive && ar(window, "resize", this.onResize = this.resize.bind(this))
        },
        unbind: function() {
            var c = this.element
              , a = this.options
              , b = this.cropper;
            ae(a.cropstart) && an(c, al, a.cropstart),
            ae(a.cropmove) && an(c, aX, a.cropmove),
            ae(a.cropend) && an(c, bA, a.cropend),
            ae(a.crop) && an(c, bE, a.crop),
            ae(a.zoom) && an(c, bq, a.zoom),
            an(b, aM, this.onCropStart),
            a.zoomable && a.zoomOnWheel && an(b, "wheel", this.onWheel, {
                passive: !1,
                capture: !0
            }),
            a.toggleDragModeOnDblclick && an(b, ap, this.onDblclick),
            an(c.ownerDocument, aJ, this.onCropMove),
            an(c.ownerDocument, a9, this.onCropEnd),
            a.responsive && an(window, "resize", this.onResize)
        }
    }
      , a4 = {
        resize: function() {
            var j, c, d, b, f, g;
            this.disabled || (j = this.options,
            c = this.container,
            d = this.containerData,
            1 == (b = c.offsetWidth / d.width) && c.offsetHeight === d.height || (j.restore && (f = this.getCanvasData(),
            g = this.getCropBoxData()),
            this.render(),
            j.restore && (this.setCanvasData(aG(f, function(k, a) {
                f[a] = k * b
            })),
            this.setCropBoxData(aG(g, function(k, a) {
                g[a] = k * b
            })))))
        },
        dblclick: function() {
            var b, a;
            this.disabled || this.options.dragMode === ag || this.setDragMode((b = this.dragBox,
            a = bh,
            (b.classList ? b.classList.contains(a) : -1 < b.className.indexOf(a)) ? bw : bs))
        },
        wheel: function(f) {
            var c = this
              , d = Number(this.options.wheelZoomRatio) || 0.1
              , b = 1;
            this.disabled || (f.preventDefault(),
            this.wheeling || (this.wheeling = !0,
            setTimeout(function() {
                c.wheeling = !1
            }, 50),
            f.deltaY ? b = 0 < f.deltaY ? 1 : -1 : f.wheelDelta ? b = -f.wheelDelta / 120 : f.detail && (b = 0 < f.detail ? 1 : -1),
            this.zoom(-b * d, f)))
        },
        cropStart: function(f) {
            var c, d = f.buttons, b = f.button;
            this.disabled || ("mousedown" === f.type || "pointerdown" === f.type && "mouse" === f.pointerType) && (az(d) && 1 !== d || az(b) && 0 !== b || f.ctrlKey) || (b = this.options,
            c = this.pointers,
            f.changedTouches ? aG(f.changedTouches, function(a) {
                c[a.identifier] = a3(a)
            }) : c[f.pointerId || 0] = a3(f),
            b = 1 < Object.keys(c).length && b.zoomable && b.zoomOnTouch ? bx : bv(f.target, aB),
            aa.test(b) && !1 !== aj(this.element, al, {
                originalEvent: f,
                action: b
            }) && (f.preventDefault(),
            this.action = b,
            this.cropping = !1,
            b === a5 && (this.cropping = !0,
            ba(this.dragBox, aW))))
        },
        cropMove: function(c) {
            var a, b = this.action;
            !this.disabled && b && (a = this.pointers,
            c.preventDefault(),
            !1 !== aj(this.element, aX, {
                originalEvent: c,
                action: b
            }) && (c.changedTouches ? aG(c.changedTouches, function(d) {
                bf(a[d.identifier] || {}, a3(d, !0))
            }) : bf(a[c.pointerId || 0] || {}, a3(c, !0)),
            this.change(c)))
        },
        cropEnd: function(c) {
            var a, b;
            this.disabled || (a = this.action,
            b = this.pointers,
            c.changedTouches ? aG(c.changedTouches, function(d) {
                delete b[d.identifier]
            }) : delete b[c.pointerId || 0],
            a && (c.preventDefault(),
            Object.keys(b).length || (this.action = ""),
            this.cropping && (this.cropping = !1,
            br(this.dragBox, aW, this.cropped && this.options.modal)),
            aj(this.element, bA, {
                originalEvent: c,
                action: a
            })))
        }
    }
      , bl = {
        change: function(T) {
            var E = this.options
              , I = this.canvasData
              , j = this.containerData
              , O = this.cropBoxData
              , P = this.pointers
              , H = this.action
              , R = E.aspectRatio
              , S = O.left
              , q = O.top
              , A = O.width
              , J = O.height
              , Q = S + A
              , K = q + J
              , U = 0
              , G = 0
              , F = j.width
              , V = j.height
              , W = !0;
            !R && T.shiftKey && (R = A && J ? A / J : 1),
            this.limited && (U = O.minLeft,
            G = O.minTop,
            F = U + Math.min(j.width, I.width, I.left + I.width),
            V = G + Math.min(j.height, I.height, I.top + I.height));
            function k(a) {
                switch (a) {
                case aF:
                    Q + B.x > F && (B.x = F - Q);
                    break;
                case a1:
                    S + B.x < U && (B.x = U - S);
                    break;
                case bI:
                    q + B.y < G && (B.y = G - q);
                    break;
                case aT:
                    K + B.y > V && (B.y = V - K)
                }
            }
            var Y, X, N, z = P[Object.keys(P)[0]], B = {
                x: z.endX - z.startX,
                y: z.endY - z.startY
            };
            switch (H) {
            case aP:
                S += B.x,
                q += B.y;
                break;
            case aF:
                if (0 <= B.x && (F <= Q || R && (q <= G || V <= K))) {
                    W = !1;
                    break
                }
                k(aF),
                (A += B.x) < 0 && (H = a1,
                S -= A = -A),
                R && (J = A / R,
                q += (O.height - J) / 2);
                break;
            case bI:
                if (B.y <= 0 && (q <= G || R && (S <= U || F <= Q))) {
                    W = !1;
                    break
                }
                k(bI),
                J -= B.y,
                q += B.y,
                J < 0 && (H = aT,
                q -= J = -J),
                R && (A = J * R,
                S += (O.width - A) / 2);
                break;
            case a1:
                if (B.x <= 0 && (S <= U || R && (q <= G || V <= K))) {
                    W = !1;
                    break
                }
                k(a1),
                A -= B.x,
                S += B.x,
                A < 0 && (H = aF,
                S -= A = -A),
                R && (J = A / R,
                q += (O.height - J) / 2);
                break;
            case aT:
                if (0 <= B.y && (V <= K || R && (S <= U || F <= Q))) {
                    W = !1;
                    break
                }
                k(aT),
                (J += B.y) < 0 && (H = bI,
                q -= J = -J),
                R && (A = J * R,
                S += (O.width - A) / 2);
                break;
            case bF:
                if (R) {
                    if (B.y <= 0 && (q <= G || F <= Q)) {
                        W = !1;
                        break
                    }
                    k(bI),
                    J -= B.y,
                    q += B.y,
                    A = J * R
                } else {
                    k(bI),
                    k(aF),
                    !(0 <= B.x) || Q < F ? A += B.x : B.y <= 0 && q <= G && (W = !1),
                    B.y <= 0 && !(G < q) || (J -= B.y,
                    q += B.y)
                }
                A < 0 && J < 0 ? (H = bi,
                q -= J = -J,
                S -= A = -A) : A < 0 ? (H = bB,
                S -= A = -A) : J < 0 && (H = be,
                q -= J = -J);
                break;
            case bB:
                if (R) {
                    if (B.y <= 0 && (q <= G || S <= U)) {
                        W = !1;
                        break
                    }
                    k(bI),
                    J -= B.y,
                    q += B.y,
                    A = J * R,
                    S += O.width - A
                } else {
                    k(bI),
                    k(a1),
                    !(B.x <= 0) || U < S ? (A -= B.x,
                    S += B.x) : B.y <= 0 && q <= G && (W = !1),
                    B.y <= 0 && !(G < q) || (J -= B.y,
                    q += B.y)
                }
                A < 0 && J < 0 ? (H = be,
                q -= J = -J,
                S -= A = -A) : A < 0 ? (H = bF,
                S -= A = -A) : J < 0 && (H = bi,
                q -= J = -J);
                break;
            case bi:
                if (R) {
                    if (B.x <= 0 && (S <= U || V <= K)) {
                        W = !1;
                        break
                    }
                    k(a1),
                    A -= B.x,
                    S += B.x,
                    J = A / R
                } else {
                    k(aT),
                    k(a1),
                    !(B.x <= 0) || U < S ? (A -= B.x,
                    S += B.x) : 0 <= B.y && V <= K && (W = !1),
                    0 <= B.y && !(K < V) || (J += B.y)
                }
                A < 0 && J < 0 ? (H = bF,
                q -= J = -J,
                S -= A = -A) : A < 0 ? (H = be,
                S -= A = -A) : J < 0 && (H = bB,
                q -= J = -J);
                break;
            case be:
                if (R) {
                    if (0 <= B.x && (F <= Q || V <= K)) {
                        W = !1;
                        break
                    }
                    k(aF),
                    J = (A += B.x) / R
                } else {
                    k(aT),
                    k(aF),
                    !(0 <= B.x) || Q < F ? A += B.x : 0 <= B.y && V <= K && (W = !1),
                    0 <= B.y && !(K < V) || (J += B.y)
                }
                A < 0 && J < 0 ? (H = bB,
                q -= J = -J,
                S -= A = -A) : A < 0 ? (H = bi,
                S -= A = -A) : J < 0 && (H = bF,
                q -= J = -J);
                break;
            case av:
                this.move(B.x, B.y),
                W = !1;
                break;
            case bx:
                this.zoom((X = ah({}, Y = P),
                N = 0,
                aG(Y, function(a, b) {
                    delete X[b],
                    aG(X, function(g) {
                        var d = Math.abs(a.startX - g.startX)
                          , f = Math.abs(a.startY - g.startY)
                          , c = Math.abs(a.endX - g.endX)
                          , g = Math.abs(a.endY - g.endY)
                          , f = Math.sqrt(d * d + f * f)
                          , f = (Math.sqrt(c * c + g * g) - f) / f;
                        Math.abs(f) > Math.abs(N) && (N = f)
                    })
                }),
                N), T),
                W = !1;
                break;
            case a5:
                if (!B.x || !B.y) {
                    W = !1;
                    break
                }
                Y = aR(this.cropper),
                S = z.startX - Y.left,
                q = z.startY - Y.top,
                A = O.minWidth,
                J = O.minHeight,
                0 < B.x ? H = 0 < B.y ? be : bF : B.x < 0 && (S -= A,
                H = 0 < B.y ? bi : bB),
                B.y < 0 && (q -= J),
                this.cropped || (aY(this.cropBox, ad),
                this.cropped = !0,
                this.limited && this.limitCropBox(!0, !0))
            }
            W && (O.width = A,
            O.height = J,
            O.left = S,
            O.top = q,
            this.action = H,
            this.renderCropBox()),
            aG(P, function(a) {
                a.startX = a.endX,
                a.startY = a.endY
            })
        }
    }
      , af = {
        crop: function() {
            return !this.ready || this.cropped || this.disabled || (this.cropped = !0,
            this.limitCropBox(!0, !0),
            this.options.modal && ba(this.dragBox, aW),
            aY(this.cropBox, ad),
            this.setCropBoxData(this.initialCropBoxData)),
            this
        },
        reset: function() {
            return this.ready && !this.disabled && (this.imageData = bf({}, this.initialImageData),
            this.canvasData = bf({}, this.initialCanvasData),
            this.cropBoxData = bf({}, this.initialCropBoxData),
            this.renderCanvas(),
            this.cropped && this.renderCropBox()),
            this
        },
        clear: function() {
            return this.cropped && !this.disabled && (bf(this.cropBoxData, {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            }),
            this.cropped = !1,
            this.renderCropBox(),
            this.limitCanvas(!0, !0),
            this.renderCanvas(),
            aY(this.dragBox, aW),
            ba(this.cropBox, ad)),
            this
        },
        replace: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            return !this.disabled && a && (this.isImg && (this.element.src = a),
            b ? (this.url = a,
            this.image.src = a,
            this.ready && (this.viewBoxImage.src = a,
            aG(this.previews, function(c) {
                c.getElementsByTagName("img")[0].src = a
            }))) : (this.isImg && (this.replaced = !0),
            this.options.data = null,
            this.uncreate(),
            this.load(a))),
            this
        },
        enable: function() {
            return this.ready && this.disabled && (this.disabled = !1,
            aY(this.cropper, ao)),
            this
        },
        disable: function() {
            return this.ready && !this.disabled && (this.disabled = !0,
            ba(this.cropper, ao)),
            this
        },
        destroy: function() {
            var a = this.element;
            return a[ak] && (a[ak] = void 0,
            this.isImg && this.replaced && (a.src = this.originalUrl),
            this.uncreate()),
            this
        },
        move: function(f) {
            var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f
              , d = this.canvasData
              , b = d.left
              , d = d.top;
            return this.moveTo(ab(f) ? f : b + Number(f), ab(c) ? c : d + Number(c))
        },
        moveTo: function(f) {
            var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f
              , d = this.canvasData
              , b = !1;
            return f = Number(f),
            c = Number(c),
            this.ready && !this.disabled && this.options.movable && (az(f) && (d.left = f,
            b = !0),
            az(c) && (d.top = c,
            b = !0),
            b && this.renderCanvas(!0)),
            this
        },
        zoom: function(c, a) {
            var b = this.canvasData;
            return c = (c = Number(c)) < 0 ? 1 / (1 - c) : 1 + c,
            this.zoomTo(b.width * c / b.naturalWidth, null, a)
        },
        zoomTo: function(y, j, p) {
            var b, u, v, k = this.options, w = this.canvasData, x = w.width, f = w.height, g = w.naturalWidth, q = w.naturalHeight;
            if (0 <= (y = Number(y)) && this.ready && !this.disabled && k.zoomable) {
                k = g * y,
                q = q * y;
                if (!1 === aj(this.element, bq, {
                    ratio: y,
                    oldRatio: x / g,
                    originalEvent: p
                })) {
                    return this
                }
                p ? (y = this.pointers,
                g = aR(this.cropper),
                p = y && Object.keys(y).length ? (v = u = b = 0,
                aG(y, function(c) {
                    var a = c.startX
                      , c = c.startY;
                    b += a,
                    u += c,
                    v += 1
                }),
                {
                    pageX: b /= v,
                    pageY: u /= v
                }) : {
                    pageX: p.pageX,
                    pageY: p.pageY
                },
                w.left -= (k - x) * ((p.pageX - g.left - w.left) / x),
                w.top -= (q - f) * ((p.pageY - g.top - w.top) / f)) : aK(j) && az(j.x) && az(j.y) ? (w.left -= (k - x) * ((j.x - w.left) / x),
                w.top -= (q - f) * ((j.y - w.top) / f)) : (w.left -= (k - x) / 2,
                w.top -= (q - f) / 2),
                w.width = k,
                w.height = q,
                this.renderCanvas(!0)
            }
            return this
        },
        rotate: function(a) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(a))
        },
        rotateTo: function(a) {
            return az(a = Number(a)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = a % 360,
            this.renderCanvas(!0, !0)),
            this
        },
        scaleX: function(b) {
            var a = this.imageData.scaleY;
            return this.scale(b, az(a) ? a : 1)
        },
        scaleY: function(b) {
            var a = this.imageData.scaleX;
            return this.scale(az(a) ? a : 1, b)
        },
        scale: function(f) {
            var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f
              , d = this.imageData
              , b = !1;
            return f = Number(f),
            c = Number(c),
            this.ready && !this.disabled && this.options.scalable && (az(f) && (d.scaleX = f,
            b = !0),
            az(c) && (d.scaleY = c,
            b = !0),
            b && this.renderCanvas(!0, !0)),
            this
        },
        getData: function() {
            var f, b, k = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], c = this.options, g = this.imageData, j = this.canvasData, d = this.cropBoxData;
            return this.ready && this.cropped ? (f = {
                x: d.left - j.left,
                y: d.top - j.top,
                width: d.width,
                height: d.height
            },
            b = g.width / g.naturalWidth,
            aG(f, function(l, a) {
                f[a] = l / b
            }),
            k && (d = Math.round(f.y + f.height),
            k = Math.round(f.x + f.width),
            f.x = Math.round(f.x),
            f.y = Math.round(f.y),
            f.width = k - f.x,
            f.height = d - f.y)) : f = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            c.rotatable && (f.rotate = g.rotate || 0),
            c.scalable && (f.scaleX = g.scaleX || 1,
            f.scaleY = g.scaleY || 1),
            f
        },
        setData: function(j) {
            var c, d = this.options, b = this.imageData, f = this.canvasData, g = {};
            return this.ready && !this.disabled && aK(j) && (c = !1,
            d.rotatable && az(j.rotate) && j.rotate !== b.rotate && (b.rotate = j.rotate,
            c = !0),
            d.scalable && (az(j.scaleX) && j.scaleX !== b.scaleX && (b.scaleX = j.scaleX,
            c = !0),
            az(j.scaleY) && j.scaleY !== b.scaleY && (b.scaleY = j.scaleY,
            c = !0)),
            c && this.renderCanvas(!0, !0),
            b = b.width / b.naturalWidth,
            az(j.x) && (g.left = j.x * b + f.left),
            az(j.y) && (g.top = j.y * b + f.top),
            az(j.width) && (g.width = j.width * b),
            az(j.height) && (g.height = j.height * b),
            this.setCropBoxData(g)),
            this
        },
        getContainerData: function() {
            return this.ready ? bf({}, this.containerData) : {}
        },
        getImageData: function() {
            return this.sized ? bf({}, this.imageData) : {}
        },
        getCanvasData: function() {
            var a = this.canvasData
              , b = {};
            return this.ready && aG(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(c) {
                b[c] = a[c]
            }),
            b
        },
        setCanvasData: function(c) {
            var a = this.canvasData
              , b = a.aspectRatio;
            return this.ready && !this.disabled && aK(c) && (az(c.left) && (a.left = c.left),
            az(c.top) && (a.top = c.top),
            az(c.width) ? (a.width = c.width,
            a.height = c.width / b) : az(c.height) && (a.height = c.height,
            a.width = c.height * b),
            this.renderCanvas(!0)),
            this
        },
        getCropBoxData: function() {
            var b, a = this.cropBoxData;
            return (b = this.ready && this.cropped ? {
                left: a.left,
                top: a.top,
                width: a.width,
                height: a.height
            } : b) || {}
        },
        setCropBoxData: function(g) {
            var c, d, b = this.cropBoxData, f = this.options.aspectRatio;
            return this.ready && this.cropped && !this.disabled && aK(g) && (az(g.left) && (b.left = g.left),
            az(g.top) && (b.top = g.top),
            az(g.width) && g.width !== b.width && (c = !0,
            b.width = g.width),
            az(g.height) && g.height !== b.height && (d = !0,
            b.height = g.height),
            f && (c ? b.height = b.width / f : d && (b.width = b.height * f)),
            this.renderCropBox()),
            this
        },
        getCroppedCanvas: function() {
            var Z = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) {
                return null
            }
            var H, N, j, T, U, K, X, Y, A, F, Q, W, R, at = this.canvasData, K = (bL = this.image,
            H = this.imageData,
            N = at,
            bN = Z,
            j = H.aspectRatio,
            T = H.naturalWidth,
            q = H.naturalHeight,
            U = void 0 === (R = H.rotate) ? 0 : R,
            K = void 0 === (bt = H.scaleX) ? 1 : bt,
            J = void 0 === (Q = H.scaleY) ? 1 : Q,
            X = N.aspectRatio,
            Y = N.naturalWidth,
            A = N.naturalHeight,
            F = void 0 === (W = bN.fillColor) ? "transparent" : W,
            bM = bN.imageSmoothingEnabled,
            I = void 0 === bM || bM,
            bt = void 0 === (R = bN.imageSmoothingQuality) ? "low" : R,
            H = bN.maxWidth,
            Q = void 0 === H ? 1 / 0 : H,
            N = bN.maxHeight,
            W = void 0 === N ? 1 / 0 : N,
            R = void 0 === (bM = bN.minWidth) ? 0 : bM,
            H = bN.minHeight,
            N = void 0 === H ? 0 : H,
            bN = (bM = document.createElement("canvas")).getContext("2d"),
            H = aV({
                aspectRatio: X,
                width: Q,
                height: W
            }),
            X = aV({
                aspectRatio: X,
                width: R,
                height: N
            }, "cover"),
            Y = Math.min(H.width, Math.max(X.width, Y)),
            A = Math.min(H.height, Math.max(X.height, A)),
            W = aV({
                aspectRatio: j,
                width: Q,
                height: W
            }),
            N = aV({
                aspectRatio: j,
                width: R,
                height: N
            }, "cover"),
            T = Math.min(W.width, Math.max(N.width, T)),
            q = Math.min(W.height, Math.max(N.height, q)),
            q = [-T / 2, -q / 2, T, q],
            bM.width = am(Y),
            bM.height = am(A),
            bN.fillStyle = F,
            bN.fillRect(0, 0, Y, A),
            bN.save(),
            bN.translate(Y / 2, A / 2),
            bN.rotate(U * Math.PI / 180),
            bN.scale(K, J),
            bN.imageSmoothingEnabled = I,
            bN.imageSmoothingQuality = bt,
            bN.drawImage.apply(bN, [bL].concat(bm(q.map(function(a) {
                return Math.floor(am(a))
            })))),
            bN.restore(),
            bM);
            if (!this.cropped) {
                return K
            }
            var J = this.getData()
              , I = J.x
              , bt = J.y
              , bL = J.width
              , q = J.height
              , bN = K.width / Math.floor(at.naturalWidth);
            1 != bN && (I *= bN,
            bt *= bN,
            bL *= bN,
            q *= bN);
            var bM = bL / q
              , J = aV({
                aspectRatio: bM,
                width: Z.maxWidth || 1 / 0,
                height: Z.maxHeight || 1 / 0
            })
              , at = aV({
                aspectRatio: bM,
                width: Z.minWidth || 0,
                height: Z.minHeight || 0
            }, "cover")
              , bM = aV({
                aspectRatio: bM,
                width: Z.width || (1 != bN ? K.width : bL),
                height: Z.height || (1 != bN ? K.height : q)
            })
              , bN = bM.width
              , bM = bM.height
              , bN = Math.min(J.width, Math.max(at.width, bN))
              , bM = Math.min(J.height, Math.max(at.height, bM))
              , J = document.createElement("canvas")
              , at = J.getContext("2d");
            J.width = am(bN),
            J.height = am(bM),
            at.fillStyle = Z.fillColor || "transparent",
            at.fillRect(0, 0, bN, bM);
            bM = Z.imageSmoothingEnabled,
            bM = void 0 === bM || bM,
            Z = Z.imageSmoothingQuality;
            at.imageSmoothingEnabled = bM,
            Z && (at.imageSmoothingQuality = Z);
            var S, E, G, z, P, bM = K.width, Z = K.height, I = I, bt = bt;
            I <= -bL || bM < I ? z = E = S = I = 0 : I <= 0 ? (E = -I,
            I = 0,
            z = S = Math.min(bM, bL + I)) : I <= bM && (E = 0,
            z = S = Math.min(bL, bM - I)),
            S <= 0 || bt <= -q || Z < bt ? P = G = V = bt = 0 : bt <= 0 ? (G = -bt,
            bt = 0,
            P = V = Math.min(Z, q + bt)) : bt <= Z && (G = 0,
            P = V = Math.min(q, Z - bt));
            var V = [I, bt, S, V];
            return 0 < z && 0 < P && (bL = bN / bL,
            V.push(E * bL, G * bL, z * bL, P * bL)),
            at.drawImage.apply(at, [K].concat(bm(V.map(function(a) {
                return Math.floor(am(a))
            })))),
            J
        },
        setAspectRatio: function(b) {
            var a = this.options;
            return this.disabled || ab(b) || (a.aspectRatio = Math.max(0, b) || NaN,
            this.ready && (this.initCropBox(),
            this.cropped && this.renderCropBox())),
            this
        },
        setDragMode: function(j) {
            var c, d, b = this.options, f = this.dragBox, g = this.face;
            return this.ready && !this.disabled && (c = j === bs,
            d = b.movable && j === bw,
            j = c || d ? j : ag,
            b.dragMode = j,
            by(f, aB, j),
            br(f, bh, c),
            br(f, bp, d),
            b.cropBoxMovable || (by(g, aB, j),
            br(g, bh, c),
            br(g, bp, d))),
            this
        }
    }
      , aO = aE.Cropper
      , aL = function() {
        function d(g) {
            var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!function(e) {
                if (!(e instanceof d)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }(this),
            !g || !bJ.test(g.tagName)) {
                throw new Error("The first argument is required and must be an <img> or <canvas> element.")
            }
            this.element = g,
            this.options = bf({}, aC, aK(a) && a),
            this.cropped = !1,
            this.disabled = !1,
            this.pointers = {},
            this.ready = !1,
            this.reloading = !1,
            this.replaced = !1,
            this.sized = !1,
            this.sizing = !1,
            this.init()
        }
        var f, c, b;
        return f = d,
        b = [{
            key: "noConflict",
            value: function() {
                return window.Cropper = aO,
                d
            }
        }, {
            key: "setDefaults",
            value: function(a) {
                bf(aC, aK(a) && a)
            }
        }],
        (c = [{
            key: "init",
            value: function() {
                var j, a = this.element, g = a.tagName.toLowerCase();
                if (!a[ak]) {
                    if (a[ak] = this,
                    "img" === g) {
                        if (this.isImg = !0,
                        j = a.getAttribute("src") || "",
                        !(this.originalUrl = j)) {
                            return
                        }
                        j = a.src
                    } else {
                        "canvas" === g && window.HTMLCanvasElement && (j = a.toDataURL())
                    }
                    this.load(j)
                }
            }
        }, {
            key: "load",
            value: function(u) {
                var j, l, g, p, q, k, s = this;
                u && (this.url = u,
                this.imageData = {},
                j = this.element,
                (l = this.options).rotatable || l.scalable || (l.checkOrientation = !1),
                l.checkOrientation && window.ArrayBuffer ? bc.test(u) ? aQ.test(u) ? this.read((k = (k = u).replace(bH, ""),
                g = atob(k),
                k = new ArrayBuffer(g.length),
                aG(p = new Uint8Array(k), function(n, a) {
                    p[a] = g.charCodeAt(a)
                }),
                k)) : this.clone() : (q = new XMLHttpRequest,
                k = this.clone.bind(this),
                this.reloading = !0,
                (this.xhr = q).onabort = k,
                q.onerror = k,
                q.ontimeout = k,
                q.onprogress = function() {
                    q.getResponseHeader("content-type") !== bb && q.abort()
                }
                ,
                q.onload = function() {
                    s.read(q.response)
                }
                ,
                q.onloadend = function() {
                    s.reloading = !1,
                    s.xhr = null
                }
                ,
                l.checkCrossOrigin && ax(u) && j.crossOrigin && (u = bz(u)),
                q.open("GET", u, !0),
                q.responseType = "arraybuffer",
                q.withCredentials = "use-credentials" === j.crossOrigin,
                q.send()) : this.clone())
            }
        }, {
            key: "read",
            value: function(r) {
                var j = this.options
                  , l = this.imageData
                  , g = bD(r)
                  , p = 0
                  , q = 1
                  , k = 1;
                1 < g && (this.url = function(u, o) {
                    for (var s = [], n = new Uint8Array(u); 0 < n.length; ) {
                        s.push(bK.apply(null, a6(n.subarray(0, 8192)))),
                        n = n.subarray(8192)
                    }
                    return "data:".concat(o, ";base64,").concat(btoa(s.join("")))
                }(r, bb),
                p = (g = function(u) {
                    var o = 0
                      , s = 1
                      , n = 1;
                    switch (u) {
                    case 2:
                        s = -1;
                        break;
                    case 3:
                        o = -180;
                        break;
                    case 4:
                        n = -1;
                        break;
                    case 5:
                        o = 90,
                        n = -1;
                        break;
                    case 6:
                        o = 90;
                        break;
                    case 7:
                        o = 90,
                        s = -1;
                        break;
                    case 8:
                        o = -90
                    }
                    return {
                        rotate: o,
                        scaleX: s,
                        scaleY: n
                    }
                }(g)).rotate,
                q = g.scaleX,
                k = g.scaleY),
                j.rotatable && (l.rotate = p),
                j.scalable && (l.scaleX = q,
                l.scaleY = k),
                this.clone()
            }
        }, {
            key: "clone",
            value: function() {
                var o = this.element
                  , j = this.url
                  , k = o.crossOrigin
                  , g = j;
                this.options.checkCrossOrigin && ax(j) && (k = k || "anonymous",
                g = bz(j)),
                this.crossOrigin = k,
                this.crossOriginUrl = g;
                var l = document.createElement("img");
                k && (l.crossOrigin = k),
                l.src = g || j,
                l.alt = o.alt || "The image to crop",
                (this.image = l).onload = this.start.bind(this),
                l.onerror = this.stop.bind(this),
                ba(l, aS),
                o.parentNode.insertBefore(l, o.nextSibling)
            }
        }, {
            key: "start",
            value: function() {
                var k = this
                  , q = this.image;
                q.onload = null,
                q.onerror = null,
                this.sizing = !0;
                function j(n, a) {
                    bf(k.imageData, {
                        naturalWidth: n,
                        naturalHeight: a,
                        aspectRatio: n / a
                    }),
                    k.initialImageData = bf({}, k.imageData),
                    k.sizing = !1,
                    k.sized = !0,
                    k.build()
                }
                var g, l, p = aE.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(aE.navigator.userAgent);
                !q.naturalWidth || p ? (g = document.createElement("img"),
                l = document.body || document.documentElement,
                (this.sizingImage = g).onload = function() {
                    j(g.width, g.height),
                    p || l.removeChild(g)
                }
                ,
                g.src = q.src,
                p || (g.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",
                l.appendChild(g))) : j(q.naturalWidth, q.naturalHeight)
            }
        }, {
            key: "stop",
            value: function() {
                var a = this.image;
                a.onload = null,
                a.onerror = null,
                a.parentNode.removeChild(a),
                this.image = null
            }
        }, {
            key: "build",
            value: function() {
                var w, j, l, g, p, q, k, u, v;
                this.sized && !this.ready && (w = this.element,
                j = this.options,
                l = this.image,
                g = w.parentNode,
                (v = document.createElement("div")).innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
                q = (p = v.querySelector(".".concat(ak, "-container"))).querySelector(".".concat(ak, "-canvas")),
                k = p.querySelector(".".concat(ak, "-drag-box")),
                v = (u = p.querySelector(".".concat(ak, "-crop-box"))).querySelector(".".concat(ak, "-face")),
                this.container = g,
                this.cropper = p,
                this.canvas = q,
                this.dragBox = k,
                this.cropBox = u,
                this.viewBox = p.querySelector(".".concat(ak, "-view-box")),
                this.face = v,
                q.appendChild(l),
                ba(w, ad),
                g.insertBefore(p, w.nextSibling),
                this.isImg || aY(l, aS),
                this.initPreview(),
                this.bind(),
                j.initialAspectRatio = Math.max(0, j.initialAspectRatio) || NaN,
                j.aspectRatio = Math.max(0, j.aspectRatio) || NaN,
                j.viewMode = Math.max(0, Math.min(3, Math.round(j.viewMode))) || 0,
                ba(u, ad),
                j.guides || ba(u.getElementsByClassName("".concat(ak, "-dashed")), ad),
                j.center || ba(u.getElementsByClassName("".concat(ak, "-center")), ad),
                j.background && ba(p, "".concat(ak, "-bg")),
                j.highlight || ba(v, a8),
                j.cropBoxMovable && (ba(v, bp),
                by(v, aB, aP)),
                j.cropBoxResizable || (ba(u.getElementsByClassName("".concat(ak, "-line")), ad),
                ba(u.getElementsByClassName("".concat(ak, "-point")), ad)),
                this.render(),
                this.ready = !0,
                this.setDragMode(j.dragMode),
                j.autoCrop && this.crop(),
                this.setData(j.data),
                ae(j.ready) && ar(w, "ready", j.ready, {
                    once: !0
                }),
                aj(w, "ready"))
            }
        }, {
            key: "unbuild",
            value: function() {
                this.ready && (this.ready = !1,
                this.unbind(),
                this.resetPreview(),
                this.cropper.parentNode.removeChild(this.cropper),
                aY(this.element, ad))
            }
        }, {
            key: "uncreate",
            value: function() {
                this.ready ? (this.unbuild(),
                this.ready = !1,
                this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null,
                this.sizing = !1,
                this.sized = !1) : this.reloading ? (this.xhr.onabort = null,
                this.xhr.abort()) : this.image && this.stop()
            }
        }]) && a0(f.prototype, c),
        b && a0(f, b),
        d
    }();
    return bf(aL.prototype, bg, bk, bd, a4, bl, af),
    aL
});
function showSubmissionMessage(b, c, d) {
    var e = $("<div>");
    b.append(e);
    function g(k) {
        if (k == "" || k == "#") {
            return false
        }
        if ("parentIFrame"in window) {
            try {
                parentIFrame.sendMessage({
                    message_type: "form-redirect",
                    message_content: k
                }, "*")
            } catch (j) {}
        } else {
            window.location.href = k;
            return false
        }
    }
    if (d.enableRedirect) {
        if (d.time != null && d.time != "" && d.time > 0) {
            var f = new CreateCircleProgress({
                lang: c,
                second: d.time,
                onComplete: function() {
                    a.click()
                }
            });
            var a = $("<button>").addClass("ravesh-button submit").text(frmRes.insert.completionProcess).css("margin-top", 23);
            a.click(function() {
                g(d.url);
                return false
            });
            e.append($("<div>").addClass("redirect-bar").append($(f.getUI()).addClass("float-right"), a.addClass("float-left")))
        } else {
            if (d.url != "") {
                g(d.url)
            }
        }
    }
    if (d.message == null || d.message == "") {
        d.message = $("<div>").html(frmRes.insert.successSaveForm).css({
            "text-align": "center",
            margin: "70px 0"
        })
    } else {
        d.message = $("<div>").html(d.message).css({
            padding: 10,
            "font-size": 11
        })
    }
    e.append(d.message);
    b.find("a").click(function() {
        if ($(this).attr("target") != "_blank") {
            g($(this).attr("href"));
            return false
        }
    });
    b.find(".ravesh-button-formprint").unbind("click").removeAttr("onclick").click(function() {
        b.find(".ravesh-button-formprint").hide();
        d.message.printElement({
            leaveOpen: 1,
            printMode: "popup",
            pageTitle: "print"
        });
        b.find(".ravesh-button-formprint").show();
        return false
    });
    return e
}
function CreateCircleProgress(f) {
    var j = this;
    var d = {
        width: 80,
        lineWidth: 10,
        lang: "en",
        borderColor: "#42a2eb",
        second: 60,
        duration: 1000,
        onComplete: function() {}
    };
    f = $.extend(true, d, f || {});
    var a = document.createElement("canvas");
    var c = a.getContext("2d");
    var b = f.second;
    j.getUI = function() {
        return a
    }
    ;
    a.width = f.width;
    a.height = f.width;
    function l() {
        c.clearRect(0, 0, f.width, f.width);
        c.beginPath();
        c.arc(f.width / 2, f.width / 2, (f.width / 2) - f.lineWidth, 0, 2 * Math.PI);
        c.lineWidth = f.lineWidth;
        c.strokeStyle = f.borderColor;
        c.stroke();
        c.beginPath();
        c.arc(f.width / 2, f.width / 2, (f.width / 2) - f.lineWidth, 0, 2 * Math.PI * (b / f.second));
        c.lineWidth = f.lineWidth;
        c.strokeStyle = "#aaaaaa";
        c.stroke();
        c.font = "17px" + (f.lang == "en" ? " 'Segoe UI', Helvetica, Arial" : " 'IRANSansWeb',Tahoma");
        c.fillStyle = "black";
        c.textAlign = "center";
        c.fillText(g(b), (f.width / 2), (f.width / 2) + 7)
    }
    l();
    var k;
    k = setInterval(function() {
        b--;
        l();
        if (b <= 0) {
            clearInterval(k);
            f.onComplete()
        }
    }, f.duration);
    function e(q) {
        if (f.lang == null || f.lang == "en") {
            return q
        }
        var p = q.toString();
        var o = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        for (var n = 0; n <= 9; n++) {
            p = p.replace(new RegExp(n,"g"), o[n])
        }
        return p
    }
    function g(o) {
        var n = function(p) {
            var q = parseInt(p);
            return q < 10 ? "0" + q : q.toString()
        };
        return e(n(o / 60) + ":" + n(o % 60), f.lang)
    }
}
(function(k, j) {
    var g = k.document;
    var a = k.jQuery;
    a.fn.printElement = function(n) {
        var l = a.extend({}, a.fn.printElement["defaults"], n);
        if (l.printMode == "iframe") {
            if (a.browser.opera || (/chrome/.test(navigator.userAgent.toLowerCase()))) {
                l.printMode = "popup"
            }
        }
        a("[id^='printElement_']").remove();
        return this.each(function() {
            var o = a.meta ? a.extend({}, l, a(this).data()) : l;
            f(a(this), o)
        })
    }
    ;
    a.fn.printElement["defaults"] = {
        printMode: "iframe",
        pageTitle: "",
        overrideElementCSS: null,
        printBodyOptions: {
            styleToAdd: "padding:10px;margin:10px;",
            classNameToAdd: ""
        },
        leaveOpen: false,
        iframeElementOptions: {
            styleToAdd: "border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;",
            classNameToAdd: ""
        },
        scriptSrc: []
    };
    a.fn.printElement["cssElement"] = {
        href: "",
        media: ""
    };
    function f(n, q) {
        var o = e(n, q);
        var r = null;
        var l = null;
        if (q.printMode.toLowerCase() == "popup") {
            if (k.Android == j) {
                r = k.open("about:blank", "printElementWindow", "width=650,height=440,scrollbars=yes");
                l = r.document
            } else {
                Android.showDialog(o, true)
            }
        } else {
            var s = "printElement_" + (Math.round(Math.random() * 99999)).toString();
            var p = g.createElement("IFRAME");
            a(p).attr({
                style: q.iframeElementOptions["styleToAdd"],
                id: s,
                className: q.iframeElementOptions["classNameToAdd"],
                frameBorder: 0,
                scrolling: "no",
                src: "about:blank"
            });
            g.body.appendChild(p);
            l = (p.contentWindow || p.contentDocument);
            if (l.document) {
                l = l.document
            }
            p = g.frames ? g.frames[s] : g.getElementById(s);
            r = p.contentWindow || p
        }
        focus();
        l.open();
        l.write(o);
        l.close();
        b(r)
    }
    function b(l) {
        if (l && l.printPage) {
            l.printPage()
        } else {
            setTimeout(function() {
                b(l)
            }, 1000)
        }
    }
    function d(n) {
        var l = a(n);
        a(":checked", l).each(function() {
            this.setAttribute("checked", "checked")
        });
        a("input[type='text']", l).each(function() {
            this.setAttribute("value", a(this).val())
        });
        a("select", l).each(function() {
            var p = a(this);
            a("option", p).each(function() {
                if (p.val() == a(this).val()) {
                    this.setAttribute("selected", "selected")
                }
            })
        });
        a("textarea", l).each(function() {
            var p = a(this).attr("value");
            if (a.browser.mozilla && this.firstChild) {
                this.firstChild.textContent = p
            } else {
                this.innerHTML = p
            }
        });
        var o = a("<div></div>").append(l.clone()).html();
        return o
    }
    function c() {
        var l = (k.location.port) ? ":" + k.location.port : "";
        return k.location.protocol + "//" + k.location.hostname + l + k.location.pathname
    }
    function e(p, s) {
        var l = a(p);
        var q = d(p);
        var r = new Array();
        r.push("<html><head><title>" + s.pageTitle + "</title>");
        if (s.overrideElementCSS) {
            if (s.overrideElementCSS.length > 0) {
                for (var t = 0; t < s.overrideElementCSS.length; t++) {
                    var o = s.overrideElementCSS[t];
                    if (typeof (o) == "string") {
                        r.push("<link type='text/css' rel='stylesheet' href='" + o + "' >")
                    } else {
                        r.push("<link type='text/css' rel='stylesheet' href='" + o.href + "' >")
                    }
                }
            }
        } else {
            a("link", g).filter(function() {
                return a(this).attr("rel").toLowerCase() == "stylesheet"
            }).each(function() {
                if (a(this).attr("href").includes("bootstrap") == false) {
                    r.push("<link type='text/css' rel='stylesheet' href='" + a(this).attr("href") + "' >")
                }
            })
        }
        r.push('<base href="' + c() + '" />');
        r.push("<style>html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{border-style:none;border-color:inherit;border-width:0;padding:0;outline:0;font-size:100%;background:transparent;margin-left:0;margin-right:0;margin-top:0}#content #treeDiv table,caption,tbody,tfoot,thead,tr,th,td{vertical-align:middle;background:transparent}#treeDiv div span{vertical-align:middle}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}:focus{outline:0}ins{text-decoration:none}del{text-decoration:line-through}table{border-collapse:collapse;border-spacing:0}</style>");
        r.push('</head><body style="' + s.printBodyOptions["styleToAdd"] + '" class="' + s.printBodyOptions["classNameToAdd"] + '">');
        r.push('<div class="' + l.attr("class") + '">' + q + "</div>");
        var n = "";
        if (!a.browser.opera && !s.leaveOpen && s.printMode.toLowerCase() == "popup") {
            n = "close();"
        }
        a(s.scriptSrc).each(function() {
            r.push("<script type='text/javascript' src='" + this + "'></script>")
        });
        r.push("<script type='text/javascript'>function printPage(){try {rcrmSetHeight()}catch(e){};focus();print();" + n + "}</script>");
        r.push("</body></html>");
        return r.join("")
    }
}
)(window);
(function() {
    var q = {};
    var o = document.getElementsByTagName("script");
    var p = o[o.length - 1].src;
    q.serverUrl = FormUtility.getQueryStrings("serverUrl", p);
    q.domain = FormUtility.getQueryStrings("domain", p);
    q.formId = FormUtility.getQueryStrings("formId", p);
    q.group = FormUtility.getQueryStrings("group", p) || "public";
    q.token = [];
    q.style = FormUtility.getQueryStrings("style", p) || "page";
    q.urlReferrer = FormUtility.getQueryStrings("urlReferrer", p) || "";
    q.loginMode = (FormUtility.getQueryStrings("loginMode", p) || "").toLowerCase() == "true";
    q.checkMode = FormUtility.getQueryStrings("checkMode", p) == "1";
    if (formLinkMode.mode == 1) {
        if (q.urlReferrer != "") {
            var c = false;
            var b = q.urlReferrer.replace("https://", "http://").replace("http://www.", "http://").toLowerCase();
            $.each(formLinkMode.urls, function(t, v) {
                if (b.indexOf(v.replace("https://", "http://").replace("http://www.", "http://").toLowerCase()) == 0) {
                    c = true;
                    return false
                }
            });
            if (!c) {
                location.href = location.pathname + "?noAccess=1";
                return
            }
        } else {
            location.href = location.pathname + "?noAccess=1";
            return
        }
    }
    var r = q.serverUrl + "/" + q.domain;
    var s = r + "/form/getForm/" + q.formId;
    var l = FormUtility.randomId();
    document.write('<div id="' + l + '"></div>');
    var a = $("#" + l);
    a.attr("style", "display: flex;display: -ms-flexbox;flex-direction: column;-ms-flex-direction: column;");
    var k = $("<div>").css({
        "flex-grow": "1"
    }).addClass("ravesh-form-main-container ravesh-form-style-" + q.style).appendTo(a);
    var g = $("<div>").addClass("ravesh-form-builder").hide();
    k.after(g);
    var e = $("<div>").addClass("ravesh-form-container").appendTo(k);
    var d = $("<div>").addClass("ravesh-form-box").appendTo(e);
    var f = $("<div>").addClass("ravesh-form-wrapper ravesh-form-builder").appendTo(d);
    var j = $("<div>").addClass("ravesh-form-main-loading").append($("<div>").addClass("ravesh-form-main-loading-box").append($("<span>").text(frmRes.insert.pleaseWait), $("<div>").addClass("spinner"))).appendTo(d).hide();
    q.showLoading = function() {
        j.show()
    }
    ;
    q.hideLoading = function() {
        j.hide()
    }
    ;
    if (q.group != "public") {
        q.token = [$("#HFdomain").val(), $("#HFUserCode").val(), $("#HFcodeDU").val(), q.group]
    }
    var n = new FormData();
    n.append("group", q.group);
    n.append("token", q.token);
    n.append("loginMode", q.loginMode);
    n.append("loginToken", (window.localStorage && localStorage.getItem("loginToken_" + q.domain)) || "");
    n.append("timing", (window.localStorage && localStorage.getItem("formSubmissionTiming_" + q.domain + "_" + q.formId)) || "");
    FormUtility.postForm(s, n, function(E, H, z) {
        if (!E) {
            if (H == "needlogin") {
                localStorage.setItem("loginToken_" + q.domain, "");
                location.href = z
            } else {
                if (H == "needRedirect") {
                    location.href = z
                } else {
                    if (H == "503") {
                        location.href = location.pathname + "?noAccess=1"
                    }
                }
            }
            return false
        }
        var C = z[0];
        var D = z[1];
        var I = z[2];
        var G = z[3];
        var F = C.form.lang;
        var A = F == "fa" ? "rtl" : "ltr";
        if (C.form.type == "line") {
            if (q.style == "drop") {
                $("body").css({
                    "min-height": 400
                })
            } else {
                if (["inline", "dialog", "fab"].indexOf(q.style) != -1) {
                    $("body").css({
                        "min-height": screen.height * 0.7
                    })
                }
            }
        }
        if (C.property.OnlineChat != undefined) {
            if (q.style != "page") {
                if (C.property.OnlineChat != undefined) {
                    setTimeout(function() {
                        if ("parentIFrame"in window) {
                            try {
                                parentIFrame.sendMessage({
                                    message_type: "showChatBox",
                                    message_content: {
                                        domain: C.property.domain,
                                        chatInfo: C.property.OnlineChat,
                                        serverUrl: q.serverUrl
                                    }
                                }, "*")
                            } catch (t) {}
                        }
                    }, 500)
                }
            } else {
                var J = window
                  , B = document;
                function u() {
                    var K = B.createElement("script");
                    K.type = "text/javascript",
                    K.async = !0,
                    K.src = q.serverUrl + "/" + C.property.domain + "/chatclient/script/" + C.property.OnlineChat.Key,
                    B.getElementsByTagName("head")[0].appendChild(K)
                }
                "complete" === B.readyState ? u() : J.attachEvent ? J.attachEvent("onload", u) : J.addEventListener("load", u, !1);
                if (C.property.OnlineChat.Message != "") {
                    window.addEventListener("raveshcrm_chat_ready", function() {
                        RaveshCrmChat.sendQuickMessage({
                            message: C.property.OnlineChat.Message,
                            delay: C.property.OnlineChat.Delay
                        })
                    })
                }
            }
        }
        var w = function() {
            var S = "formSubmissionTiming_" + C.property.domain + "_" + C.form.id;
            k.addClass("form-type-" + C.form.type);
            var Q = new CreateInsertUI({
                footerClass: "",
                extraParamForSave: {
                    token: q.token,
                    urlReferrer: q.urlReferrer
                }
            });
            if (D) {
                Q.setEditMode(true)
            }
            Q.setCheckMode(q.checkMode);
            Q.setData(C, D);
            Q.setOnBeforeSaveForm(function() {
                if (V) {
                    var Z = t.getResponse();
                    t.notValidTip.toggle(Z == "");
                    if (Z == "") {
                        return false
                    }
                    Q.setExtraParamForSave("captcha", Z)
                }
                if (localStorage && localStorage.getItem(S)) {
                    Q.setExtraParamForSave("timing", localStorage.getItem(S))
                }
                q.showLoading()
            });
            Q.setOnSaveForm(function(ac, ad, aa) {
                q.hideLoading();
                if (ac) {
                    if ("parentIFrame"in window) {
                        try {
                            parentIFrame.sendMessage({
                                message_type: "form-callback",
                                message_content: {
                                    data: aa.formValueId
                                }
                            }, "*")
                        } catch (ab) {}
                    }
                    var ae;
                    if (aa.message.enableFullPageMessage) {
                        ae = g.empty().show();
                        k.hide()
                    } else {
                        if (C.form.type == "classic") {
                            ae = f.empty().show();
                            ae.html(O)
                        } else {
                            ae = $("<div>").addClass("frm-container").appendTo(f.empty().show())
                        }
                        g.hide()
                    }
                    ae = showSubmissionMessage(ae, F, aa.message).addClass("form-design-page").css({
                        width: "100%",
                        "max-width": 1000,
                        margin: "auto"
                    });
                    if (aa.message.enableAnotherResponse) {
                        var Z = $("<button>").addClass("ravesh-button submit").text(frmRes.insert.submitAnotherResponse);
                        ae.append($("<div>").css({
                            "text-align": "center",
                            "margin-bottom": 70
                        }).append(Z));
                        Z.click(function() {
                            k.show();
                            g.hide();
                            w();
                            return false
                        })
                    }
                    Q.setTheme();
                    if (aa.message.enableFullPageMessage) {
                        $("body").css({
                            background: "#fff"
                        })
                    }
                    $("html,body").animate({
                        scrollTop: 0
                    });
                    if ("parentIFrame"in window) {
                        try {
                            parentIFrame.sendMessage({
                                message_type: "form-scroll-to",
                                message_content: 0
                            }, "*")
                        } catch (ab) {}
                    }
                    if (localStorage && localStorage.getItem(S)) {
                        localStorage.removeItem(S)
                    }
                } else {
                    if (V) {
                        t.reset()
                    }
                    if (ad == "reCaptcha") {
                        V = true;
                        C.property.captcha = true;
                        C.property.captchaType = ad;
                        C.property.captchaSiteKey = aa;
                        t = new v(M,aa,F)
                    } else {
                        if (ad == "numericCaptcha") {
                            V = true;
                            C.property.captcha = true;
                            C.property.captchaType = ad;
                            t = new y(M,F,C.form.id);
                            t.notValidTip.show()
                        }
                    }
                }
            });
            Q.setOnChangePage(function(aa, ab) {
                M.toggle(aa == ab);
                $("html,body").animate({
                    scrollTop: Q.getData().pages[aa].container.offset().top - 100
                });
                if ("parentIFrame"in window) {
                    try {
                        parentIFrame.sendMessage({
                            message_type: "form-scroll-to",
                            message_content: Q.getData().pages[aa].container.offset().top - 100
                        }, "*")
                    } catch (Z) {}
                }
            });
            window.xyzExport = function() {
                var Z = $.extend(true, {}, C);
                Z = Q.convertServerData(Z);
                Z.template = {};
                var aa = Q.getFrmSetting("submitTemplate");
                if (aa != "default" && aa != "no" && aa != "") {
                    Z.template.template = JSON.parse(aa);
                    Z.template.title = "قالب " + C.form.title;
                    Z.template.picture = ""
                }
                $("body").prepend($("<textarea>").css({
                    "z-index": "1",
                    position: "absolute",
                    left: "0px",
                    right: "0px",
                }).attr({
                    rows: 20
                }).val(JSON.stringify(Z)))
            }
            ;
            if (C.property.loginFormId != 0) {
                Q.setFieldValueAuth(G);
                Q.getToolbar().appendTo($("body")).append($("<a>").attr({
                    href: q.serverUrl + "/" + q.domain + "/formLogout/" + q.formId + "?loginToken=" + localStorage.getItem("loginToken_" + q.domain) || ""
                }).addClass("ravesh-btn-logout").append('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" /></svg>').append($("<span>").text(frmRes.insert.logout)))
            }
            var O = $("<div>").addClass("ravesh-form-wrapper-title");
            O.append($("<h1>").text(C.form.title));
            if (C.form.detail != "") {
                O.append($("<h2>").text(C.form.detail)).addClass("has-detail")
            }
            var t;
            var V = Q.getFrmSetting("captcha").toString().toLowerCase() == "true";
            var K = Q.getFrmSetting("captchaType");
            var M = $("<div>");
            M.toggle(Q.getHeader() == "");
            k.attr("dir", A);
            g.attr("dir", A);
            if (C.form.type == "classic") {
                f.empty().append(O, Q.getHeader(), Q.getContainer(), M, Q.getFooter()).attr("dir", A)
            } else {
                f.empty().append(O, Q.getContainer(), M, Q.getFooter()).attr("dir", A)
            }
            if (q.group == "public") {
                var U = Q.getFrmSetting("submitTemplate");
                if (U == "default") {
                    Q.setTheme($("body"), e, O)
                } else {
                    if (U == "no") {
                        O.hide()
                    } else {
                        if (U != "") {
                            Q.setTheme($("body"), e, O, JSON.parse(U))
                        }
                    }
                }
            } else {
                O.hide()
            }
            var W = Q.getFrmSetting("coordinate").toString().toLowerCase() == "true";
            if (W) {
                Q.getCoordinate()
            }
            if (V) {
                if (K == "reCaptcha") {
                    var R = Q.getFrmSetting("captchaSiteKey");
                    t = new v(M,R,F)
                } else {
                    t = new y(M,F,Q.getFrmSetting("id"))
                }
            }
            Q.resizeForm(function(aa, Z) {
                $.each(aa, function(ab, ac) {
                    k.removeClass(ac)
                });
                k.addClass(Z)
            });
            window.onOpenedMiniDialog = function(Z) {
                if ("parentIFrame"in window) {
                    try {
                        parentIFrame.sendMessage({
                            message_type: "form-scroll-to",
                            message_content: Z.getUI().offset().top
                        }, "*")
                    } catch (aa) {}
                }
            }
            ;
            try {
                window.parent.postMessage({
                    message_type: "send-form-title",
                    message_content: C.form.title
                }, "*")
            } catch (N) {}
            if (q.urlReferrer == "") {
                var P = window.location.href;
                if (I == 0) {
                    var T = {
                        "white-space": "nowrap",
                        overflow: "hidden",
                        "text-overflow": "ellipsis"
                    };
                    var X = $("<div>").text("در هیچ فرمی رمز عبور و اطلاعات بانکی خود را وارد نکنید").css({
                        "text-align": "center",
                        padding: "10px",
                        "font-family": "IRANSansWeb",
                        "font-size": "10pt"
                    });
                    var Y = $("<div>").css({
                        background: "rgb(249, 249, 249)",
                        "box-shadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px",
                        direction: A,
                        "font-family": "IRANSansWeb",
                        "font-size": "8pt",
                        padding: "10px",
                        width: "100%",
                        "box-sizing": "border-box",
                        overflow: "hidden",
                        display: "flex"
                    }).append($("<div>").css({
                        flex: "1"
                    }).append($("<img>").attr("src", "/themes/resources/images/Logo.png").css({
                        width: "35px",
                        height: "35px",
                        "float": (F == "fa" ? "right" : "left"),
                        "margin-left": "10px",
                        "margin-right": "10px"
                    }), $("<div>").text("فرم ساز فرم افزار").css(T).css({
                        "font-weight": "bold",
                        "font-size": "10pt"
                    }), $("<div>").css(T).text("ابزار ساخت فرمهای الکترونیکی آنلاین")), $("<div>").css({
                        "text-align": "left",
                        display: "block"
                    }).append($("<div>").text("مسئولیت این فرم با سازنده آن است"), $("<div>").css({
                        display: "inline-block"
                    }).append($("<a>").attr({
                        href: "https://formafzar.com/FormRegistrationRules",
                        target: "_blank"
                    }).text("قوانین استفاده")), $("<div>").css({
                        display: "inline-block"
                    }).append($("<a>").attr({
                        href: "https://farsicom.raveshcrm.ir/farsicom/formView/283?website=" + encodeURI(P),
                        target: "_blank"
                    }).css({
                        "padding-right": "10px"
                    }).text("گزارش تخلف"))));
                    if (C.form.type == "classic") {
                        a.css({
                            "min-height": "100vh"
                        });
                        a.append(X, Y)
                    } else {
                        Q.getFooter().before(X);
                        Q.getFooter().after(Y)
                    }
                }
            }
        };
        var x = function(Q) {
            k.addClass("form-type-" + C.form.type);
            var O = new CreateInsertUI({
                footerClass: "",
                extraParamForSave: {
                    token: q.token,
                    urlReferrer: q.urlReferrer,
                    loginType: Q,
                    loginToken: localStorage.getItem("loginToken_" + q.domain) || ""
                }
            });
            O.setData(C);
            O.setOnBeforeSaveForm(function() {
                if (T) {
                    var U = t.getResponse();
                    t.notValidTip.toggle(U == "");
                    if (U == "") {
                        return false
                    }
                    O.setExtraParamForSave("captcha", U)
                }
                q.showLoading()
            });
            O.setOnSaveForm(function(V, W, U) {
                q.hideLoading();
                if (V) {
                    if (Q == 2) {
                        if (window.loginRedirectUrl) {
                            location.href = (document.referrer === "" || (new URL(document.referrer)).searchParams.get("urlReferrer") === null ? window.loginRedirectUrl : window.loginRedirectUrl + "?urlReferrer=" + (new URL((new URL(document.referrer)).searchParams.get("urlReferrer"))).origin)
                        } else {
                            location.reload()
                        }
                    } else {
                        if (C.property.authType == 1) {
                            localStorage.setItem("loginToken_" + q.domain, U[0]);
                            location.href = (document.referrer === "" || (new URL(document.referrer)).searchParams.get("urlReferrer") === null ? U[1] : U[1] + "?urlReferrer=" + (new URL((new URL(document.referrer)).searchParams.get("urlReferrer"))).origin)
                        } else {
                            if (C.property.authType == 2 || Q == 3) {
                                localStorage.setItem("loginToken_" + q.domain, U[0]);
                                R();
                                x(2);
                                window.loginRedirectUrl = U[1]
                            }
                        }
                    }
                } else {
                    if (Q == 3) {
                        Q = 2
                    }
                    if (T) {
                        t.notValidTip.show();
                        t.reset()
                    } else {
                        if (W == "reCaptcha") {
                            T = true;
                            C.property.captcha = true;
                            C.property.captchaType = W;
                            C.property.captchaSiteKey = U;
                            t = new v(M,U,F)
                        } else {
                            if (W == "numericCaptcha") {
                                T = true;
                                C.property.captcha = true;
                                C.property.captchaType = W;
                                t = new y(M,F,C.form.id);
                                t.notValidTip.show()
                            }
                        }
                    }
                }
            });
            var N = $("<div>").addClass("ravesh-form-wrapper-title");
            N.append($("<h1>").text(C.form.title));
            if (C.form.detail != "") {
                N.append($("<h2>").text(C.form.detail)).addClass("has-detail")
            }
            var t;
            var T = O.getFrmSetting("captcha").toString().toLowerCase() == "true" && Q == 1;
            var K = O.getFrmSetting("captchaType");
            var M = $("<div>");
            M.toggle(O.getHeader() == "");
            k.attr("dir", A);
            if (C.form.type == "classic") {
                f.empty().append(N, O.getHeader(), O.getContainer(), M, O.getFooter()).attr("dir", A)
            } else {
                f.empty().append(N, O.getContainer(), M, O.getFooter()).attr("dir", A)
            }
            var S = O.getFrmSetting("submitTemplate");
            if (S == "default") {
                O.setTheme($("body"), e, N)
            } else {
                if (S == "no") {
                    N.hide()
                } else {
                    if (S != "") {
                        O.setTheme($("body"), e, N, JSON.parse(S))
                    }
                }
            }
            if (T) {
                if (K == "reCaptcha") {
                    var P = O.getFrmSetting("captchaSiteKey");
                    t = new v(M,P,F)
                } else {
                    t = new y(M,F,O.getFrmSetting("id"))
                }
            }
            O.resizeForm(function(V, U) {
                $.each(V, function(W, X) {
                    k.removeClass(X)
                });
                k.addClass(U)
            });
            function R() {
                var U = $.grep(C.fields, function(V) {
                    return V.type != "page" && V.type != "section"
                })[0];
                C.fields = [{
                    id: U.id,
                    parentId: 2,
                    title: frmRes.insert.verifyMobileNumber,
                    detail: "",
                    type: "verifySms",
                    column: 1,
                    order: 0,
                    permission: 0,
                    property: {
                        width: "200",
                        required: "True"
                    }
                }, {
                    id: 2,
                    parentId: 3,
                    title: "",
                    detail: "",
                    type: "section",
                    column: 1,
                    order: 0,
                    permission: 0,
                    property: {
                        hiddenTitle: "True",
                        style: "no-border"
                    }
                }, {
                    id: 3,
                    parentId: 0,
                    title: "",
                    detail: "",
                    type: "page",
                    column: 0,
                    order: 0,
                    permission: 0,
                    property: {
                        submit: frmRes.insert.ok
                    }
                }]
            }
            window.rensendVerifyCode = function() {
                Q = 3;
                O.setExtraParamForSave("loginType", Q);
                O.saveForm(null, true)
            }
        };
        if (q.loginMode) {
            x(1)
        } else {
            w()
        }
        function y(t, N, K) {
            var O = this;
            var P = 1;
            $(".form-captcha").remove();
            $(".form-captcha-tip").remove();
            var Q = $("<div>").addClass("form-captcha form-design-field required");
            t.append(Q);
            O.notValidTip = $("<div>").addClass("ravesh-error-tip form-captcha-tip").css({
                margin: "-20px 20px 0 0"
            }).text(frmRes.insert.enterSecurityCode).hide();
            O.notValidTip.click(function() {
                O.notValidTip.hide()
            });
            t.append(O.notValidTip);
            O.reCreate = $("<span>").addClass("form-captcha-refresh").click(function() {
                O.reset()
            });
            O.input = $("<input>").addClass("form-input").css({
                width: "100px",
                "text-align": "center"
            }).attr({
                type: "number",
                maxLength: 6
            }).appendTo(Q);
            O.input.bind("input", function() {
                O.notValidTip.hide();
                if (this.value.length > 6) {
                    this.value = this.value.slice(0, 6)
                }
            });
            O.img = $("<img>").addClass("img-size-" + P).appendTo(Q);
            O.reset = function() {
                O.create();
                O.input.val("")
            }
            ;
            O.loading = $("<div>").addClass("loading").append($("<div>").addClass("spinner")).hide().appendTo(Q);
            O.create = function() {
                O.loading.show();
                O.reCreate.hide();
                M(function(S, R) {
                    O.loading.hide();
                    O.reCreate.show();
                    if (!S) {
                        return false
                    }
                    O.img.attr("src", R);
                    O.reCreate.appendTo(Q)
                })
            }
            ;
            O.getResponse = function() {
                if (O.input.val().length != 6) {
                    return ""
                }
                return O.input.val()
            }
            ;
            function M(R) {
                FormUtility.post(r + "/form/getNumericCaptcha", {
                    formId: K,
                    lang: N,
                    size: P
                }, function(T, U, S) {
                    R(T, S)
                })
            }
            O.create()
        }
        function v(t, K, M) {
            var O = this;
            $(".form-recaptcha").remove();
            var P = $("<div>").addClass("form-recaptcha").css({
                margin: "0 20px 20px",
                background: "#f6f6f6",
                width: 300,
                height: 78
            });
            t.append(P);
            O.notValidTip = $("<div>").addClass("ravesh-error-tip").css({
                margin: "-20px 20px 0 0"
            }).text(frmRes.insert.captchaNotValid).hide();
            O.notValidTip.click(function() {
                O.notValidTip.hide()
            });
            t.append(O.notValidTip);
            var N = function() {
                grecaptcha.ready(function() {
                    O.captcha = grecaptcha.render(P[0], {
                        sitekey: K,
                        callback: function() {
                            O.notValidTip.fadeOut()
                        }
                    })
                })
            };
            if (typeof grecaptcha === "object") {
                N()
            } else {
                $.getScript("https://www.google.com/recaptcha/api.js?hl=" + M, function() {
                    N()
                })
            }
            O.getResponse = function() {
                if (O.captcha == null) {
                    return ""
                }
                return grecaptcha.getResponse(O.captcha)
            }
            ;
            O.reset = function() {
                if (O.captcha != null) {
                    grecaptcha.reset(O.captcha)
                }
            }
        }
    })
}
)();
