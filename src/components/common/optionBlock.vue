<template>
  <div v-if="seltype === 'check'">
    <ol>
      <li v-for="(itm, index) in mylist" :key="index">
        <checkBoxElem
          v-on:checkBoxOptions="setCheckBoxOptions(index, mylist, getElemId(seltitle))"
          :name="'inp_chx' + index"
          :title="eltitle"
          :value="itm.add"
          :num="index"
          :v-model="itm"
          :extra="itm.extra"
          :checked="itm.status"
          :id="getElemId(seltitle)"
        />
      </li>
    </ol>
  </div>
  <div class="block-required" v-if="seltype === 'radio'">
    <ol>
      <li v-for="(itm, index) in mylist" :key="index">
        <radioBoxElem
          v-on:radioClicked="setRadioOption"
          :itmName="itm.name"
          :itmExtra="itm.extra"
          :id="getElemId(seltitle, index)"
          :eltitle="seltitle"
          :chxbool="itm.status"/>
      </li>
    </ol>
  </div>
  <div v-else-if="seltype === 'toggle'">
    <ol>
      <li>
        <toggleSwitchElem
          @toggleEmit="setToggleOption(selname, toggleExtraVal, getElemId(seltitle))"
          :sname="selname"
          :id="getElemId(seltitle)"
          :eltitle="seltitle"
          :extaval="toggleExtraVal"
          :checked="status"
          />
        
      </li>
    </ol>
  </div>
  <div v-else-if="seltype === 'sptextarea'">
    <textareaBoxElem
      :eltitle="seltitle"
      :id="getElemId(seltitle)"
      @setSpecialTextarea="setElemOption"
    />
  </div>

  <!-- <div v-else>
   {{seltype}}111
    </div> -->
</template>

<script>
import checkBoxElem from "@/components/common/optionsForm/checkForm.vue";
import radioBoxElem from "@/components/common/optionsForm/radioForm.vue";
import textareaBoxElem from "@/components/common/optionsForm/textareaSpecial.vue";
import toggleSwitchElem from "@/components/common/optionsForm/toggleSwitch.vue";
import { ref } from "vue";
export default {
  name: "optionBlock",
  props: ["title", "req", "options", "resetStatus"],
  setup(props, { emit }) {
    const $ = (id) => document.getElementById(id);
    const status = ref(false);
    const toggleExtraVal = ref(0);
    const mylist = ref([]);
    const seltitle = ref(props.title);
    const required = ref(props.req);
    const sectionOptions = ref(props.options);
    const seltype = sectionOptions.value.type;
    const selname = sectionOptions.value.name;

    const setFormList = (list) => {
      switch (seltype) {
        case "check":
          mylist.value = list;
          break;
        case  "radio":
          mylist.value = list;
          break;
        case "toggle":
          status.value = list[0].status;
          toggleExtraVal.value = list[0].extra;
          break;
      }
    };

    const getElemId = (title, indx) => {
      let _id = indx
        ? title.replace(/\s+/g, "-") + "_" + indx
        : title.replace(/\s+/g, "-");

      return _id;
    };
    const setToggleOption = (val, ext, id) => {
      let obj = {
        "value": $(id).checked ? val : null, 
        "extra": ext
      };
      setElemOption(obj, id);
    };

    //selection from check boxes
    const setCheckBoxOptions = (num, arrList, _id) => {
      arrList[num].status = !arrList[num].status;
      setElemOption(arrList, _id);
    };

    const setRadioOption = (val, _id) => {
        setElemOption(val, _id);
    };

    const setElemOption = (val, _id) => {
      emit("emitOptions", seltype, seltitle.value, required.value, val, _id);
    };

    setFormList(sectionOptions.value.list);

    return {
      seltype,
      selname,
      seltitle,
      status,
      mylist,
      toggleExtraVal,
      getElemId,
      setToggleOption,
      setCheckBoxOptions,
      setRadioOption,
      setElemOption,
    };
  },
  components: {
    checkBoxElem,
    radioBoxElem,
    textareaBoxElem,
    toggleSwitchElem,
  },
};
</script>
<style lang="scss" scoped>
div > ol > li {
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 40px;
  position: relative;
  border-bottom: dotted 1px #ccc;

  label {
    min-width: 75%;
    &:hover {
      cursor: pointer;
    }
  }
  .price {
    &:before {
      content: "$";
    }
  }
  .price.extra {
    position: relative;
    &:after {
      content: "- extra -";
      position: absolute;
      left: -60px;
      top: 3px;
      font: normal 10pt arial;
      color: #777;
    }
    &:before {
      content: "$";
    }
  }
  .price.hid {
    display: none;
  }
}
textarea {
  min-height: 70px;
  width: 96%;
  margin: 5px 10px;
}
</style>
