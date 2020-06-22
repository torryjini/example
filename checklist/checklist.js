function checkcont1() {
  var none_checked = document.getElementById("double_major_none").checked;
  if (!none_checked) {
    document.getElementById("double_major_point").readOnly = false;
  } else {
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;
  }
}

function checkcont2() {
  var none_checked = document.getElementById("link_major_none").checked;
  if (!none_checked) {
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;
  } else {
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;
  }
}

function checkcont3() {
  var none_checked = document.getElementById("fusion_major_none").checked;
  if (!none_checked) {
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;
  } else {
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;
  }
}

function checkcont4() {
  var none_checked = document.getElementById("plan_major_none").checked;
  if (!none_checked) {
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
  } else {
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  }
}

function checkcont5() {
  var none_checked = document.getElementById("minor_none").checked;
  if (!none_checked) {
    document.getElementById("minor_point").readOnly = false;
  } else {
    document.getElementById("minor_point").value = null;
    document.getElementById("minor_point").readOnly = true;
  }
}

function checkcont6() {
  var none_checked = document.getElementById("teaching_none").checked;
  if (!none_checked) {
    document.getElementById("teaching_point").readOnly = false;
  } else {
    document.getElementById("teaching_point").value = null;
    document.getElementById("teaching_point").readOnly = true;
  }
}

function FusionStandardCheck() {
  var fusion_standard = document.getElementById("fusion-45-check").checked;
  if (fusion_standard) {
    document.getElementById("fusion_standard").value = 45;
  } else {
    document.getElementById("fusion_standard").value = 36;

  }
}

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

