import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import csp, {policyDirective} from './meta/csp'

export const schemaTypes = [csp, policyDirective, post, author, category, blockContent]
