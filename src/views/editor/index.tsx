import { defineComponent, ref, onMounted } from "vue";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
const { conf, language } =
  require("monaco-editor/esm/vs/basic-languages/java/java") as {
    conf: monaco.languages.LanguageConfiguration;
    language: monaco.languages.IMonarchLanguage;
  };

// import { language } from "monaco-editor/esm/vs/basic-languages/java/java";

export default defineComponent({
  setup() {
    const divRef = ref();
    onMounted(() => {
      monaco.editor.create(divRef.value, {
        language: "mylang",
      });
      monaco.languages.register({ id: "mylang" });
      monaco.languages.setMonarchTokensProvider("mylang", language);
      monaco.languages.setLanguageConfiguration("mylang", conf);
    });
    return () => (
      <div
        ref={divRef}
        style={{
          height: "800px",
        }}
      ></div>
    );
  },
});
