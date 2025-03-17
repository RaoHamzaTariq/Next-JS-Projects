import { type SchemaTypeDefinition } from 'sanity'
import { DataAnalysisDataType } from './data-analysis-project'
import { portfolioType } from './portfolio-projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    DataAnalysisDataType,
    portfolioType
  ],
  
}
