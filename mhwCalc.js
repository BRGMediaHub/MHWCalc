jQuery(document).ready(function($) {
    //data
    //https://docs.google.com/spreadsheets/d/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/edit#gid=0
    //https://github.com/TeamBRG/MHWCalc/blob/master/mhData.json
  
    //get the master dataset
    //var mhData = $.getJSON({'url': "https://api.myjson.com/bins/17i6p9", 'async': false});
    //var mhData = $.get("https://rawgit.com/TeamBRG/MHWCalc/master/mhData.json"); how do we host giles on github for dev purposes? in case we need to make changes to the JSON
    //mhData = JSON.parse(mhData.responseText);
  
    //get Skills data
    var mhSkills = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/2/public/values?alt=json",
      'async': false
    });
    mhSkills = JSON.parse(mhSkills.responseText);
  
    //get Helm data
    var mhHelms = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/3/public/values?alt=json",
      'async': false
    });
    mhHelms = JSON.parse(mhHelms.responseText);
  
    //init helm options
    for (var i = 0; i < mhHelms.feed.entry.length; i++) {
      $("#mhHelmSelect").append("<option value='" + i + "'>" +
        mhHelms.feed.entry[i].gsx$mhitemname.$t + " " +
        "</option>");
    }
  
    //get Body data
    var mhBody = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/4/public/values?alt=json",
      'async': false
    });
    mhBody = JSON.parse(mhBody.responseText);
  
    //init Body options
    for (i = 0; i < mhBody.feed.entry.length; i++) {
      $("#mhBodySelect").append("<option value='" + i + "'>" +
        mhBody.feed.entry[i].gsx$mhitemname.$t + " " +
        "</option>");
    }
  
    //get Hand data
    var mhHands = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/5/public/values?alt=json",
      'async': false
    });
    mhHands = JSON.parse(mhHands.responseText);
  
    //init Hand  options
    for (i = 0; i < mhHands.feed.entry.length; i++) {
      $("#mhHandSelect").append("<option value='" + i + "'>" +
        mhHands.feed.entry[i].gsx$mhitemname.$t + " " +
        "</option>");
    }
  
    //get Legs data
    var mhLegs = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/6/public/values?alt=json",
      'async': false
    });
    mhLegs = JSON.parse(mhLegs.responseText);
  
    //init Legs  options
    for (i = 0; i < mhLegs.feed.entry.length; i++) {
      $("#mhLegsSelect").append("<option value='" + i + "'>" +
        mhLegs.feed.entry[i].gsx$mhitemname.$t + " " +
        "</option>");
    }
  
    //get Boot  data
    var mhBoots = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/7/public/values?alt=json",
      'async': false
    });
    mhBoots = JSON.parse(mhBoots.responseText);
  
    //init Boots  options
    for (i = 0; i < mhBoots.feed.entry.length; i++) {
      $("#mhBootsSelect").append("<option value='" + i + "'>" +
        mhBoots.feed.entry[i].gsx$mhitemname.$t + " " +
        "</option>");
    }
  
    //get Charm data
    var mhCharms = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/12/public/values?alt=json",
      'async': false
    });
    mhCharms = JSON.parse(mhCharms.responseText);
  
    //init Charm options
    for (i = 0; i < mhCharms.feed.entry.length; i++) {
      $("#mhCharmSelect").append("<option value='" + i + "'>" +
        mhCharms.feed.entry[i].gsx$mhitemname.$t + " " +
        "</option>");
    }
  
  
  
    //initialise slot dropdowns
    var mhSmallDecoData = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/8/public/values?alt=json",
      'async': false
    });
    mhSmallDecoData = JSON.parse(mhSmallDecoData.responseText);
  
    $('#SmallDecoList').html("<option></option>");
    for (i = 0; i < mhSmallDecoData.feed.entry.length; i++) {
      $('#SmallDecoList').append("<option value='" + i + "'>" +
        mhSmallDecoData.feed.entry[i].gsx$mhdeconame.$t + " " +
        "</option>");
    }
  
    var mhMediumDecoData = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/9/public/values?alt=json",
      'async': false
    });
    mhMediumDecoData = JSON.parse(mhMediumDecoData.responseText);
  
    $('#MeduimDecoList').html("<option></option>");
    for (i = 0; i < mhMediumDecoData.feed.entry.length; i++) {
      $('#MediumDecoList').append("<option value='" + i + "'>" +
        mhMediumDecoData.feed.entry[i].gsx$mhdeconame.$t + " " +
        "</option>");
    }
  
    var mhBigDecoData = $.getJSON({
      'url': "https://spreadsheets.google.com/feeds/list/1xBBqcMfvVD7tA7uhBlod1saO-l8M46bAOLdv5XRhmwc/10/public/values?alt=json",
      'async': false
    });
    mhBigDecoData = JSON.parse(mhBigDecoData.responseText);
  
    $('#BigDecoList').html("<option></option>");
    for (i = 0; i < mhBigDecoData.feed.entry.length; i++) {
      $('#BigDecoList').append("<option value='" + i + "'>" +
        mhBigDecoData.feed.entry[i].gsx$mhdeconame.$t + " " +
        "</option>");
    }
  
    $("#mhwcComms1").click(function() {
      if ($("#mhwcComms1msg").is(":visible")) {
        $("#mhwcComms1msg").hide("slow", function() {
          // Animation complete.
        });
      } else {
        $("#mhwcComms1msg").show("slow", function() {
          // Animation complete.
        });
      }
  
    });
  
    $("#mhwcComms2").click(function() {
      if ($("#mhwcComms2msg").is(":visible")) {
        $("#mhwcComms2msg").hide("slow", function() {
          // Animation complete.
        });
      } else {
        $("#mhwcComms2msg").show("slow", function() {
          // Animation complete.
        });
      }
  
    });
  
    //function mhChangeEQSKILLS (mhSelect,mhS1,mhS1Amt,mhS2,mhS2Amt,mhSL1,mhSL2,mhSL3);
    //
    /*
    $('#mhHelmSelect').on('change', function() {\
        mhChangeEQSkILLS ("#mhHelmSelect","#mhHelmSelectSkill1","#mhHelmSelectSkill1amt".......);
      CompileSkills();
      });
    */
  
    function mhChangeSlotClass(mhObj, i, mhSelSlot1, mhSelSlot2, mhSelSlot3) {
      //SLOT 1
      if (i === null) {
        $("#" + mhSelSlot1)
          .empty()
          .val([])
          .attr("data-placeholder", "No Slot");
        $("#" + mhSelSlot1).removeClass();
        $("#" + mhSelSlot2)
          .empty()
          .val([])
          .attr("data-placeholder", "No Slot");
        $("#" + mhSelSlot2).removeClass();
        $("#" + mhSelSlot3)
          .empty()
          .val([])
          .attr("data-placeholder", "No Slot");
        $("#" + mhSelSlot3).removeClass();
      } else {
        switch (mhObj.feed.entry[i].gsx$mhslot1.$t) {
          case "none":
            $("#" + mhSelSlot1)
              .empty()
              .val([])
              .attr("data-placeholder", "No Slot");
            $("#" + mhSelSlot1).removeClass();
            break;
          case "small":
            $("#" + mhSelSlot1)
              .removeClass()
              .addClass('smallslot')
              .html($("#SmallDecoList > option").clone())
              .attr("data-placeholder", "Small").val("").focus().blur()
              .addClass('unslotted');
            break;
          case "medium":
            $("#" + mhSelSlot1)
              .removeClass()
              .addClass('mediumslot')
              .html($("#MediumDecoList > option").clone())
              .attr("data-placeholder", "Medium").val("").focus().blur()
              .addClass('unslotted');
            break;
          case "big":
            $("#" + mhSelSlot1)
              .removeClass()
              .addClass('bigslot')
              .html($("#BigDecoList > option").clone())
              .attr("data-placeholder", "Big").val("").focus().blur()
              .addClass('unslotted');
            break;
          default:
            $("#" + mhSelSlot1)
              .empty()
              .append('<option>No Slot</option>')
              .find('option:first')
              .attr("selected", "selected");
            $("#" + mhSelSlot1).removeClass();
            break;
        }
        //SLOT 2
        switch (mhObj.feed.entry[i].gsx$mhslot2.$t) {
          case "none":
            $("#" + mhSelSlot2)
              .empty()
              .val([])
              .attr("data-placeholder", "No Slot");
            $("#" + mhSelSlot2).removeClass();
            break;
          case "small":
            $("#" + mhSelSlot2)
              .removeClass()
              .addClass('smallslot')
              .html($("#SmallDecoList > option").clone())
              .attr("data-placeholder", "Small").val("").focus().blur()
              .addClass('unslotted');
            break;
          case "medium":
            $("#" + mhSelSlot2)
              .removeClass()
              .addClass('mediumslot')
              .html($("#MediumDecoList > option").clone())
              .attr("data-placeholder", "Medium").val("").focus().blur()
              .addClass('unslotted');
            break;
          case "big":
            $("#" + mhSelSlot2)
              .removeClass()
              .addClass('bigslot')
              .html($("#BigDecoList > option").clone())
              .attr("data-placeholder", "Big").val("").focus().blur()
              .addClass('unslotted');
            break;
          default:
            $("#" + mhSelSlot2)
              .empty()
              .append('<option>No Slot</option>')
              .find('option:first')
              .attr("selected", "selected");
            $("#" + mhSelSlot2).removeClass();
            break;
        }
        //SLOT 3
        switch (mhObj.feed.entry[i].gsx$mhslot3.$t) {
          case "none":
            $("#" + mhSelSlot3)
              .empty()
              .val([])
              .attr("data-placeholder", "No Slot");
            $("#" + mhSelSlot3).removeClass();
            break;
          case "small":
            $("#" + mhSelSlot3)
              .removeClass()
              .addClass('smallslot')
              .html($("#SmallDecoList > option").clone())
              .attr("data-placeholder", "Small").val("").focus().blur()
              .addClass('unslotted');
            break;
          case "medium":
            $("#" + mhSelSlot3)
              .removeClass()
              .addClass('mediumslot')
              .html($("#MediumDecoList > option").clone())
              .attr("data-placeholder", "Medium").val("").focus().blur()
              .addClass('unslotted');
            break;
          case "big":
            $("#" + mhSelSlot3)
              .removeClass()
              .addClass('bigslot')
              .html($("#BigDecoList > option").clone())
              .attr("data-placeholder", "Big").val("").focus().blur()
              .addClass('unslotted');
            break;
          default:
            $("#" + mhSelSlot3)
              .empty()
              .append('<option>No Slot</option>')
              .find('option:first')
              .attr("selected", "selected");
            $("#" + mhSelSlot3).removeClass();
            break;
        }
      }
  
    }
  
    function mhChangeEQ(mhSelect, mhS1, mhS1Amt, mhS2, mhS2Amt, mhSL1, mhSL2, mhSL3, mhObj) {
      $("#" + mhSL1).removeClass();
      $("#" + mhSL2).removeClass();
      $("#" + mhSL3).removeClass();
      var i = $("#" + mhSelect).val();
      //if selection is NULL
      if (i === null) {
        $("#" + mhS1).text("");
        $("#" + mhS1Amt).text("");
        $("#" + mhS2).text("");
        $("#" + mhS2Amt).text("");
        //mhChangeSlotClass (mhObj,i,mhSL1,mhSL2,mhSL3);
      } else {
  
        //write skills to skill cells on equipment table
        $("#" + mhS1).text(mhObj.feed.entry[i].gsx$mhskill1.$t);
        $("#" + mhS1Amt).text(mhObj.feed.entry[i].gsx$mhskill1amt.$t);
        $("#" + mhS2).text(mhObj.feed.entry[i].gsx$mhskill2.$t);
        $("#" + mhS2Amt).text(mhObj.feed.entry[i].gsx$mhskill2amt.$t);
  
      }
  
  
      //populate slots and assign type of slots on the equipment table
  
      mhChangeSlotClass(mhObj, i, mhSL1, mhSL2, mhSL3);
  
  
      // Fixes chosen with the newly created HTML elements
      $("#" + mhSL1).trigger("chosen:updated");
      $("#" + mhSL2).trigger("chosen:updated");
      $("#" + mhSL3).trigger("chosen:updated");
  
      CompileSkills();
  
  
    }
  
    function mhChangeCharm(mhSelect, mhS1, mhS1Amt, mhS2, mhS2Amt, mhObj) {
      var i = $("#" + mhSelect).val();
      //If Null - unequip
      if (i === null) {
        $("#" + mhS1).text("");
        $("#" + mhS1Amt).text("");
        $("#" + mhS2).text("");
        $("#" + mhS2Amt).text("");
      } else {
  
        //write skills to skill cells on equipment table
        $("#" + mhS1).text(mhObj.feed.entry[i].gsx$mhskill1.$t);
        $("#" + mhS1Amt).text(mhObj.feed.entry[i].gsx$mhskill1amt.$t);
        $("#" + mhS2).text(mhObj.feed.entry[i].gsx$mhskill2.$t);
        $("#" + mhS2Amt).text(mhObj.feed.entry[i].gsx$mhskill2amt.$t);
        CompileSkills();
      }
    }
  
    //When user selects equipment, populate skills and slots on the same row
    $('#mhHelmSelect').on('change',
      function() {
        mhChangeEQ("mhHelmSelect", "mhHelmSelectSkill1", "mhHelmSelectSkill1amt", "mhHelmSelectSkill2", "mhHelmSelectSkill2amt", "mhHelmSelectSlot1", "mhHelmSelectSlot2", "mhHelmSelectSlot3", mhHelms);
      });
  
    $('#mhBodySelect').on('change',
      function() {
        mhChangeEQ("mhBodySelect", "mhBodySelectSkill1", "mhBodySelectSkill1amt", "mhBodySelectSkill2", "mhBodySelectSkill2amt", "mhBodySelectSlot1", "mhBodySelectSlot2", "mhBodySelectSlot3", mhBody);
      });
  
    $('#mhHandSelect').on('change',
      function() {
        mhChangeEQ("mhHandSelect", "mhHandSelectSkill1", "mhHandSelectSkill1amt", "mhHandSelectSkill2", "mhHandSelectSkill2amt", "mhHandSelectSlot1", "mhHandSelectSlot2", "mhHandSelectSlot3", mhHands);
      });
  
    $('#mhLegsSelect').on('change',
      function() {
        mhChangeEQ("mhLegsSelect", "mhLegsSelectSkill1", "mhLegsSelectSkill1amt", "mhLegsSelectSkill2", "mhLegsSelectSkill2amt", "mhLegsSelectSlot1", "mhLegsSelectSlot2", "mhLegsSelectSlot3", mhLegs);
      });
  
    $('#mhBootsSelect').on('change',
      function() {
        mhChangeEQ("mhBootsSelect", "mhBootsSelectSkill1", "mhBootsSelectSkill1amt", "mhBootsSelectSkill2", "mhBootsSelectSkill2amt", "mhBootsSelectSlot1", "mhBootsSelectSlot2", "mhBootsSelectSlot3", mhBoots);
      });
  
    $('#mhCharmSelect').on('change',
      function() {
        mhChangeCharm("mhCharmSelect", "mhCharmSelectSkill1", "mhCharmSelectSkill1amt", "mhCharmSelectSkill2", "mhCharmSelectSkill2amt", mhCharms);
      });
  
  
    //Slot Clicks
    $('#mhHelmSelectSlot1, #mhHelmSelectSlot2, #mhHelmSelectSlot3, #mhWeaponSelectSlot1, #mhWeaponSelectSlot2, #mhWeaponSelectSlot3, #mhBodySelectSlot1, #mhBodySelectSlot2, #mhBodySelectSlot3, #mhHandSelectSlot1, #mhHandSelectSlot2, #mhHandSelectSlot3, #mhLegsSelectSlot1, #mhLegsSelectSlot2, #mhLegsSelectSlot3, #mhBootsSelectSlot1, #mhBootsSelectSlot2, #mhBootsSelectSlot3').on('change', function() {
      $(this).removeClass("unslotted");
      CompileSkills();
      var CurrentClass = $(this).attr('class');
      $(this).removeClass("smallslot");
      $(this).removeClass("mediumslot");
      $(this).removeClass("bigslot");
      $(this).addClass(CurrentClass);
    });
  
    //initialise equipment options to chosen
    $("#mhHelmSelect, #mhBodySelect, #mhHandSelect, #mhLegsSelect, #mhBootsSelect, #mhCharmSelect").chosen({});
  
    //initisalise equipment slot options to chosen
    $("#mhHelmSelectSlot1, #mhHelmSelectSlot2, #mhHelmSelectSlot3, #mhBodySelectSlot1, #mhBodySelectSlot2, #mhBodySelectSlot3, #mhHandSelectSlot1, #mhHandSelectSlot2, #mhHandSelectSlot3, #mhLegsSelectSlot1, #mhLegsSelectSlot2, #mhLegsSelectSlot3, #mhBootsSelectSlot1, #mhBootsSelectSlot2, #mhBootsSelectSlot3 ").chosen({});
  
    //initialise weapon slot selectors to chosen
    $("#mhWeaponSlot1SizeSelector, #mhWeaponSlot2SizeSelector, #mhWeaponSlot3SizeSelector, #mhWeaponSelectSlot1, #mhWeaponSelectSlot2, #mhWeaponSelectSlot3").chosen({});
  
    //initialise slots options to chosen
    //$("#SmallDecoList, #MediumDecoList, #BigDecoList").chosen({});
  
    //START CompileSkills - select all skills from the mhSelectTable and add them up
  
    function CompileSkills() {
  
      //Slot Get
      function HeavenSlot(SlotID) {
  
        if ($("#" + SlotID).hasClass("Unslotted")) {
  
        } else {
          var TempJunkJunk;
          switch ($("#" + SlotID).attr('class')) {
            case "smallslot":
              TempJunkJunk = mhSmallDecoData.feed.entry[$("#" + SlotID).val()].gsx$mhdecoskill.$t;
              break;
            case "mediumslot":
              TempJunkJunk = mhMediumDecoData.feed.entry[$("#" + SlotID).val()].gsx$mhdecoskill.$t;
              break;
            case "bigslot":
              TempJunkJunk = mhBigDecoData.feed.entry[$("#" + SlotID).val()].gsx$mhdecoskill.$t;
              break;
          }
          return TempJunkJunk;
        }
      }
  
      //Reset values of all skills
      for (var i = 0; i < mhSkills.feed.entry.length; i++) {
        mhSkills.feed.entry[i].gsx$skillamt.$t = 0;
      }
      //populates Skill Summary table for each of the selected options
      $.each(mhSkills.feed.entry, function() {
        //weapon
        if (this.gsx$skillname.$t == HeavenSlot("mhWeaponSelectSlot1")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhWeaponSelectSlot2")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhWeaponSelectSlot3")) {
          this.gsx$skillamt.$t++;
        }
        //helm
        if (this.gsx$skillname.$t == $("#mhHelmSelectSkill1").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhHelmSelectSkill1amt").text(), 10);
        }
        if (this.gsx$skillname.$t == $("#mhHelmSelectSkill2").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhHelmSelectSkill2amt").text(), 10);
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhHelmSelectSlot1")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhHelmSelectSlot2")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhHelmSelectSlot3")) {
          this.gsx$skillamt.$t++;
        }
        //body
        if (this.gsx$skillname.$t == $("#mhBodySelectSkill1").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhBodySelectSkill1amt").text(), 10);
        }
        if (this.gsx$skillname.$t == $("#mhBodySelectSkill2").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhBodySelectSkill2amt").text(), 10);
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhBodySelectSlot1")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhBodySelectSlot2")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhBodySelectSlot3")) {
          this.gsx$skillamt.$t++;
        }
        //hands
        if (this.gsx$skillname.$t == $("#mhHandSelectSkill1").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhHandSelectSkill1amt").text(), 10);
        }
        if (this.gsx$skillname.$t == $("#mhHandSelectSkill2").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhHandSelectSkill2amt").text(), 10);
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhHandSelectSlot1")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhHandSelectSlot2")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhHandSelectSlot3")) {
          this.gsx$skillamt.$t++;
        }
        //legs
        if (this.gsx$skillname.$t == $("#mhLegsSelectSkill1").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhLegsSelectSkill1amt").text(), 10);
        }
        if (this.gsx$skillname.$t == $("#mhLegsSelectSkill2").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhLegsSelectSkill2amt").text(), 10);
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhLegsSelectSlot1")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhLegsSelectSlot2")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhLegsSelectSlot3")) {
          this.gsx$skillamt.$t++;
        }
        //boots
        if (this.gsx$skillname.$t == $("#mhBootsSelectSkill1").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhBootsSelectSkill1amt").text(), 10);
        }
        if (this.gsx$skillname.$t == $("#mhBootsSelectSkill2").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhBootsSelectSkill2amt").text(), 10);
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhBootsSelectSlot1")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhBootsSelectSlot2")) {
          this.gsx$skillamt.$t++;
        }
        if (this.gsx$skillname.$t == HeavenSlot("mhBootsSelectSlot3")) {
          this.gsx$skillamt.$t++;
        }
        //charm  
        if (this.gsx$skillname.$t == $("#mhCharmSelectSkill1").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhCharmSelectSkill1amt").text(), 10);
        }
        if (this.gsx$skillname.$t == $("#mhCharmSelectSkill2").text()) {
          this.gsx$skillamt.$t += parseInt($("#mhCharmSelectSkill2amt").text(), 10);
        }
  
      });
  
      //check if a skill is already max, if it is then it will always be set to its max and never go above
      $('#mhOvercap').empty();
      $.each(mhSkills.feed.entry, function() {
        if (this.gsx$skillamt.$t > this.gsx$skillmax.$t) {
          this.gsx$skillamt.$t = this.gsx$skillmax.$t;
          $('#mhOvercap').append("<div>" + this.gsx$skillname.$t + " is over the cap of " + this.gsx$skillamt.$t + "! </div>");
        }
  
      });
  
      //rebuild Skill Summary table with all skills that have values > 0
      $('#mhSkillSummary').empty();
      $('#mhSkillSummary').append("<tbody><tr><th>Skill Summary</th><th>#</th></tr></tbody>");
  
      $.each(mhSkills.feed.entry, function() {
        if (this.gsx$skillamt.$t !== 0) {
          $('#mhSkillSummary').append("<tr><td> " + this.gsx$skillname.$t + " </td><td> " + this.gsx$skillamt.$t + " </td>" + "</tr>");
        }
      });
      //END CompileSkills - select all skills from the mhSelectTable and add them up
  
      //TESTOUTPUT - delete when compiling
      /*
      $("#HClassSL1").text($("#mhHelmSelectSlot1").attr('Class'));
    $("#HClassSL2").text($("#mhHelmSelectSlot2").attr('Class'));
    $("#HClassSL3").text($("#mhHelmSelectSlot3").attr('Class'));
    */
    }
  
    function SetWeaponSlots(tempslotsize, tempwpnslotid) {
      var tempdestinationslot = "kkkkk";
  
      switch (tempwpnslotid) {
        case "mhWeaponSlot1SizeSelector":
          tempdestinationslot = "mhWeaponSelectSlot1";
          break;
        case "mhWeaponSlot2SizeSelector":
          tempdestinationslot = "mhWeaponSelectSlot2";
          break;
        case "mhWeaponSlot3SizeSelector":
          tempdestinationslot = "mhWeaponSelectSlot3";
          break;
      }
  
      switch (tempslotsize) {
        case "none":
          $("#" + tempdestinationslot)
            .empty()
            .append('<option>No Slot</option>')
            .find('option:first')
            .attr("selected", "selected");
          $("#" + tempdestinationslot).removeClass();
          break;
        case "small":
          $("#" + tempdestinationslot)
            .removeClass()
            .addClass('smallslot')
            .html($("#SmallDecoList > option").clone())
            .attr("data-placeholder", "Small").val("").focus().blur()
            .addClass('unslotted');
          break;
        case "medium":
          $("#" + tempdestinationslot)
            .removeClass()
            .addClass('mediumslot')
            .html($("#MediumDecoList > option").clone())
            .attr("data-placeholder", "Medium").val("").focus().blur()
            .addClass('unslotted');
          break;
        case "big":
          $("#" + tempdestinationslot).removeClass()
            .addClass('bigslot')
            .html($("#BigDecoList > option").clone())
            .attr("data-placeholder", "Big").val("").focus().blur()
            .addClass('unslotted');
          break;
      }
      $("#" + tempdestinationslot).trigger("chosen:updated");
    }
    // on change of weapon slot size selector
    $('#mhWeaponSlot1SizeSelector, #mhWeaponSlot2SizeSelector, #mhWeaponSlot3SizeSelector').on('change', function() {
      var tempslotsize = $(this).val();
      var tempwpnslotid = $(this).attr('id');
      SetWeaponSlots(tempslotsize, tempwpnslotid);
      CompileSkills();
    });
    // SAVE TO LOCAL FUNCTIONALITY
    $("#SaveLocalBtn").click(function() {
      if (typeof(Storage) !== "undefined") {
  
        localStorage.setItem("SavedHelm", $("#mhHelmSelect").val());
        localStorage.setItem("SavedHelmS1", $("#mhHelmSelectSlot1").val());
        localStorage.setItem("SavedHelmS2", $("#mhHelmSelectSlot2").val());
        localStorage.setItem("SavedHelmS3", $("#mhHelmSelectSlot3").val());
  
        localStorage.setItem("SavedBody", $("#mhBodySelect").val());
        localStorage.setItem("SavedBodyS1", $("#mhBodySelectSlot1").val());
        localStorage.setItem("SavedBodyS2", $("#mhBodySelectSlot2").val());
        localStorage.setItem("SavedBodyS3", $("#mhBodySelectSlot3").val());
  
        localStorage.setItem("SavedHand", $("#mhHandSelect").val());
        localStorage.setItem("SavedHandS1", $("#mhHandSelectSlot1").val());
        localStorage.setItem("SavedHandS2", $("#mhHandSelectSlot2").val());
        localStorage.setItem("SavedHandS3", $("#mhHandSelectSlot3").val());
  
        localStorage.setItem("SavedLegs", $("#mhLegsSelect").val());
        localStorage.setItem("SavedLegsS1", $("#mhLegsSelectSlot1").val());
        localStorage.setItem("SavedLegsS2", $("#mhLegsSelectSlot2").val());
        localStorage.setItem("SavedLegsS3", $("#mhLegsSelectSlot3").val());
  
        localStorage.setItem("SavedBoots", $("#mhBootsSelect").val());
        localStorage.setItem("SavedBootsS1", $("#mhBootsSelectSlot1").val());
        localStorage.setItem("SavedBootsS2", $("#mhBootsSelectSlot2").val());
        localStorage.setItem("SavedBootsS3", $("#mhBootsSelectSlot3").val());
  
        localStorage.setItem("SavedCharm", $("#mhCharmSelect").val());
  
        localStorage.setItem("SavedWeaponS1Size", $("#mhWeaponSlot1SizeSelector").val());
        localStorage.setItem("SavedWeaponS2Size", $("#mhWeaponSlot2SizeSelector").val());
        localStorage.setItem("SavedWeaponS3Size", $("#mhWeaponSlot3SizeSelector").val());
  
        localStorage.setItem("SavedWeaponS1", $("#mhWeaponSelectSlot1").val());
        localStorage.setItem("SavedWeaponS2", $("#mhWeaponSelectSlot2").val());
        localStorage.setItem("SavedWeaponS3", $("#mhWeaponSelectSlot3").val());
  
        alert("Save successful");
  
      } else {
        alert("Your browser may not support local storage saving.");
      }
    });
    // LOAD FUNCTIONALITY
    $("#LoadLocalBtn").click(function() {
  
      //Could really use a "Function loadequip" and "Function loadslot"...//
  
      // Load the selected helm
      //var temploadhelm = ;
      if (localStorage.getItem("SavedHelm").length <= 0) {
        $("#mhHelmSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhHelmSelect')
          .val(localStorage.getItem("SavedHelm"))
          .trigger('change')
          .trigger("chosen:updated");
      }
  
      var temploadhelms1 = localStorage.getItem("SavedHelmS1");
      if (temploadhelms1.length <= 0) {} else {
        $('#mhHelmSelectSlot1').val(temploadhelms1)
          .trigger('change').trigger("chosen:updated");
      }
  
      var temploadhelms2 = localStorage.getItem("SavedHelmS2");
      if (temploadhelms2.length <= 0) {} else {
        $('#mhHelmSelectSlot2').val(temploadhelms2).trigger('change').trigger("chosen:updated");
      }
      var temploadhelms3 = localStorage.getItem("SavedHelmS3");
      if (temploadhelms3.length <= 0) {} else {
        $('#mhHelmSelectSlot3').val(temploadhelms3).trigger('change').trigger("chosen:updated");
      }
  
      //Load body from Local
      if (localStorage.getItem("SavedBody").length <= 0) {
        $("#mhBodySelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhBodySelect')
          .val(localStorage.getItem("SavedBody"))
          .trigger('change')
          .trigger("chosen:updated");
      }
  
      var temploadbodys1 = localStorage.getItem("SavedBodyS1");
      if (temploadbodys1.length <= 0) {} else {
        $('#mhBodySelectSlot1').val(temploadbodys1).trigger('change').trigger("chosen:updated");
      }
      var temploadbodys2 = localStorage.getItem("SavedBodyS2");
      if (temploadbodys2.length <= 0) {} else {
        $('#mhBodySelectSlot2').val(temploadbodys2).trigger('change').trigger("chosen:updated");
      }
      var temploadbodys3 = localStorage.getItem("SavedBodyS3");
      if (temploadbodys3.length <= 0) {} else {
        $('#mhBodySelectSlot3').val(temploadbodys3).trigger('change').trigger("chosen:updated");
      }
  
      //Load hand from Local
      if (localStorage.getItem("SavedHand").length <= 0) {
        $("#mhHandSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhHandSelect')
          .val(localStorage.getItem("SavedHand"))
          .trigger('change')
          .trigger("chosen:updated");
      }
  
      var temploadhands1 = localStorage.getItem("SavedHandS1");
      if (temploadhands1.length <= 0) {} else {
        $('#mhHandSelectSlot1').val(temploadhands1).trigger('change').trigger("chosen:updated");
      }
      var temploadhands2 = localStorage.getItem("SavedHandS2");
      if (temploadhands2.length <= 0) {} else {
        $('#mhHandSelectSlot2').val(temploadhands2).trigger('change').trigger("chosen:updated");
      }
      var temploadhands3 = localStorage.getItem("SavedHandS3");
      if (temploadhands3.length <= 0) {} else {
        $('#mhHandSelectSlot3').val(temploadhands3).trigger('change').trigger("chosen:updated");
      }
  
      //Load legs from Local
      if (localStorage.getItem("SavedLegs").length <= 0) {
        $("#mhLegsSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhLegsSelect')
          .val(localStorage.getItem("SavedLegs"))
          .trigger('change')
          .trigger("chosen:updated");
      }
  
      var temploadlegss1 = localStorage.getItem("SavedLegsS1");
      if (temploadlegss1.length <= 0) {} else {
        $('#mhLegsSelectSlot1').val(temploadlegss1).trigger('change').trigger("chosen:updated");
      }
      var temploadlegss2 = localStorage.getItem("SavedLegsS2");
      if (temploadlegss2.length <= 0) {} else {
        $('#mhLegsSelectSlot2').val(temploadlegss2).trigger('change').trigger("chosen:updated");
      }
      var temploadlegss3 = localStorage.getItem("SavedLegsS3");
      if (temploadlegss3.length <= 0) {} else {
        $('#mhLegsSelectSlot3').val(temploadlegss3).trigger('change').trigger("chosen:updated");
      }
  
      //Load boots from Local
      if (localStorage.getItem("SavedBoots").length <= 0) {
        $("#mhBootsSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhBootsSelect')
          .val(localStorage.getItem("SavedBoots"))
          .trigger('change')
          .trigger("chosen:updated");
      }
  
      var temploadbootss1 = localStorage.getItem("SavedBootsS1");
      if (temploadbootss1.length <= 0) {} else {
        $('#mhBootsSelectSlot1').val(temploadbootss1).trigger('change').trigger("chosen:updated");
      }
      var temploadbootss2 = localStorage.getItem("SavedBootsS2");
      if (temploadbootss2.length <= 0) {} else {
        $('#mhBootsSelectSlot2').val(temploadbootss2).trigger('change').trigger("chosen:updated");
      }
      var temploadbootss3 = localStorage.getItem("SavedBootsS3");
      if (temploadbootss3.length <= 0) {} else {
        $('#mhBootsSelectSlot3').val(temploadbootss3).trigger('change').trigger("chosen:updated");
      }
  
      //Load charm from Local
      var temploadcharm = localStorage.getItem("SavedCharm");
      if (temploadcharm.length <= 0) {
        $("#mhCharmSelect").val([]);
        $('#mhCharmSelect').trigger('change').trigger('chosen:updated');
      } else {
        $('#mhCharmSelect').val(temploadcharm).trigger('change').trigger("chosen:updated");
      }
  
      //Load weapon from local
      var temploadwpns1size = localStorage.getItem("SavedWeaponS1Size");
      $('#mhWeaponSlot1SizeSelector').val(temploadwpns1size)
        .trigger('change')
        .trigger("chosen:updated");
  
      var temploadwpns1 = localStorage.getItem("SavedWeaponS1");
      if (temploadwpns1.length <= 0) {} else {
        $('#mhWeaponSelectSlot1').val(temploadwpns1).trigger('change').trigger("chosen:updated");
      }
  
      var temploadwpns2size = localStorage.getItem("SavedWeaponS2Size");
      if (temploadwpns2size.length <= 0) {} else {
        $('#mhWeaponSlot2SizeSelector').val(temploadwpns2size).trigger('change').trigger("chosen:updated");
      }
  
      var temploadwpns2 = localStorage.getItem("SavedWeaponS2");
      if (temploadwpns2.length <= 0) {} else {
        $('#mhWeaponSelectSlot2').val(temploadwpns2).trigger('change').trigger("chosen:updated");
      }
  
      var temploadwpns3size = localStorage.getItem("SavedWeaponS3Size");
      if (temploadwpns3size.length <= 0) {} else {
        $('#mhWeaponSlot3SizeSelector').val(temploadwpns3size).trigger('change').trigger("chosen:updated");
      }
  
      var temploadwpns3 = localStorage.getItem("SavedWeaponS3");
      if (temploadwpns3.length <= 0) {} else {
        $('#mhWeaponSelectSlot3').val(temploadwpns3).trigger('change').trigger("chosen:updated");
      }
  
  
    });
  
    $("#ClearLocalBtn").click(function() {
      localStorage.clear();
      alert("Save cleared from local storage");
    });
  
  
    $("#ExportCodeBtn").click(function() {
  
      function ConvertNullNoneUndef(ConvertedVar) {
  
        if (ConvertedVar === null ||
          ConvertedVar === "none" ||
          ConvertedVar === undefined ||
          ConvertedVar === "No Slot" ||
          ConvertedVar === "None" ||
          ConvertedVar.length <= 0) {
          ConvertedVar = "n";
        } else {
  
          if (ConvertedVar === "small" || ConvertedVar === "medium" || ConvertedVar === "big") {
            switch (ConvertedVar) {
              case "small":
                {
                  ConvertedVar = "s";
                }
                break;
              case "medium":
                {
                  ConvertedVar = "m";
                }
                break;
              case "big":
                {
                  ConvertedVar = "b";
                }
                break;
            }
          }
        }
  
  
        return (ConvertedVar);
      }
  
      var a = ConvertNullNoneUndef($("#mhHelmSelect").val());
      var b = ConvertNullNoneUndef($("#mhHelmSelectSlot1").val());
      var c = ConvertNullNoneUndef($("#mhHelmSelectSlot2").val());
      var d = ConvertNullNoneUndef($("#mhHelmSelectSlot3").val());
  
      var e = ConvertNullNoneUndef($("#mhBodySelect").val());
      var f = ConvertNullNoneUndef($("#mhBodySelectSlot1").val());
      var g = ConvertNullNoneUndef($("#mhBodySelectSlot2").val());
      var h = ConvertNullNoneUndef($("#mhBodySelectSlot3").val());
  
      var i = ConvertNullNoneUndef($("#mhHandSelect").val());
      var j = ConvertNullNoneUndef($("#mhHandSelectSlot1").val());
      var k = ConvertNullNoneUndef($("#mhHandSelectSlot2").val());
      var l = ConvertNullNoneUndef($("#mhHandSelectSlot3").val());
  
      var m = ConvertNullNoneUndef($("#mhLegsSelect").val());
      var n = ConvertNullNoneUndef($("#mhLegsSelectSlot1").val());
      var o = ConvertNullNoneUndef($("#mhLegsSelectSlot2").val());
      var p = ConvertNullNoneUndef($("#mhLegsSelectSlot3").val());
  
      var q = ConvertNullNoneUndef($("#mhBootsSelect").val());
      var r = ConvertNullNoneUndef($("#mhBootsSelectSlot1").val());
      var s = ConvertNullNoneUndef($("#mhBootsSelectSlot2").val());
      var t = ConvertNullNoneUndef($("#mhBootsSelectSlot3").val());
  
      var u = ConvertNullNoneUndef($("#mhCharmSelect").val());
  
      var v = ConvertNullNoneUndef($("#mhWeaponSlot1SizeSelector").val());
      var w = ConvertNullNoneUndef($("#mhWeaponSlot2SizeSelector").val());
      var x = ConvertNullNoneUndef($("#mhWeaponSlot3SizeSelector").val());
  
      var y = ConvertNullNoneUndef($("#mhWeaponSelectSlot1").val());
      var z = ConvertNullNoneUndef($("#mhWeaponSelectSlot2").val());
      var a1 = ConvertNullNoneUndef($("#mhWeaponSelectSlot3").val());
  
      $("#IEStringArea").val(window.location.href + "?mhwclfurl=" + a + "j" + b + "j" + c + "j" + d + "j" + e + "j" + f + "j" + g + "j" + h + "j" + i + "j" + j + "j" + k + "j" + l + "j" + m + "j" + n + "j" + o + "j" + p + "j" + q + "j" + r + "j" + s + "j" + t + "j" + u + "j" + v + "j" + w + "j" + x + "j" + y + "j" + z + "j" + a1 + "j");
  
  
    });
  
    $("#ImportCodeBtn").click(function() {
  
    });
  
    function mhwcLOADER(loadSource) {
  
      function NormalizeArray(ArraytoNormalize) {
        for (var i = 0; i < ArraytoNormalize.length; i++) {
          if (ArraytoNormalize[i] == "s" ||
            ArraytoNormalize[i] == "m" ||
            ArraytoNormalize[i] == "b") {
            switch (ArraytoNormalize[i]) {
              case "s":
                ArraytoNormalize[i] = "small";
                break;
              case "m":
                ArraytoNormalize[i] = "medium";
                break;
              case "b":
                ArraytoNormalize[i] = "big";
                break;
            }
          }
        }
        return (ArraytoNormalize);
      }
  
      function ObtainTrueLoadString(ArraytoDecrypt) {
        var tempdecryptedarray = [];
        var temppusheditem = "";
        for (var i = 0; i < ArraytoDecrypt.length; i++) {
          if (ArraytoDecrypt[i] == "=") {
            temppusheditem = "";
          } else
          if (ArraytoDecrypt[i] != "j") {
            temppusheditem += ArraytoDecrypt[i];
          } else
          if (ArraytoDecrypt[i] == "j") {
            tempdecryptedarray.push(temppusheditem);
            temppusheditem = "";
          }
        }
        return (tempdecryptedarray);
      }
  
      var StringLoadArr = ObtainTrueLoadString(loadSource);
      StringLoadArr = NormalizeArray(StringLoadArr);
      alert("Loading Build: " + StringLoadArr);
  
      //load helm  equipment slot
      if (StringLoadArr[0] === "n") {
        $("#mhHelmSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhHelmSelect')
          .val(StringLoadArr[0])
          .trigger('change')
          .trigger("chosen:updated");
      }
      // load helm slots
      if (StringLoadArr[1] == "n") {} else {
        $('#mhHelmSelectSlot1').val(StringLoadArr[1]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[2] == "n") {} else {
        $('#mhHelmSelectSlot2').val(StringLoadArr[2]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[3] == "n") {} else {
        $('#mhHelmSelectSlot3').val(StringLoadArr[3]).trigger('change').trigger("chosen:updated");
      }
  
      //load body  equipment slot
      if (StringLoadArr[4] === "n") {
        $("#mhBodySelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhBodySelect')
          .val(StringLoadArr[4])
          .trigger('change')
          .trigger("chosen:updated");
      }
      // load body slots
      if (StringLoadArr[5] === "n") {} else {
        $('#mhBodySelectSlot1').val(StringLoadArr[5]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[6] === "n") {} else {
        $('#mhBodySelectSlot2').val(StringLoadArr[6]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[7] === "n") {} else {
        $('#mhBodySelectSlot3').val(StringLoadArr[7]).trigger('change').trigger("chosen:updated");
      }
      //load hand  equipment slot
      if (StringLoadArr[8] === "n") {
        $("#mhHandSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhHandSelect')
          .val(StringLoadArr[8])
          .trigger('change')
          .trigger("chosen:updated");
      }
      // load hand slots
      if (StringLoadArr[9] == "n") {} else {
        $('#mhHandSelectSlot1').val(StringLoadArr[9]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[10] == "n") {} else {
        $('#mhHandSelectSlot2').val(StringLoadArr[10]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[11] == "n") {} else {
        $('#mhHandSelectSlot3').val(StringLoadArr[11]).trigger('change').trigger("chosen:updated");
      }
  
      //load legs  equipment slot
      if (StringLoadArr[12] === "n") {
        $("#mhLegsSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhLegsSelect')
          .val(StringLoadArr[12])
          .trigger('change')
          .trigger("chosen:updated");
      }
      // load legs slots
      if (StringLoadArr[13] == "n") {} else {
        $('#mhLegsSelectSlot1').val(StringLoadArr[13]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[14] == "n") {} else {
        $('#mhLegsSelectSlot2').val(StringLoadArr[14]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[15] == "n") {} else {
        $('#mhLegsSelectSlot3').val(StringLoadArr[15]).trigger('change').trigger("chosen:updated");
      }
  
      //load boots  equipment slot
      if (StringLoadArr[16] === "n") {
        $("#mhBootsSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhBootsSelect')
          .val(StringLoadArr[16])
          .trigger('change')
          .trigger("chosen:updated");
      }
      // load boots slots
      if (StringLoadArr[17] == "n") {} else {
        $('#mhBootsSelectSlot1').val(StringLoadArr[17]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[18] == "n") {} else {
        $('#mhBootsSelectSlot2').val(StringLoadArr[18]).trigger('change').trigger("chosen:updated");
      }
  
      if (StringLoadArr[19] == "n") {} else {
        $('#mhBootsSelectSlot3').val(StringLoadArr[19]).trigger('change').trigger("chosen:updated");
      }
      //load charm equipment slot
      if (StringLoadArr[20] === "n") {
        $("#mhCharmSelect")
          .val([])
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhCharmSelect')
          .val(StringLoadArr[20])
          .trigger('change')
          .trigger("chosen:updated");
      }
      //weapon slot 1   
      if (StringLoadArr[21] === "n") {
        $("#mhWeaponSlot1SizeSelector")
          .val("none")
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhWeaponSlot1SizeSelector')
          .val(StringLoadArr[21])
          .trigger('change')
          .trigger("chosen:updated");
      }
      if (StringLoadArr[24] == "n") {} else {
        $('#mhWeaponSelectSlot1').val(StringLoadArr[24]).trigger('change').trigger("chosen:updated");
      }
  
      //weapon slot 2   
      if (StringLoadArr[22] === "n") {
        $("#mhWeaponSlot2SizeSelector")
          .val("none")
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhWeaponSlot2SizeSelector')
          .val(StringLoadArr[22])
          .trigger('change')
          .trigger("chosen:updated");
      }
      if (StringLoadArr[25] == "n") {} else {
        $('#mhWeaponSelectSlot2').val(StringLoadArr[25]).trigger('change').trigger("chosen:updated");
      }
  
      //weapon slot 3   
      if (StringLoadArr[23] === "n") {
        $("#mhWeaponSlot3SizeSelector")
          .val("none")
          .trigger('change').trigger('chosen:updated');
      } else {
        $('#mhWeaponSlot3SizeSelector')
          .val(StringLoadArr[23])
          .trigger('change')
          .trigger("chosen:updated");
      }
      if (StringLoadArr[26] == "n") {} else {
        $('#mhWeaponSelectSlot3').val(StringLoadArr[26]).trigger('change').trigger("chosen:updated");
      }
    }
  
    if (window.location.search.indexOf('?mhwclfurl=') > -1) {
  
      function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        }
        return (false);
  
      }
  
      var sLoadfromurl = getQueryVariable("mhwclfurl")
  
      mhwcLOADER(sLoadfromurl);
    };
  
    $("#ImportCodeBtn").click(function() {
      mhwcLOADER($("#IEStringArea").val());
    });
  
    /*
    //experimental chosen css changer = success
    $('.chosen-drop').css({
      "width": "auto",
      "white-space": "nowrap"
    });*/
    console.log("Finished Loading Calc");
  });
  