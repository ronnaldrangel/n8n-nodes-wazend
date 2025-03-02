import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const chatFields: INodeProperties[] = [
	// Campos comunes para todas las operaciones
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['chat-api'],
			},
		},
	},

	// Campos para verificar número
	{
		displayName: 'Números',
		name: 'numbers',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Lista de números para verificar (separados por coma)',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['check-number'],
			},
		},
	},

	// Campos para leer mensajes
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},
	{
		displayName: 'El Mensaje Es Mío',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Si el mensaje fue enviado por la instancia',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},

	// Campos para gestionar archivo
	{
		displayName: 'Contacto',
		name: 'chat',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Acción',
		name: 'archive',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Archivar',
				value: true,
			},
			{
				name: 'Desarchivar',
				value: false,
			},
		],
		default: true,
		required: true,
		description: 'Elija si desea archivar o desarchivar la conversación',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'ID Del Último Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'El Mensaje Es Mío',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Si el mensaje fue enviado por la instancia',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},

	// Campos para marcar como no leído
	{
		displayName: 'Contacto',
		name: 'chat',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del último mensaje',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},
	{
		displayName: 'El Mensaje Es Mío',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Si el mensaje fue enviado por la instancia',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},

	// Campos para eliminar mensaje
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del mensaje que será eliminado',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'El Mensaje Es Mío',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Si el mensaje fue enviado por la instancia',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Número Del Participante',
		name: 'participant',
		type: 'string',
		default: '',
		required: true,
		description: 'Número del participante que envió el mensaje',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
				fromMe: [false],
			},
		},
	},

	// Campos para buscar foto del perfil
	{
		displayName: 'Contacto',
		name: 'number',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto (ej: 5511999999999)',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['fetch-profile-picture'],
			},
		},
	},

	// Campos para obtener medio en Base64
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del mensaje que contiene el medio',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['get-media-base64'],
			},
		},
	},
	{
		displayName: 'Convertir a MP4',
		name: 'convertToMp4',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Si se debe convertir el video al formato MP4',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['get-media-base64'],
			},
		},
	},

	// Campos para editar mensaje
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del mensaje que se editará',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},
	{
		displayName: 'Nuevo Mensaje',
		name: 'text',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nuevo texto del mensaje',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},

	// Campos para enviar presencia
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},
	{
		displayName: 'Presencia',
		name: 'presence',
		type: 'options',
		options: [
			{
				name: 'Escribiendo...',
				value: 'composing',
			},
			{
				name: 'Grabando...',
				value: 'recording',
			},
		],
		default: 'composing',
		required: true,
		description: 'Tipo de presencia a enviar',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},
	{
		displayName: 'Delay',
		name: 'delay',
		type: 'number' as NodePropertyTypes,
		default: 1200,
		required: true,
		description: 'Tiempo en milisegundos que la presencia estará activa',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},

	// Campos para bloquear contacto
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['block-contact'],
			},
		},
	},
	{
		displayName: 'Acción',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Bloquear',
				value: 'block',
			},
			{
				name: 'Desbloquear',
				value: 'unblock',
			},
		],
		default: 'block',
		required: true,
		description: 'Acción a ejecutar',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['block-contact'],
			},
		},
	},

	// Campos para listar contactos
	{
		displayName: 'Listar Todos',
		name: 'listAll',
		type: 'boolean' as NodePropertyTypes,
		default: true,
		required: true,
		description: 'Si se deben listar todos los contactos',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-contacts'],
			},
		},
	},
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto específico',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-contacts'],
				listAll: [false],
			},
		},
	},

	// Campos para buscar mensajes
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},
	{
		displayName: 'Página',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Número de página',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},
	{
		displayName: 'Cantidad Por Página',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,
		description: 'Cantidad de mensajes por página',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},

	// Campos para buscar estado de mensajes
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Página',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Número de página',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Cantidad Por Página',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,
		description: 'Cantidad de mensajes por página',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},

	// Campos para buscar chats
	{
		displayName: 'Contacto',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número de contacto',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Página',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Número de página',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Cantidad Por Página',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,
		description: 'Cantidad de chats por página',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
];
