import { NextResponse } from 'next/server';

export const apiResponse = {
  success: (data: any, message: string = 'Success', status: number = 200) => {
    return NextResponse.json(
      {
        success: true,
        message,
        data,
      },
      { status }
    );
  },

  error: (message: string = 'Error', status: number = 400) => {
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status }
    );
  },

  paginate: (data: any[], total: number, page: number, limit: number) => {
    const totalPages = Math.ceil(total / limit);
    return NextResponse.json(
      {
        success: true,
        data,
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
      { status: 200 }
    );
  },
};