function Liveral_Sum() {
  var elective_point = Number(document.getElementById("elective_liveral").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Math.floor(Number(document.getElementById("common_eng").value));
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var core_total_point = Number(document.getElementById("core_total").value);
  if (elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point > 45) {
    document.getElementById("liveral_total").value = 45;
  } else {
    document.getElementById("liveral_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point;
  }
}

function Liveral_result() {
  var Admissionyear = document.getElementById("admissionyear_selector").value;
  if (Admissionyear < 2016) {
    alert("입학년도를 선택하세요!");
    return false;
  } else {
    Liveral_cal();
  }
}

function Liveral_cal() {
  var Admissionyear = document.getElementById("admissionyear_selector");
  var Admissionyear_text = Admissionyear.options[Admissionyear.selectedIndex].text;
  var elective_point = Number(document.getElementById("elective_liveral").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Number(document.getElementById("common_eng").value);
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var account_check_SF = document.getElementById("account_check").checked;
  var Core1 = document.getElementById("core1").checked;
  var Core2 = document.getElementById("core2").checked;
  var Core3 = document.getElementById("core3").checked;
  var Core4 = document.getElementById("core4").checked;
  var Core5 = document.getElementById("core5").checked;
  var core_total_point = Number(document.getElementById("core_total").value);
  var liveral_total_point = Number(document.getElementById("liveral_total").value);
  var word = "입학년도 : " + Admissionyear_text + "\n선택교양 : " + elective_point + " 학점\n";

  if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
    alert("핵심교양 영역 이수를 체크하세요!")
    return false;
  }

  if (common_kor_point < 2) {
    word += "공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
  } else {
    word += "공통교양\n - 국어 : 기준 통과\n";
  }

  if (common_eng_point < 0.4) {
    word += " - 영어 : " + [2 - common_eng_point] + " 학점 미달\n";
  } else if (0.4 < common_eng_point < 1) {
    word += " - 영어 : 면제\n";
  } else if (common_eng_point = 2) {
    word += " - 영어 : 기준 통과\n";
  }

  if (!account_check_SF) {
    if (common_etc_point < 10) {
      word += " - 기타 : " + [10 - common_etc_point] + " 학점 미달\n"
    } else {
      word += " - 기타 : 기준 통과\n"
    }
  } else {
    if (common_etc_point < 8) {
      word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달 ( 회계와사회 : 면제 )\n"
    } else {
      word += " - 기타 : 기준 통과 ( 회계와사회 : 면제 )\n"
    }
  }

  if (core_total_point < 15) {
    word += "핵심교양 : " + [15 - core_total_point] + " 학점 미달\n- 미이수 영역 : "
  } else {
    word += "핵심교양 : 최소학점 기준 통과\n- 미이수 영역 : "
  }

  if (!Core1) {
    word += "도전 "
  }
  if (!Core2) {
    word += "창의 "
  }
  if (!Core3) {
    word += "융합 "
  }
  if (!Core4) {
    word += "신뢰 "
  }
  if (!Core5) {
    word += "소통"
  }

  if (liveral_total_point <= 45) {
    word += "\n교양영역 계 : " + liveral_total_point + " 학점"
  } else {
    word += "\n교양영역 계 : " + liveral_total_point + " 학점_ " + [liveral_total_point - 45] + "학점 초과"
  }

  alert(word)
}

function major_standard_maker() {
  var Multimajor_standard = Number(document.getElementById("MultiMajor_selector").value);
  document.getElementById("major_standard").value = Multimajor_standard;
  var Multimajor = document.getElementById("MultiMajor_selector");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
  if (Multimajortext.includes("심화")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("복수")) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("연계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("융합")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;

    document.getElementById("plan_major_none").checked = true;
    document.getElementById("plan_major_point").value = null;
    document.getElementById("plan_major_point").readOnly = true;
    document.getElementById("cross_point3").value = null;
    document.getElementById("cross_point3").readOnly = true;
  } else if (Multimajortext.includes("설계")) {
    document.getElementById("double_major_none").checked = true;
    document.getElementById("double_major_point").value = null;
    document.getElementById("double_major_point").readOnly = true;

    document.getElementById("link_major_none").checked = true;
    document.getElementById("link_major_point").value = null;
    document.getElementById("link_major_point").readOnly = true;
    document.getElementById("cross_point1").value = null;
    document.getElementById("cross_point1").readOnly = true;

    document.getElementById("fusion_major_none").checked = true;
    document.getElementById("fusion_major_point").value = null;
    document.getElementById("fusion_major_point").readOnly = true;
    document.getElementById("cross_point2").value = null;
    document.getElementById("cross_point2").readOnly = true;

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
  } else if (Multimajortext.includes("다전공")) {
    document.getElementById("double_major_none").checked = false;
    document.getElementById("double_major_point").readOnly = false;

    document.getElementById("link_major_none").checked = false;
    document.getElementById("link_major_point").readOnly = false;
    document.getElementById("cross_point1").readOnly = false;

    document.getElementById("fusion_major_none").checked = false;
    document.getElementById("fusion_major_point").readOnly = false;
    document.getElementById("cross_point2").readOnly = false;

    document.getElementById("plan_major_none").checked = false;
    document.getElementById("plan_major_point").readOnly = false;
    document.getElementById("cross_point3").readOnly = false;
  }
}

function Major_result() {
  var Majorstandard = document.getElementById("MultiMajor_selector").value;
  if (Majorstandard < 45) {
    alert("다전공 여부를 선택하세요.");
    return false;
  } else {
    BaseNeceresult(Majorstandard);
  }
}

function BaseNeceresult(Majorstandard) {
  var Multimajor = document.getElementById("MultiMajor_selector");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
  var Basepoint = Number(document.getElementById("base_selector").value);
  var Necepoint = Number(document.getElementById("nece_selector").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  Majorstandard = Number(Majorstandard);
  var word = "주전공 : 심리학과\n다전공 : " + Multimajortext + "\n";

  if (Majorpoint < Necepoint) {
    alert("전공 과목은 전공 필수를 포함합니다!");
    return false;
  }

  if (Majorpoint > 78) {
    alert("전공 과목 최대 학점은 78학점 입니다!");
    return false;
  }

  if (Basepoint < 10) {
    word += "전공기초 : " + [10 - Basepoint] + " 학점 미달\n";
  } else {
    word += "전공기초 : 기준 통과\n";
  }

  if (Necepoint < 9) {
    word += "전공필수 : " + [9 - Necepoint] + " 학점 미달\n";
  } else {
    word += "전공필수 : 기준 통과\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "전공과목 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
  } else {
    word += "전공과목 : 기준 통과\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "복수전공 : " + [45 - Doublepoint] + " 학점 미달\n"
    } else {
      word += "복수전공 : 최소학점 기준 통과\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var Linkpoint = Number(document.getElementById("link_major_point").value) + Number(document.getElementById("cross_point1").value);
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "연계전공 : " + [36 - Linkpoint] + " 학점 미달\n"
    } else {
      word += "연계전공 : 최소학점 기준 통과\n"
    }
  }


  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += "융합전공 : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
    } else {
      word += "융합전공 : 최소학점 기준 통과\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "설계전공 : " + [36 - Planpoint] + " 학점 미달\n"
    } else {
      word += "설계전공 : 최소학점 기준 통과\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "부전공 : " + [21 - Minorpoint] + " 학점 미달\n"
    } else {
      word += "부전공 : 최소학점 기준 통과\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  if (Freepoint < 1) {
    word += "자유선택 : " + Freepoint + " 학점 이수_CAU세미나 미수강\n"
  } else {
    word += "자유선택 : " + Freepoint + " 학점 이수_CAU세미나(1),(2) 이수 확인\n"
  }

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "교직이수 : " + [22 - Teachingpoint] + " 학점 미달\n"
    else {
      word += "교직이수 : 최소학점 기준 통과\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < 132) {
    word += "전체 이수학점 : " + [132 - TotalPoint] + " 학점 미달"
  } else {
    word += "전체 이수학점 : 기준 통과"
  }
  alert(word)
}

function total_point_sum() {
  var LiveralTotal = Number(document.getElementById("liveral_total").value);
  var Basepoint = Number(document.getElementById("base_selector").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value);
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value);
  var Planpoint = Number(document.getElementById("plan_major_point").value);
  var Minorpoint = Number(document.getElementById("minor_point").value);
  var Freepoint = Number(document.getElementById("free_point").value);
  var Teachpoint = Number(document.getElementById("teaching_point").value);
  document.getElementById("the_total").value = LiveralTotal + Basepoint + Majorpoint + Doublepoint + Linkpoint + Fusionpoint + Planpoint + Minorpoint + Freepoint + Teachpoint;
}

