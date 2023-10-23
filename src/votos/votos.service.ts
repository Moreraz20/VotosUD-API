import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VotoDocument } from './voto.schema';
import { CreateVotoDto } from './createVotoDto';
import { ObjectId } from 'mongodb';
import { UpdateVotoDto } from './updateVotoDto';
import { ResponseUpdate } from './interfaceVoto';

@Injectable()
export class VotosService {
  constructor(
    @InjectModel('voto')
    private readonly VotoModel: Model<VotoDocument>,
  ) {}

  //Create voto
  async createVoto(createVotoDto: CreateVotoDto) {
    const dataVoto = new this.VotoModel(createVotoDto);
    try {
      await dataVoto.save();
      return {
        message: 'Voto created',
        voto: dataVoto,
      };
    } catch (e) {
      console.log(e);
      return {
        message: 'Voto create failed',
      };
    }
  }

  //List all Voto's
  async findAll(): Promise<VotoDocument[]> {
    return this.VotoModel.find();
  }

  //find Voto by Id
  async findVoto(id: string) {
    if (ObjectId.isValid(id)) {
      const query = await this.VotoModel.findOne({ _id: id });
      return query;
    } else {
      throw new BadRequestException('Voto not found');
    }
  }
  //Delete Voto by Id
  async deleteVoto(id: string): Promise<ResponseUpdate> {
    if (ObjectId.isValid(id)) {
      const found = await this.findVoto(id);
      if (found) {
        try {
          await this.VotoModel.deleteOne({
            _id: id,
          });
          return {
            message: 'voto deleted',
            id: id,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new NotFoundException('Voto not found');
      }
    } else {
      throw new BadRequestException('Voto not found');
    }
  }

  //Update voto by Id
  async updateVoto(
    id: string,
    updateVotoDto: UpdateVotoDto,
  ): Promise<ResponseUpdate> {
    if (ObjectId.isValid(id)) {
      const found = await this.findVoto(id);
      if (found) {
        try {
          const voto = await this.VotoModel.findOneAndUpdate(
            { _id: id },
            updateVotoDto,
          );
          return {
            message: 'Voto updated',
            id: voto._id,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new NotFoundException('Voto not found');
      }
    } else {
      throw new BadRequestException('Voto not found');
    }
  }
}
