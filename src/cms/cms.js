import CMS from 'netlify-cms-app'

import SurveyPreview from './preview-templates/surveyPreview/surveyPreview'
import infopagePreview from './preview-templates/infopagePreview'

CMS.registerPreviewTemplate('survey', SurveyPreview)
CMS.registerPreviewTemplate('infopage', infopagePreview)
