import CMS from 'netlify-cms-app'

import MiniSitePreview from './preview-templates/miniSitePreview/miniSitePreview'
import SurveyPreview from './preview-templates/surveyPreview/surveyPreview'
import InfopagePreview from './preview-templates/infopagePreview/infopagePreview'
import HintsPreview from './preview-templates/hintsPreview/hintsPreview'

CMS.registerPreviewTemplate('minisite', MiniSitePreview)
CMS.registerPreviewTemplate('survey', SurveyPreview)
CMS.registerPreviewTemplate('infopage1', InfopagePreview)
CMS.registerPreviewTemplate('hints', HintsPreview)
