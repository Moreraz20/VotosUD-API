import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PartidoDocument } from './partido.schema';
import { CreatePartidoDto } from './createPartidoDto';
import { ObjectId } from 'mongodb';
import { ResponseUpdate } from './interfacePartido';
import { UpdatePartidoDto } from './updatePartidoDto';

@Injectable()
export class PartidosService {
  constructor(
    @InjectModel('partido')
    private readonly PartidoModel: Model<PartidoDocument>,
  ) {}

  //Create partido
  async createPartido(createPartidoDto: CreatePartidoDto) {
    const dataPartido = new this.PartidoModel(createPartidoDto);
    try {
      await dataPartido.save();
      return {
        message: 'Partido created',
        partido: dataPartido,
      };
    } catch (e) {
      console.log(e);
      return {
        message: 'Partido create failed',
      };
    }
  }

  //List all partido's
  async findAll(): Promise<PartidoDocument[]> {
    return this.PartidoModel.find();
  }

  //find partido by Id
  async findPartido(id: string) {
    if (ObjectId.isValid(id)) {
      const query = await this.PartidoModel.findOne({ _id: id });
      return query;
    } else {
      throw new BadRequestException('Partido not found');
    }
  }
  //Delete Partido by Id
  async deletePartido(id: string): Promise<ResponseUpdate> {
    if (ObjectId.isValid(id)) {
      const found = await this.findPartido(id);
      if (found) {
        try {
          await this.PartidoModel.deleteOne({
            _id: id,
          });
          return {
            message: 'Partido deleted',
            id: id,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new NotFoundException('Partido not found');
      }
    } else {
      throw new BadRequestException('Partido not found');
    }
  }

  //Update Partido by Id
  async updatePartido(
    id: string,
    updatePartidoDto: UpdatePartidoDto,
  ): Promise<ResponseUpdate> {
    if (ObjectId.isValid(id)) {
      const found = await this.findPartido(id);
      if (found) {
        try {
          const partido = await this.PartidoModel.findOneAndUpdate(
            { _id: id },
            updatePartidoDto,
          );
          return {
            message: 'Partido updated',
            id: partido._id,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new NotFoundException('Partido not found');
      }
    } else {
      throw new BadRequestException('Partido not found');
    }
  }
}
