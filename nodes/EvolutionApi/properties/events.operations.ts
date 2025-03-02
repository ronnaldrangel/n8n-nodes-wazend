import { INodeProperties } from 'n8n-workflow';

// Opções da events-api (Eventos)
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operacion',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Value do Resource
		},
	},
	options: [
		// Opción = Enviar mensaje de Texto
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Define/Busca integración con Webhook',
			value: 'webhook',
		},
		{
			// Set/find Rabbitmq
			name: 'RabbitMQ',
			action: 'Rabbitmq',
			description: 'Define/Busca integración con RabbitMQ',
			value: 'rabbitmq',
		},
	],	
	// Definindo como padrão a opção "Enviar Texto"
	default: 'webhook',
};
