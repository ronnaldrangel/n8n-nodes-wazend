import { INodeProperties } from 'n8n-workflow';

// Campo de los Eventos
export const eventsFields: INodeProperties[] = [
	// Campos = Webhook
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que enviará el mensaje',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
			},
		},
	},
	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForWebhook',
		type: 'options',
		options: [
			{
				name: 'Definir Webhook',
				value: 'setWebhook',
			},
			{
				name: 'Verificar Webhook',
				value: 'findWebhook',
			},
		],
		default: 'setWebhook',
		description: 'Elija entre definir un nuevo webhook o verificar el webhook',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
			},
		},
	},
	{
		displayName: 'Activar Webhook',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with Webhook',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'URL Del Webhook',
		name: 'webhookUrl',
		type: 'string',
		default: '',
		description: 'Ingrese la URL que recibirá los eventos del Webhook',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Webhook Por Eventos',
		name: 'webhookByEvents',
		type: 'boolean',
		default: false,
		description:
			'Whether to create a route for each event by appending the event name to the end of the URL',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Base64 en El Webhook',
		name: 'webhookBase64',
		type: 'boolean',
		default: false,
		description: 'Whether to send media data in base64 format in the webhook',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Eventos',
		name: 'webhookEvents',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
		default: [],
		options: [
			{
				name: 'CALL',
				value: 'CALL',
			},
			{
				name: 'CHATS_DELETE',
				value: 'CHATS_DELETE',
			},
			{
				name: 'CHATS_SET',
				value: 'CHATS_SET',
			},
			{
				name: 'CHATS_UPDATE',
				value: 'CHATS_UPDATE',
			},
			{
				name: 'CHATS_UPSERT',
				value: 'CHATS_UPSERT',
			},
			{
				name: 'CONNECTION_UPDATE',
				value: 'CONNECTION_UPDATE',
			},
			{
				name: 'CONTACTS_SET',
				value: 'CONTACTS_SET',
			},
			{
				name: 'CONTACTS_UPDATE',
				value: 'CONTACTS_UPDATE',
			},
			{
				name: 'CONTACTS_UPSERT',
				value: 'CONTACTS_UPSERT',
			},
			{
				name: 'GROUP_PARTICIPANTS_UPDATE',
				value: 'GROUP_PARTICIPANTS_UPDATE',
			},
			{
				name: 'GROUP_UPDATE',
				value: 'GROUP_UPDATE',
			},
			{
				name: 'GROUPS_UPSERT',
				value: 'GROUPS_UPSERT',
			},
			{
				name: 'LABELS_ASSOCIATION',
				value: 'LABELS_ASSOCIATION',
			},
			{
				name: 'LABELS_EDIT',
				value: 'LABELS_EDIT',
			},
			{
				name: 'MESSAGES_DELETE',
				value: 'MESSAGES_DELETE',
			},
			{
				name: 'MESSAGES_SET',
				value: 'MESSAGES_SET',
			},
			{
				name: 'MESSAGES_UPDATE',
				value: 'MESSAGES_UPDATE',
			},
			{
				name: 'MESSAGES_UPSERT',
				value: 'MESSAGES_UPSERT',
			},
			{
				name: 'PRESENCE_UPDATE',
				value: 'PRESENCE_UPDATE',
			},
			{
				name: 'QRCODE_UPDATED',
				value: 'QRCODE_UPDATED',
			},
			{
				name: 'SEND_MESSAGE',
				value: 'SEND_MESSAGE',
			},
			{
				name: 'TYPEBOT_CHANGE_STATUS',
				value: 'TYPEBOT_CHANGE_STATUS',
			},
			{
				name: 'TYPEBOT_START',
				value: 'TYPEBOT_START',
			},
		],
	},

	// Campos = RabbitMQ
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que enviará el mensaje',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
			},
		},
	},
	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForRabbitMQ',
		type: 'options',
		options: [
			{
				name: 'Definir RabbitMQ',
				value: 'setRabbitMQ',
			},
			{
				name: 'Verificar RabbitMQ',
				value: 'findRabbitMQ',
			},
		],
		default: 'setRabbitMQ',
		description: 'Elija entre activar/desactivar RabbitMQ o verificar RabbitMQ',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
			},
		},
	},
	{
		displayName: 'Activar RabbitMQ',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with RabbitMQ',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
				resourceForRabbitMQ: ['setRabbitMQ'],
			},
		},
	},
	{
		displayName: 'Eventos',
		name: 'rabbitMQEvents',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
				resourceForRabbitMQ: ['setRabbitMQ'],
			},
		},
		default: [],
		options: [
			{
				name: 'CALL',
				value: 'CALL',
			},
			{
				name: 'CHATS_DELETE',
				value: 'CHATS_DELETE',
			},
			{
				name: 'CHATS_SET',
				value: 'CHATS_SET',
			},
			{
				name: 'CHATS_UPDATE',
				value: 'CHATS_UPDATE',
			},
			{
				name: 'CHATS_UPSERT',
				value: 'CHATS_UPSERT',
			},
			{
				name: 'CONNECTION_UPDATE',
				value: 'CONNECTION_UPDATE',
			},
			{
				name: 'CONTACTS_SET',
				value: 'CONTACTS_SET',
			},
			{
				name: 'CONTACTS_UPDATE',
				value: 'CONTACTS_UPDATE',
			},
			{
				name: 'CONTACTS_UPSERT',
				value: 'CONTACTS_UPSERT',
			},
			{
				name: 'GROUP_PARTICIPANTS_UPDATE',
				value: 'GROUP_PARTICIPANTS_UPDATE',
			},
			{
				name: 'GROUP_UPDATE',
				value: 'GROUP_UPDATE',
			},
			{
				name: 'GROUPS_UPSERT',
				value: 'GROUPS_UPSERT',
			},
			{
				name: 'LABELS_ASSOCIATION',
				value: 'LABELS_ASSOCIATION',
			},
			{
				name: 'LABELS_EDIT',
				value: 'LABELS_EDIT',
			},
			{
				name: 'MESSAGES_DELETE',
				value: 'MESSAGES_DELETE',
			},
			{
				name: 'MESSAGES_SET',
				value: 'MESSAGES_SET',
			},
			{
				name: 'MESSAGES_UPDATE',
				value: 'MESSAGES_UPDATE',
			},
			{
				name: 'MESSAGES_UPSERT',
				value: 'MESSAGES_UPSERT',
			},
			{
				name: 'PRESENCE_UPDATE',
				value: 'PRESENCE_UPDATE',
			},
			{
				name: 'QRCODE_UPDATED',
				value: 'QRCODE_UPDATED',
			},
			{
				name: 'SEND_MESSAGE',
				value: 'SEND_MESSAGE',
			},
			{
				name: 'TYPEBOT_CHANGE_STATUS',
				value: 'TYPEBOT_CHANGE_STATUS',
			},
			{
				name: 'TYPEBOT_START',
				value: 'TYPEBOT_START',
			},
		],
	},
];
