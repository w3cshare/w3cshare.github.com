import {
  vueCoreRules,
  vueNamingRules,
  vueOrderRules,
  vueTemplateRules,
  vueTemplateStyleRules,
} from './vue2'
import {
  vue3Rules,
  vue3ScriptRules,
  vue3TemplateRules,

  // vueA11yRules,
  vueCompositionRules,
  vuePerformanceRules,

  /*
   * vuePugRules,
   * vueScopedCssRules,
   */
} from './vue3'

export default {
  // vue2
  ...vueNamingRules,
  ...vueTemplateStyleRules,
  ...vueTemplateRules,
  ...vueOrderRules,
  ...vueCoreRules,

  /*
   * vue3
   * ...vueA11yRules,
   * ...vuePugRules,
   * ...vueScopedCssRules,
   */
  ...vueCompositionRules,
  ...vuePerformanceRules,
  ...vue3ScriptRules,
  ...vue3TemplateRules,
  ...vue3Rules,
}
