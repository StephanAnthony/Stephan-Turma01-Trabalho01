const GerenciadorDeTarefas = require('../src/Trabalho01Turma01');

describe('Testes da classe GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        // Inicializa uma nova instância do GerenciadorDeTarefas antes de cada teste.
        gerenciador = new GerenciadorDeTarefas();
    });

    test('Deve adicionar uma tarefa com descrição válida', () => {
        // Testa se uma tarefa com uma descrição válida é adicionada corretamente.
        const tarefa = { id: 1, descricao: 'Tarefa importante' };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefas()).toContainEqual(tarefa);
    });

    test('Não deve adicionar uma tarefa com descrição inválida', () => {
        // Testa se uma tarefa com uma descrição inválida (por exemplo, apenas números) não é adicionada e lança um erro.
        expect(() => {
            gerenciador.adicionarTarefa({ id: 2, descricao: '123' });
        }).toThrow('Erro ao cadastrar tarefa');
    });

    test('Deve remover uma tarefa existente', () => {
        // Testa se uma tarefa existente pode ser removida corretamente.
        const tarefa = { id: 1, descricao: 'Tarefa importante' };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTarefa(1);
        expect(gerenciador.listarTarefas()).not.toContainEqual(tarefa);
    });

    test('Deve buscar uma tarefa por ID', () => {
        // Testa se é possível buscar uma tarefa existente usando seu ID.
        const tarefa = { id: 1, descricao: 'Tarefa importante' };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.buscarTarefaPorId(1)).toEqual(tarefa);
    });

    test('Deve contar o número de tarefas', () => {
        // Testa se o número total de tarefas é contado corretamente.
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1' });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2' });
        expect(gerenciador.contarTarefas()).toBe(2);
    });

    test('Deve marcar uma tarefa como concluída', () => {
        // Testa se uma tarefa pode ser marcada como concluída e verifica se o status de conclusão é atualizado corretamente.
        const tarefa = { id: 1, descricao: 'Tarefa importante' };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.marcarTarefaComoConcluida(1);
        expect(gerenciador.buscarTarefaPorId(1).concluida).toBe(true);
    });

    test('Deve listar tarefas concluídas', () => {
        // Testa se apenas as tarefas concluídas são listadas corretamente.
        const tarefa1 = { id: 1, descricao: 'Tarefa 1', concluida: true };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2', concluida: false };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        expect(gerenciador.listarTarefasConcluidas()).toContainEqual(tarefa1);
        expect(gerenciador.listarTarefasConcluidas()).not.toContainEqual(tarefa2);
    });

    test('Deve listar tarefas pendentes', () => {
        // Testa se apenas as tarefas pendentes são listadas corretamente.
        const tarefa1 = { id: 1, descricao: 'Tarefa 1', concluida: true };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2', concluida: false };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        expect(gerenciador.listarTarefasPendentes()).toContainEqual(tarefa2);
        expect(gerenciador.listarTarefasPendentes()).not.toContainEqual(tarefa1);
    });

    test('Deve adicionar e remover tags de uma tarefa', () => {
        // Testa se tags podem ser adicionadas e removidas de uma tarefa corretamente.
        const tarefa = { id: 1, descricao: 'Tarefa importante' };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.adicionarTagATarefa(1, 'Tag1');
        gerenciador.adicionarTagATarefa(1, 'Tag2');
        expect(gerenciador.buscarTarefaPorId(1).tags).toContain('Tag1');
        expect(gerenciador.buscarTarefaPorId(1).tags).toContain('Tag2');
        gerenciador.removerTagDaTarefa(1, 'Tag1');
        expect(gerenciador.buscarTarefaPorId(1).tags).not.toContain('Tag1');
    });

    test('Deve listar tarefas por tag', () => {
        // Testa se tarefas podem ser listadas corretamente com base em uma tag específica.
        const tarefa1 = { id: 1, descricao: 'Tarefa 1', tags: ['Tag1'] };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2', tags: ['Tag2'] };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        expect(gerenciador.listarTarefasPorTag('Tag1')).toContainEqual(tarefa1);
        expect(gerenciador.listarTarefasPorTag('Tag1')).not.toContainEqual(tarefa2);
    });

    test('Deve ordenar tarefas por data', () => {
        // Testa se as tarefas são ordenadas corretamente por data.
        const tarefa1 = { id: 1, descricao: 'Tarefa 1', data: '2024-01-02' };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2', data: '2024-01-01' };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.ordenarTarefasPorData();
        expect(gerenciador.listarTarefas()[0]).toEqual(tarefa2); // Data mais antiga deve vir primeiro
        expect(gerenciador.listarTarefas()[1]).toEqual(tarefa1);
    });

    test('Deve ordenar tarefas por prioridade', () => {
        // Testa se as tarefas são ordenadas corretamente por prioridade.
        const tarefa1 = { id: 1, descricao: 'Tarefa 1', prioridade: 2 };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2', prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.ordenarTarefasPorPrioridade();
        expect(gerenciador.listarTarefas()[0]).toEqual(tarefa2); // Prioridade mais alta deve vir primeiro
        expect(gerenciador.listarTarefas()[1]).toEqual(tarefa1);
    });
});