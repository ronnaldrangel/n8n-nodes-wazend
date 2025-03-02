import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
	name = 'evolutionApi';
	displayName = 'Wazend API';
	documentationUrl = 'https://docs.wazend.net/wazend';
	properties: INodeProperties[] = [
		{
			displayName: 'Server Url',
			name: 'server-url',
			type: 'string',
			default: '',
			placeholder: 'https://exemplo.com',
			description: 'Ingrese la URL completa de su Wazend API (default: https://api2.wazend.net)',
		},
		{
			displayName: 'ApiKey',
			name: 'apikey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			description: 'Ingrese la ApiKey de la instancia de su Wazend API',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials.apikey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials["server-url"]}}',
			url: '={{$credentials["server-url"].endsWith("/") ? "/erro" : "/instance/fetchInstances"}}',
			method: 'GET',
			headers: {
				apikey: '={{$credentials.apikey}}',
			},
		},
	};
}