function Etc_result() {
  var English_result = document.getElementById("English").checked;
  var Hanja_result = document.getElementById("Hanja").checked;
  var paper_result = document.getElementById("major_paper").checked;
  var paper_result2 = document.getElementById("double_major_paper").checked;
  var average_result = Number(document.getElementById("average").value);
  var word = "졸업인정제 통과 여부\n";
  if (!English_result) {
    word += "영어 : 미통과\n"
  } else {
    word += "영어 : 통과\n"
  }

  if (Hanja_result) {
    word += "한자 : 통과\n졸업시험/논문\n"
  } else {
    word += "한자 : 미통과\n졸업시험/논문\n"
  }

  if (paper_result) {
    word += "- 주전공 : 합격\n"
  } else {
    word += "- 주전공 : 불합격\n"
  }

  if (paper_result2) {
    word += "- 복수전공 : 통과/해당없음\n"
  } else {
    word += "- 복수전공 : 불합격\n"
  }

  if (average_result >= 2) {
    word += "평균평점 : 통과"
  } else {
    word += "평균평점 : 미통과_졸업불가"
  }

  alert(word);
}

function onlyNumber(event) {
  event = event || window.event;
  var keyID = (event.which) ? event.which : event.keyCode;
  if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
    return;
  else
    return false;
}

function removeChar(event) {
  event = event || window.event;
  var keyID = (event.which) ? event.which : event.keyCode;
  if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
    return;
  else
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

function Form_Reset(id) {
  document.getElementById(id).reset()
}
