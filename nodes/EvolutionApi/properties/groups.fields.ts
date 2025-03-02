import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const groupsFields: INodeProperties[] = [
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que creará el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Nombre Del Grupo',
		name: 'subject',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre del grupo que se creará',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Descripción',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Ingrese la descripción del grupo (opcional)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Participantes',
		name: 'participants',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese los números de los participantes separados por comas (ej: 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que actualizará la imagen',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo que tendrá la imagen actualizada',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'URL De La Imagen',
		name: 'image',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'URL de la imagen que se establecerá como foto del grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que actualizará el nombre del grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo que tendrá el nombre actualizado',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'Nuevo Nombre Del Grupo',
		name: 'subject',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nuevo nombre que se establecerá para el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que actualizará la descripción',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo que tendrá la descripción actualizada',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'Nueva Descripción',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nueva descripción que se establecerá para el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que buscará el código',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-invite-code'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para obtener el código de invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-invite-code'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que revocará el código',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['revoke-invite-code'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para revocar el código de invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['revoke-invite-code'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que enviará la invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para enviar la invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Mensaje De La Invitación',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: 'Segue o link do grupo',
		required: true,
		description: 'Mensaje que se enviará junto con el enlace de invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Destinatarios',
		name: 'numbers',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese los números de los destinatarios separados por comas (ej: 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que buscará el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-group-by-code'],
			},
		},
	},
	{
		displayName: 'Código De La Invitación',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Código de la invitación del grupo (ej: JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-group-by-code'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
			},
		},
	},
	{
		displayName: 'Método De Búsqueda',
		name: 'searchMethod',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Por Código De Invitación',
				value: 'inviteCode',
			},
			{
				name: 'Por ID Del Grupo',
				value: 'groupJid',
			},
			{
				name: 'Buscar Todos Los Grupos',
				value: 'fetchAll',
			},
		],
		default: 'inviteCode',
		required: true,
		description: 'Elija el método para buscar los grupos',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
			},
		},
	},
	{
		displayName: 'Código De La Invitación',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Código de la invitación del grupo (ej: JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['inviteCode'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para buscar información',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['groupJid'],
			},
		},
	},
	{
		displayName: 'Obtener Participantes',
		name: 'getParticipants',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		description: 'Si se debe obtener la lista de participantes de los grupos',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['fetchAll'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['find-participants'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para buscar los participantes',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['find-participants'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para actualizar los miembros',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Acción',
		name: 'action',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Agregar Miembro',
				value: 'add',
			},
			{
				name: 'Eliminar Miembro',
				value: 'remove',
			},
			{
				name: 'Promover a Administrador',
				value: 'promote',
			},
			{
				name: 'Degradar a Miembro',
				value: 'demote',
			},
		],
		default: 'add',
		required: true,
		description: 'Acción a ejecutar con los miembros',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Miembros',
		name: 'participants',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Lista de números de los miembros separados por comas (ej: 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para actualizar la configuración',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Acción',
		name: 'action',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Solo Admins Envían Mensajes',
				value: 'announcement',
			},
			{
				name: 'Todos Envían Mensajes',
				value: 'not_announcement',
			},
			{
				name: 'Solo Admins Editan La Configuración',
				value: 'locked',
			},
			{
				name: 'Todos Editan La Configuración',
				value: 'unlocked',
			},
		],
		default: 'not_announcement',
		required: true,
		description: 'Configuración a aplicar en el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para configurar mensajes efímeros',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Expiración',
		name: 'expiration',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Desactivado',
				value: 0,
			},
			{
				name: '24 Horas',
				value: 86400,
			},
			{
				name: '7 Días',
				value: 604800,
			},
			{
				name: '90 Días',
				value: 7776000,
			},
		],
		default: 0,
		required: true,
		description: 'Tiempo de expiración de los mensajes',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['leave-group'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo del que desea salir',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['leave-group'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el nombre de la instancia que se unirá al grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['join-group'],
			},
		},
	},
	{
		displayName: 'Código De La Invitación',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Ingrese el código de la invitación del grupo (ej: JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['join-group'],
			},
		},
	},
];

