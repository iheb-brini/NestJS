import { Type } from "@nestjs/common";

export interface ArgumentMetadata {
    readonly type: 'body' | 'query' | 'param' | 'custom';
    readonly metatype?: Type<any>;
    readonly data?: string;
}
