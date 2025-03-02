import { INodeProperties } from 'n8n-workflow';

// Campos de las instancias
export const instancesFields: INodeProperties[] = [
	// Campos = Crear Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre para la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Apikey Para La Instancia',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Opcional: Ingrese un token para la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Número De WhatsApp',
		name: 'number',
		type: 'string',
		default: '',
		description:
			'Opcional: Número que se conectará a la instancia, para recibir el código de emparejamiento',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_Create_instance',
		type: 'collection',
		placeholder: 'Agregar Campo',
		default: {},
		options: [
			{
				displayName: 'Chatwoot',
				name: 'chatwoot',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones De Chatwoot',
						name: 'chatwootSettings',
						values: [
							{
								displayName: 'ID De La Cuenta De Chatwoot',
								name: 'chatwootAccountId',
								type: 'string',
								default: '',
								description: 'Ingrese el ID de la cuenta de Chatwoot',
							},
							{
								displayName: 'Token De Admin De Chatwoot',
								name: 'chatwootToken',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Ingrese el token de admin de Chatwoot',
							},
							{
								displayName: 'Enlace De Chatwoot',
								name: 'chatwootUrl',
								type: 'string',
								default: '',
								description: 'Ingrese el enlace de Chatwoot',
							},
							{
								displayName: 'Firma Del Agente De Chatwoot',
								name: 'chatwootSignMsg',
								type: 'boolean',
								default: false,
								description: 'Whether to enable or disable the Chatwoot agent signature',
							},
							{
								displayName: 'Reabrir Mensajes en Chatwoot',
								name: 'chatwootReopenConversation',
								type: 'boolean',
								default: false,
								description: 'Whether to enable or disable reopening messages in Chatwoot',
							},
							{
								displayName: 'Iniciar Conversaciones Como Pendientes en Chatwoot',
								name: 'chatwootConversationPending',
								type: 'boolean',
								default: false,
								description: 'Whether to start conversations as pending in Chatwoot',
							},
							{
								displayName: 'Importar Contactos a Chatwoot',
								name: 'chatwootImportContacts',
								type: 'boolean',
								default: false,
								description: 'Whether to import contacts to Chatwoot',
							},
							{
								displayName: 'Nombre De La Bandeja De Entrada De Chatwoot',
								name: 'chatwootNameInbox',
								type: 'string',
								default: '',
								description: 'Ingrese el nombre de la bandeja de entrada de Chatwoot',
							},
							{
								displayName: 'Fusionar Contactos Brasileños en Chatwoot',
								name: 'chatwootMergeBrazilContacts',
								type: 'boolean',
								default: false,
								description: 'Whether to merge Brazilian contacts in Chatwoot',
							},
							{
								displayName: 'Importar Mensajes a Chatwoot',
								name: 'chatwootImportMessages',
								type: 'boolean',
								default: false,
								description: 'Whether to import messages to Chatwoot',
							},
							{
								displayName: 'Importar Mensajes De Cuántos Días a Chatwoot',
								name: 'chatwootDaysLimitImportMessages',
								type: 'number',
								default: 0,
								description:
									'Ingrese el número de días para limitar la importación de mensajes a Chatwoot',
							},
							{
								displayName: 'Nombre Del Contacto De QRCode en Chatwoot',
								name: 'chatwootOrganization',
								type: 'string',
								default: '',
								description: 'Ingrese el nombre del contacto de QRCode en Chatwoot',
							},
							{
								displayName: 'URL Del Logo Para El Contacto en Chatwoot',
								name: 'chatwootLogo',
								type: 'string',
								default:
									'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
								description: 'Ingrese la URL del logo para el contacto en Chatwoot',
							},
						],
					},
				],
				description: 'Configuraciones de Chatwoot',
			},
			{
				displayName: 'Comportamiento',
				name: 'instanceSettings',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Comportamiento De La Instancia',
						name: 'settings',
						values: [
							{
								displayName: 'Rechazar Llamadas',
								name: 'rejectCall',
								type: 'boolean',
								default: false,
								description: 'Whether to automatically reject incoming calls',
							},
							{
								displayName: 'Mensaje Al Rechazar',
								name: 'msgCall',
								type: 'string',
								default: '',
								description:
									'Whether to send a message after rejecting a call, and if so, what message',
							},
							{
								displayName: 'Ignorar Grupos',
								name: 'groupsIgnore',
								type: 'boolean',
								default: false,
								description: 'Whether to ignore messages from groups',
							},
							{
								displayName: 'Siempre en Línea',
								name: 'alwaysOnline',
								type: 'boolean',
								default: false,
								description: 'Whether to keep the status always set to Online',
							},
							{
								displayName: 'Leer Mensajes',
								name: 'readMessages',
								type: 'boolean',
								default: false,
								description: 'Whether to automatically mark messages as read',
							},
							{
								displayName: 'Sincronizar Historial Completo',
								name: 'syncFullHistory',
								type: 'boolean',
								default: false,
								description: 'Whether to allow the API to view the Status of added contacts',
							},
							{
								displayName: 'Leer Estados',
								name: 'readStatus',
								type: 'boolean',
								default: false,
								description: 'Whether to synchronize the full message history with the API',
							},
						],
					},
				],
				description: 'Comportamiento de la instancia',
			},
			{
				displayName: 'Proxy',
				name: 'proxy',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones Del Proxy',
						name: 'proxySettings',
						values: [
							{
								displayName: 'Host Del Proxy',
								name: 'proxyHost',
								type: 'string',
								default: '',
								description: 'Ingrese el host del proxy',
							},
							{
								displayName: 'Puerto Del Proxy',
								name: 'proxyPort',
								type: 'string',
								default: '1234',
								description: 'Ingrese el puerto del proxy',
							},
							{
								displayName: 'Protocolo Del Proxy',
								name: 'proxyProtocol',
								type: 'options',
								options: [
									{
										name: 'HTTP',
										value: 'http',
									},
									{
										name: 'HTTPS',
										value: 'https',
									},
								],
								default: 'http',
								description: 'Seleccione el protocolo del proxy',
							},
							{
								displayName: 'Usuario Del Proxy',
								name: 'proxyUsername',
								type: 'string',
								default: '',
								description: 'Ingrese el usuario del proxy',
							},
							{
								displayName: 'Contraseña Del Proxy',
								name: 'proxyPassword',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Ingrese la contraseña del proxy',
							},
						],
					},
				],
				description: 'Configuraciones del proxy',
			},
			{
				displayName: 'RabbitMQ',
				name: 'rabbitmq',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones De RabbitMQ',
						name: 'rabbitmqSettings',
						values: [
							{
								displayName: 'Activar O Desactivar RabbitMQ',
								name: 'rabbitmqEnabled',
								type: 'boolean',
								default: false,
								description: 'Whether to send media data in base64 format in the RabbitMQ', // Atualizado
							},
							{
								displayName: 'Eventos',
								name: 'rabbitmqEvents',
								type: 'multiOptions',
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
						],
					},
				],
				description: 'Los eventos a ser monitorizados',
			},
			{
				displayName: 'Webhook',
				name: 'webhook',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones Del Webhook',
						name: 'webhookSettings',
						values: [
							{
								displayName: 'URL Del Webhook',
								name: 'webhookUrl',
								type: 'string',
								default: '',
								description: 'Ingrese la URL que recibirá los eventos del Webhook',
							},
							{
								displayName: 'Webhook Por Eventos',
								name: 'webhookByEvents',
								type: 'boolean',
								default: false,
								description:
									'Whether to create a route for each event by appending the event name to the end of the URL', // Atualizado
							},
							{
								displayName: 'Base64 en El Webhook',
								name: 'webhookBase64',
								type: 'boolean',
								default: false,
								description: 'Whether to send media data in base64 format in the webhook', // Atualizado
							},
							{
								displayName: 'Eventos',
								name: 'webhookEvents',
								type: 'multiOptions',
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
						],
					},
				],
				description: 'Los eventos a ser monitorizados',
			},
		],
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},

	// Campos = Conectar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que desea buscar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-connect'],
			},
		},
	},

	// Campos = Buscar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		description: 'Ingrese el nombre de la instancia que desea buscar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['fetch-instances'],
			},
		},
	},

	// Campos = Definir Comportamiento
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre para la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Rechazar Llamadas',
		name: 'rejectCall',
		type: 'boolean',
		default: false,
		description: 'Whether to reject calls or not',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Mensaje De Llamadas',
		name: 'msgCall',
		type: 'string',
		default: 'No aceptamos llamadas telefónicas.',
		description: 'Mensaje que se enviará si se rechazan las llamadas',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Ignorar Grupos',
		name: 'groupsIgnore',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Siempre en Línea',
		name: 'alwaysOnline',
		type: 'boolean',
		default: false,
		description: 'Whether the instance should always be online or not',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Leer Mensajes',
		name: 'readMessages',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Sincronizar Historial Completo',
		name: 'syncFullHistory',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all history or not',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Leer Estados',
		name: 'readStatus',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},

	// Campos = Definir Presencia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-presence'],
			},
		},
	},
	{
		displayName: 'Presencia',
		name: 'presence',
		type: 'options',
		options: [
			{
				name: 'Disponible',
				value: 'available',
			},
			{
				name: 'No Disponible',
				value: 'unavailable',
			},
		],
		default: 'available',
		required: true,
		description: 'Estado de presencia de la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-presence'],
			},
		},
	},

	// Campos = Proxy
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que enviará el mensaje',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
			},
		},
	},
	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForProxy',
		type: 'options',
		options: [
			{
				name: 'Definir Proxy',
				value: 'setProxy',
			},
			{
				name: 'Verificar Proxy',
				value: 'findProxy',
			},
		],
		default: 'setProxy',
		description: 'Elija entre activar/desactivar proxy o verificar el proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
			},
		},
	},
	{
		displayName: 'Activar Proxy',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Protocolo Del Proxy',
		name: 'proxyProtocol',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'HTTP',
				value: 'http',
			},
			{
				name: 'HTTPS',
				value: 'https',
			},
		],
		default: 'http',
		description: 'Seleccione el protocolo del proxy',
	},
	{
		displayName: 'Host Del Proxy',
		name: 'proxyHost',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el host del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Puerto Del Proxy',
		name: 'proxyPort',
		type: 'string',
		default: '1234',
		required: true,
		description: 'Ingrese el puerto del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Usuario Del Proxy',
		name: 'proxyUsername',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el usuario del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Contraseña Del Proxy',
		name: 'proxyPassword',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Ingrese la contraseña del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},

	// Campos = Reiniciar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que desea reiniciar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['restart-instance'],
			},
		},
	},

	// Campos = Desconectar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que desea desconectar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['logout-instance'],
			},
		},
	},

	// Campos = Eliminar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que se eliminará',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['delete-instance'],
			},
		},
	},
];
