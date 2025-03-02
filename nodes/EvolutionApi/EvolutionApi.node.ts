import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
} from 'n8n-workflow';
import { evolutionNodeProperties } from './properties';
import { resourceOperationsFunctions } from './execute';

export class EvolutionApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Wazend API',
		name: 'wazendApi',
		icon: 'file:wazendapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Wazend API',
		defaults: {
			name: 'Wazend API',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'wazendApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://docs.wazend.net/wazend',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		// La estructura de propiedades del nodo:
		// • Recursos: Recursos disponibles (Instancia, Mensajes, Eventos, Integraciones)
		// • Operaciones: Operaciones de cada recurso (Ej: Crear instancia, Enviar mensaje, Definir Webhook)
		// • Campos: Campos de cada operación
		properties: evolutionNodeProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// Busca la función para el recurso y la operación seleccionados
		const fn = resourceOperationsFunctions[resource][operation];

		// Si no encuentra la función, retorna un error
		if (!fn) {
			throw new NodeApiError(this.getNode(), {
				message: 'Operación no soportada.',
				description: `La función "${operation}" para el recurso "${resource}" no es soportada!`,
			});
		}

		// Ejecuta la función
		const responseData = await fn(this);

		// Retorna solo el JSON
		return [this.helpers.returnJsonArray(responseData)];
	}
}
