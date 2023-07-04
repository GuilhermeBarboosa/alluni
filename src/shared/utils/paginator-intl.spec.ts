import { getPaginatorIntl } from './paginator-intl';

describe('paginatorIntl', () => {
    it('returns paginator', () => {
        const paginatorIntl = getPaginatorIntl();
        expect(paginatorIntl.itemsPerPageLabel).toEqual('Itens por página:');
        expect(paginatorIntl.nextPageLabel).toEqual('Próxima página');
        expect(paginatorIntl.previousPageLabel).toEqual('Voltar página');
        expect(paginatorIntl.getRangeLabel(0, 0, 100)).toEqual('0 de 100');
        expect(paginatorIntl.getRangeLabel(0, 10, 0)).toEqual('0 de 0');
        expect(paginatorIntl.getRangeLabel(1, 10, 100)).toEqual('11 - 20 de 100');
        expect(paginatorIntl.getRangeLabel(9, 10, 100)).toEqual('91 - 100 de 100');
    });
});