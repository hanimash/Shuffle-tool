<template>
  <b-container class="Setting" fluid>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="إضافة صف جديد">
        <b-container>
          <b-row>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="اسم الصف"
                label-for="input-className"
                description="يجب أن لا يتكرر اسم الصف"
                class="my-3"
              >
                <b-form-input
                  id="input-className"
                  v-model="className"
                  type="text"
                  placeholder="اكتب اسم الصف"
                  required
                  size="sm"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="اسماء البطاقات"
                label-for="textarea-list"
                description="أدخل كل اسم في سطر. لا تكرر الاسماء."
              >
                <b-form-textarea
                  id="textarea-list"
                  v-model="list"
                  placeholder="أضف اسماء البطاقات"
                  rows="10"
                  size="sm"
                  required
                ></b-form-textarea>
              </b-form-group>
              <b-button variant="primary" @click="saveData" class="my-4"
                >حفظ البيانات</b-button
              >
            </b-form>
          </b-row>
        </b-container>
        <b-modal ref="error-modal" hide-footer title="خطأ">
          <div class="d-block text-center">
            <p>{{ errorMsg }}</p>
          </div>
          <b-button
            class="mt-3"
            variant="outline-danger"
            block
            @click="hideModal"
            >إغلاق</b-button
          >
        </b-modal>
      </b-tab>
      <b-tab
        title="الصفوف المحفوظة"
        v-if="ClassesList && ClassesList.length > 0"
      >
        <b-container class="mb-4">
          <b-row class="list-header">
            <b-col><h6>الاسم</h6></b-col>
            <b-col cols="6"><h6>البطاقات</h6></b-col>
            <b-col> </b-col>
          </b-row>
          <b-row
            v-for="(c, i) in ClassesList"
            :key="i"
            :class="{
              active: activeClass == c.className,
              'border-bottom': true,
              'p-2': true,
            }"
          >
            <b-col>{{ c.className }}</b-col>
            <b-col cols="6"
              ><p>{{ c.list.replaceAll("\n", " - ") }}</p></b-col
            >
            <b-col>
              <b-button
                size="sm"
                variant="denger"
                @click="delClass(c.className)"
              >
                <b-icon icon="trash" />
              </b-button>
              <b-button
                size="sm"
                variant="denger"
                @click="setActiveClass(c.className)"
              >
                <b-icon icon="circle" v-if="c.className != activeClass" />
                <b-icon icon="check-circle" v-if="c.className == activeClass" />
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
export default {
  name: "Setting",

  data() {
    return {
      className: "",
      list: "",
      activeClass: "",
      ClassesList: [],
      errorMsg: "",
    };
  },
  mounted() {
    this.getLocalStorage();
  },
  methods: {
    saveData() {
      if (
        new Set(this.list.split("\n")).size !== this.list.split("\n").length
      ) {
        this.showModal("توجد أسماء مكررة");
        return;
      }
      if (this.className == "" || this.list == "") {
        this.showModal("تأكد من كتابة البيانات بشكل صحيح");
        return;
      }

      this.getLocalStorage();
      var cList = [
        ...this.ClassesList,
        { className: this.className, list: this.list },
      ];
      this.ClassesList = cList;
      this.activeClass = this.className;
      this.className = "";
      this.list = "";
      this.setLocalStorage();
      this.getLocalStorage();
    },
    getLocalStorage() {
      if (
        localStorage.getItem("ClassesList") &&
        localStorage.getItem("activeClass")
      ) {
        this.ClassesList = JSON.parse(localStorage.getItem("ClassesList"));
        this.activeClass = JSON.parse(localStorage.getItem("activeClass"));
      } else {
        this.ClassesList = [];
        this.activeClass = "";
      }
    },
    setLocalStorage() {
      localStorage.setItem("ClassesList", JSON.stringify(this.ClassesList));
      localStorage.setItem("activeClass", JSON.stringify(this.activeClass));
    },
    delClass(cName) {
      this.getLocalStorage();
      this.ClassesList = this.ClassesList.filter((c) => c.className != cName);
      if (this.activeClass == cName) {
        if (this.ClassesList.length > 0)
          this.activeClass = this.ClassesList[0].className;
        else this.activeClass = "";
      }
      this.setLocalStorage();
    },
    setActiveClass(cName) {
      this.getLocalStorage();
      this.activeClass = cName;
      this.setLocalStorage();
    },
    showModal(msg) {
      this.errorMsg = msg;
      this.$refs["error-modal"].show();
    },
    hideModal() {
      this.errorMsg = "";
      this.$refs["error-modal"].hide();
    },
  },
};
</script>

<style scoped>
.Setting {
  direction: rtl;
  text-align: right;
  padding: 0;
}

.list-header {
  border-bottom: 1px solid #000;
}
</style>
