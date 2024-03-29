<template>
  <v-row>
    <v-col cols="12">
      <v-row :align="showTitleStyle ? 'start' : 'end'">
        <v-col cols="12" md="6">
          <Field
            :title="$t('message.formHeader')"
            :value="title.value"
            @updateValue="updateTitle"
          ></Field>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <span class="b-link" @click="showTitleStyle = !showTitleStyle">
                {{ $t("message.appearance") }}
              </span>
            </v-col>
            <v-col cols="12" v-if="showTitleStyle" :class="'selzyFadeIn'">
              <CommonSettingsStyles :type="'title'"></CommonSettingsStyles>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row :align="showDescriptionStyle ? 'start' : 'end'">
        <v-col cols="12" md="6">
          <Field
            :title="$t('message.formDescription')"
            :value="description.value"
            :type="'textarea'"
            @updateValue="updateDescription"
          ></Field>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <span
                class="b-link"
                @click="showDescriptionStyle = !showDescriptionStyle"
              >
                {{ $t("form.settings") }}
              </span>
            </v-col>
            <v-col cols="12" v-if="showDescriptionStyle" :class="'selzyFadeIn'">
              <CommonSettingsStyles
                :type="'description'"
              ></CommonSettingsStyles>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <div class="b-label-title">
        {{ $t("form.design") }}
      </div>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <span class="b-link" @click="showFormStyle = !showFormStyle">
                {{ $t("form.settings") }}
              </span>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="showFormStyle" :class="'selzyFadeIn'">
          <v-row>
            <v-col cols="6">
              <CommonSettingsStyles :type="'form'"></CommonSettingsStyles>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row :align="showButtonStyle ? 'start' : 'end'">
        <v-col cols="12" md="6">
          <Field
            :title="$t('button.text')"
            :value="button.value"
            @updateValue="updateButton"
          ></Field>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <span class="b-link" @click="showButtonStyle = !showButtonStyle">
                {{ $t("form.settings") }}
              </span>
            </v-col>
            <v-col cols="12" v-if="showButtonStyle" :class="'selzyFadeIn'">
              <CommonSettingsStyles :type="'button'"></CommonSettingsStyles>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <!-- Тексареа для чекбокса политики конфиденциальности -->
    <v-col cols="12">
      <v-row :align="showPolicyStyle ? 'start' : 'end'">
        <v-col cols="12" md="6">
          <Field
            :title="$t('message.policy')"
            :value="policyConf.value"
            :type="'textarea'"
            @updateValue="updatePolicy"
          ></Field>
              <p style="padding-top: 5px;">
                In order to insert a link, you need to follow the rules. In round brackets 
                (text for the link)[https://www.example.com] link in square brackets.
                You don't need to use brackets for plain text.
                Copy this and edit only text and link
                <b> (text)[link] </b> 
             </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <span class="b-link" @click="showPolicyStyle = !showPolicyStyle">
                {{ $t("form.settings") }}
              </span>
            </v-col>
            <v-col cols="12" v-if="showPolicyStyle" :class="'selzyFadeIn'">
              <CommonSettingsStyles :type="'policyConf'"></CommonSettingsStyles>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Field from "@/components/field";
import CommonSettingsStyles from "@/components/common-settings-styles";
export default {
  components: {
    Field,
    CommonSettingsStyles,
  },
  data() {
    return {
      showTitleStyle: false,
      showDescriptionStyle: false,
      showFormStyle: false,
      showButtonStyle: false,
      showPolicyStyle: false,
    };
  },
  methods: {
    updateTitle(value) {
      this.$store.dispatch("editCommonSettingsTitleValue", value);
    },
    updateDescription(value) {
      this.$store.dispatch("editCommonSettingsDescriptionValue", value);
    },
    updateButton(value) {
      this.$store.dispatch("editCommonSettingsButtonValue", value);
    },
    updatePolicy(value) {
      this.$store.dispatch("editCommonSettingsPolicyValue", value);
    },
  },
  computed: {
    title() {
      return this.$store.getters.commonSettingsFormTitle;
    },
    description() {
      return this.$store.getters.commonSettingsFormDescription;
    },
    button() {
      return this.$store.getters.commonSettingsFormButton;
    },
    policyConf() {
      console.log(this.$store.getters.commonSettingsFormPolicy);
      return (
        this.$store.getters.commonSettingsFormPolicy || {
          value: null,
          styles: {},
        }
      );
    },
  },
};
</script>

