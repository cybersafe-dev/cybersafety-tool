import CMS from 'netlify-cms-app'

import SurveyPreview from './preview-templates/surveyPreview/surveyPreview'
import InfopagePreview from './preview-templates/infopagePreview/infopagePreview'
import HintsPreview from './preview-templates/hintsPreview/hintsPreview'

CMS.registerPreviewTemplate('survey', SurveyPreview)
CMS.registerPreviewTemplate('infopage', InfopagePreview)
CMS.registerPreviewTemplate('hints', HintsPreview)
