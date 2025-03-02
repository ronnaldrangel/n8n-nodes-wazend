import { INodeProperties } from 'n8n-workflow';

// Opções da integrations-api (Integração)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Value do Resource
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Define/Busca integración con Chatwoot',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions de Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Controla la integración con Evolution Bot',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions de Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Controla la integración con Typebot',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions de Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Controla la integración con Dify',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions de Flowise
			name: 'Flowise',
			action: 'Flowise',
			description: 'Controla la integración con Flowise',
			value: 'flowiseBot',
		},
	],	
	// Definindo como padrão a opção "Enviar Texto"
	default: 'chatwoot',
};
