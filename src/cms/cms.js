import CMS from 'netlify-cms-app'

import surveyPreview from './preview-templates/surveyPreview'
import infopagePreview from './preview-templates/infopagePreview'

CMS.registerPreviewTemplate('survey', surveyPreview)
CMS.registerPreviewTemplate('infopage', infopagePreview)
